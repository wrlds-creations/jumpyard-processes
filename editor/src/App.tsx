import React, { useCallback, useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Undo2, RotateCcw, Eye, Pencil, Download } from 'lucide-react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  reconnectEdge,
  useReactFlow,
  MarkerType,
  Position,
  Handle,
  ConnectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { pilotNodes, pilotEdges } from './data/pilotFlow';
import { localizeValue, translateText, type Language } from './i18n';

type DiagramHistoryEntry = { nodes: any[]; edges: any[] };

// ─── Custom Node Components ────────────────────────────────────────────────────

const EXTENDED_HANDLE_OPTIONS = [
  { value: '', label: 'automatisk' },
  { value: 'left-top', label: 'vänster uppe' },
  { value: 'left', label: 'vänster' },
  { value: 'left-bottom', label: 'vänster nere' },
  { value: 'top-left', label: 'uppe vänster' },
  { value: 'top', label: 'uppe' },
  { value: 'top-right', label: 'uppe höger' },
  { value: 'right-top', label: 'höger uppe' },
  { value: 'right', label: 'höger' },
  { value: 'right-bottom', label: 'höger nere' },
  { value: 'bottom-left', label: 'nere vänster' },
  { value: 'bottom', label: 'nere' },
  { value: 'bottom-right', label: 'nere höger' },
] as const;

const HANDLE_HIDDEN_STYLE = {
  opacity: 0,
  pointerEvents: 'none' as const,
};

const EDGE_PATH_MODES = new Set(['smoothstep', 'step', 'straight']);

const BASIC_HANDLE_OPTIONS = [
  { value: '', label: 'automatisk' },
  { value: 'left', label: 'vänster' },
  { value: 'top', label: 'uppe' },
  { value: 'right', label: 'höger' },
  { value: 'bottom', label: 'nere' },
] as const;

function getHandleOptionsForNode(node: any) {
  return node?.type === 'task' || node?.type === 'database' || node?.type === 'service'
    ? EXTENDED_HANDLE_OPTIONS
    : BASIC_HANDLE_OPTIONS;
}

function getHandleStyle(visible: boolean, style: React.CSSProperties = {}) {
  return visible ? style : { ...style, ...HANDLE_HIDDEN_STYLE };
}

function getValidHandleIdsForNode(node: any) {
  return new Set(
    getHandleOptionsForNode(node)
      .map((option) => option.value)
      .filter((value): value is string => Boolean(value)),
  );
}

function normalizeHandleForNode(node: any, handleId?: string) {
  if (!handleId) return undefined;
  if (!node) return handleId;
  return getValidHandleIdsForNode(node).has(handleId) ? handleId : undefined;
}

function MultiHandleSet({ visible = true }: { visible?: boolean }) {
  const commonClass = 'w-2 h-2 !bg-primary';
  return (
    <>
      <Handle type="source" position={Position.Left} id="left-top" className={commonClass} style={getHandleStyle(visible, { top: '24%' })} isConnectableStart={visible} isConnectableEnd={visible} />
      <Handle type="source" position={Position.Left} id="left" className={commonClass} style={getHandleStyle(visible, { top: '50%' })} isConnectableStart={visible} isConnectableEnd={visible} />
      <Handle type="source" position={Position.Left} id="left-bottom" className={commonClass} style={getHandleStyle(visible, { top: '76%' })} isConnectableStart={visible} isConnectableEnd={visible} />

      <Handle type="source" position={Position.Top} id="top-left" className={commonClass} style={getHandleStyle(visible, { left: '24%' })} isConnectableStart={visible} isConnectableEnd={visible} />
      <Handle type="source" position={Position.Top} id="top" className={commonClass} style={getHandleStyle(visible, { left: '50%' })} isConnectableStart={visible} isConnectableEnd={visible} />
      <Handle type="source" position={Position.Top} id="top-right" className={commonClass} style={getHandleStyle(visible, { left: '76%' })} isConnectableStart={visible} isConnectableEnd={visible} />

      <Handle type="source" position={Position.Right} id="right-top" className={commonClass} style={getHandleStyle(visible, { top: '24%' })} isConnectableStart={visible} isConnectableEnd={visible} />
      <Handle type="source" position={Position.Right} id="right" className={commonClass} style={getHandleStyle(visible, { top: '50%' })} isConnectableStart={visible} isConnectableEnd={visible} />
      <Handle type="source" position={Position.Right} id="right-bottom" className={commonClass} style={getHandleStyle(visible, { top: '76%' })} isConnectableStart={visible} isConnectableEnd={visible} />

      <Handle type="source" position={Position.Bottom} id="bottom-left" className={commonClass} style={getHandleStyle(visible, { left: '24%' })} isConnectableStart={visible} isConnectableEnd={visible} />
      <Handle type="source" position={Position.Bottom} id="bottom" className={commonClass} style={getHandleStyle(visible, { left: '50%' })} isConnectableStart={visible} isConnectableEnd={visible} />
      <Handle type="source" position={Position.Bottom} id="bottom-right" className={commonClass} style={getHandleStyle(visible, { left: '76%' })} isConnectableStart={visible} isConnectableEnd={visible} />
    </>
  );
}

const TaskNode = ({ data }: any) => {
  const variant = data.variant || 'default';
  const shell = {
    default: 'bg-surface-container',
    job: 'bg-[#253128]',
    service: 'bg-[#222c38]',
  }[variant] || 'bg-surface-container';
  const border = data.edgeHighlighted
    ? 'border-[#ff8e7d] shadow-[0_0_12px_rgba(255,142,125,0.5)]'
    : variant === 'job'
      ? 'border-emerald-300/30'
      : variant === 'service'
        ? 'border-sky-200/30'
        : 'border-white/10';
  const labelTone = variant === 'job'
    ? 'text-emerald-100'
    : variant === 'service'
      ? 'text-sky-100'
      : 'text-white';

  return (
    <div className={`px-4 py-3 shadow-md rounded-md border-2 ${shell} ${border} ${data.dimmed ? 'opacity-35' : 'opacity-100'} w-fit max-w-[230px] text-center transition-all`}>
      <MultiHandleSet visible={!!data.editMode} />
      {data.badge && (
        <div className={`mb-1 text-[9px] font-black uppercase tracking-[0.18em] ${variant === 'job' ? 'text-emerald-200/80' : variant === 'service' ? 'text-sky-200/80' : 'text-white/45'}`}>
          {data.badge}
        </div>
      )}
      <div className={`text-xs font-black italic epilogue uppercase break-words leading-snug whitespace-normal ${labelTone}`}>
        {data.label}
      </div>
      {data.cadence && (
        <div className="mt-2 text-[10px] font-bold uppercase tracking-wide text-white/45">{data.cadence}</div>
      )}
      {data.channel && (
        <div className={`mt-1.5 inline-block px-1.5 py-0.5 text-[8px] font-black uppercase tracking-widest rounded ${
          data.channel === 'primary-remote' ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : data.channel === 'primary-onsite' ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : data.channel === 'assisted-onsite' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          : data.channel === 'onsite-purchase' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
          : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
        }`}>
          {data.channel === 'primary-remote' ? 'Mobil · hemma'
          : data.channel === 'primary-onsite' ? 'Mobil · på plats'
          : data.channel === 'assisted-onsite' ? 'Assisterad kiosk'
          : data.channel === 'onsite-purchase' ? 'Köp på plats'
          : 'Enbart kiosk'}
        </div>
      )}
    </div>
  );
};

function getApiStatusClass(status?: string) {
  if (status === 'confirmed') return 'border-emerald-400/30 bg-emerald-500/15 text-emerald-200';
  if (status === 'workaround') return 'border-emerald-300/25 bg-emerald-500/10 text-emerald-100';
  if (status === 'limited') return 'border-amber-400/35 bg-amber-500/15 text-amber-200';
  if (status === 'open') return 'border-yellow-300/35 bg-yellow-400/15 text-yellow-100';
  if (status === 'not-v1') return 'border-slate-300/25 bg-slate-400/12 text-slate-200';
  return 'border-sky-300/20 bg-sky-500/12 text-sky-200';
}

const ServiceNode = ({ data }: any) => {
  const hideDetailsOnCanvas = data.hideDetailsOnCanvas || data.lane === 'AWS + Aurora' || data.lane === 'Databaser / Aurora';
  const statusLabel = data.apiStatusLabel || data.badge;
  const border = data.edgeHighlighted
    ? 'border-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.35)]'
    : data.isPrimary
      ? 'border-primary/70 shadow-[0_0_12px_rgba(255,142,125,0.2)]'
      : 'border-sky-200/20';
  return (
    <div className={`min-w-[200px] max-w-[220px] rounded-xl border bg-[#1b2632]/92 px-4 py-3 text-left shadow-md transition-all ${border} ${data.dimmed ? 'opacity-30' : 'opacity-100'}`}>
      <MultiHandleSet visible={!!data.editMode} />
      {statusLabel && (
        <div className={`mb-2 inline-flex rounded-full border px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.18em] ${getApiStatusClass(data.apiStatus)}`}>
          {statusLabel}
        </div>
      )}
      <div className="text-[11px] font-black uppercase tracking-[0.12em] text-sky-50 break-words leading-snug">
        {data.label}
      </div>
      {data.details && !hideDetailsOnCanvas && (
        <div className="mt-2 text-[10px] leading-relaxed text-white/46">
          {data.details}
        </div>
      )}
      {data.cadence && (
        <div className="mt-2 text-[10px] font-bold uppercase tracking-wide text-white/45">{data.cadence}</div>
      )}
    </div>
  );
};

const PROCESS_LANES = new Set(['Gäst', 'Webbapp', 'Parkpersonal']);
const TECHNICAL_LANES = new Set(['Databaser / Aurora', 'AWS + Aurora', 'Driftjobb', 'Roller API', 'Roller']);
const STRUCTURAL_NODE_TYPES = new Set(['pool', 'lane', 'zone']);

function getNodeLane(node: any): string {
  return String(node?.data?.lane || '');
}

function isProcessActivityNode(node: any): boolean {
  return !!node && !STRUCTURAL_NODE_TYPES.has(node.type) && PROCESS_LANES.has(getNodeLane(node));
}

function isDatabaseNode(node: any): boolean {
  const lane = getNodeLane(node);
  return !!node && !STRUCTURAL_NODE_TYPES.has(node.type) && (node.type === 'database' || lane === 'Databaser / Aurora' || lane === 'AWS + Aurora');
}

function isRollerApiNode(node: any): boolean {
  const lane = getNodeLane(node);
  return !!node && !STRUCTURAL_NODE_TYPES.has(node.type) && (lane === 'Roller API' || lane === 'Roller');
}

function isTechnicalNode(node: any): boolean {
  return !!node && !STRUCTURAL_NODE_TYPES.has(node.type) && TECHNICAL_LANES.has(getNodeLane(node));
}

function shouldShowEdgeInSingleView(edge: any, nodeLookup: Map<string, any>, selectedDataNodeId: string | null): boolean {
  if (getEdgeCategory(edge) !== 'data') return true;

  const sourceNode = nodeLookup.get(edge.source);
  const targetNode = nodeLookup.get(edge.target);
  const sourceIsProcess = isProcessActivityNode(sourceNode);
  const targetIsProcess = isProcessActivityNode(targetNode);
  const sourceIsTechnical = isTechnicalNode(sourceNode);
  const targetIsTechnical = isTechnicalNode(targetNode);
  const isDirectDatabaseRoller =
    (isDatabaseNode(sourceNode) && isRollerApiNode(targetNode)) ||
    (isRollerApiNode(sourceNode) && isDatabaseNode(targetNode));

  if (isDirectDatabaseRoller) return false;

  if (sourceIsTechnical && targetIsTechnical) return true;

  if ((sourceIsProcess && targetIsTechnical) || (sourceIsTechnical && targetIsProcess)) {
    return selectedDataNodeId === edge.source || selectedDataNodeId === edge.target;
  }

  return true;
}

function getProjectedNodeData(node: any, language: Language) {
  return localizeValue(node.data, language);
}

const GatewayNode = ({ data }: any) => (
  <div className={`relative w-16 h-16 flex items-center justify-center transition-opacity ${data.dimmed ? 'opacity-30' : 'opacity-100'}`}>
    <>
      <Handle type="source" position={Position.Left} id="left" className="!w-3 !h-3 !bg-primary !border-0 !rounded-full" style={getHandleStyle(!!data.editMode)} isConnectableStart={!!data.editMode} isConnectableEnd={!!data.editMode} />
      <Handle type="source" position={Position.Top} id="top" className="!w-3 !h-3 !bg-primary !border-0 !rounded-full" style={getHandleStyle(!!data.editMode)} isConnectableStart={!!data.editMode} isConnectableEnd={!!data.editMode} />
      <Handle type="source" position={Position.Right} id="right" className="!w-3 !h-3 !bg-primary !border-0 !rounded-full" style={getHandleStyle(!!data.editMode)} isConnectableStart={!!data.editMode} isConnectableEnd={!!data.editMode} />
      <Handle type="source" position={Position.Bottom} id="bottom" className="!w-3 !h-3 !bg-primary !border-0 !rounded-full" style={getHandleStyle(!!data.editMode)} isConnectableStart={!!data.editMode} isConnectableEnd={!!data.editMode} />
    </>
    <div className={`absolute inset-0 transform rotate-45 border-2 bg-[#1a1a1a] pointer-events-none ${data.edgeHighlighted ? 'border-white shadow-[0_0_16px_rgba(255,142,125,0.7)]' : 'border-[#ff8e7d] shadow-[0_0_15px_rgba(255,142,125,0.2)]'}`}></div>
    <div className="relative z-10 text-[10px] font-black text-[#ff8e7d] italic text-center px-1">{data.label}</div>
  </div>
);

const EventNode = ({ data }: any) => (
  <div className={`flex flex-col items-center transition-all ${data.dimmed ? 'opacity-30' : 'opacity-100'}`}>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${data.edgeHighlighted ? 'shadow-[0_0_12px_rgba(255,142,125,0.6)]' : ''} ${data.type === 'start' ? 'border-green-500 bg-green-500/20' : data.type === 'end' ? 'border-red-500 bg-red-500/20' : 'border-yellow-500 bg-yellow-500/20'} relative`}>
      <Handle type="source" position={Position.Left} id="left" className="w-2 h-2 !bg-primary" style={getHandleStyle(!!data.editMode)} isConnectableStart={!!data.editMode} isConnectableEnd={!!data.editMode} />
      <Handle type="source" position={Position.Top} id="top" className="w-2 h-2 !bg-primary" style={getHandleStyle(!!data.editMode)} isConnectableStart={!!data.editMode} isConnectableEnd={!!data.editMode} />
      <Handle type="source" position={Position.Right} id="right" className="w-2 h-2 !bg-primary" style={getHandleStyle(!!data.editMode)} isConnectableStart={!!data.editMode} isConnectableEnd={!!data.editMode} />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-2 h-2 !bg-primary" style={getHandleStyle(!!data.editMode)} isConnectableStart={!!data.editMode} isConnectableEnd={!!data.editMode} />
    </div>
    {data.label && <div className="text-[8px] font-bold text-white uppercase text-center leading-tight mt-1 max-w-[90px] whitespace-normal">{data.label}</div>}
  </div>
);

const DatabaseNode = ({ data }: any) => (
  <div className={`px-4 py-3 shadow-md rounded-md ${data.future ? 'bg-[#28303a]' : 'bg-[#2f2f2f]'} border-2 ${data.edgeHighlighted ? 'border-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.35)]' : data.future ? 'border-slate-300/25 border-dashed' : 'border-white/20'} ${data.dimmed ? 'opacity-30' : 'opacity-100'} ${data.collapsed ? 'min-w-[230px] max-w-[250px]' : 'min-w-[250px] max-w-[280px]'} text-left relative overflow-hidden transition-all`}>
    <div className="absolute top-0 left-0 w-full h-2 bg-white/10 rounded-t-[50%]"></div>
    <div className="absolute bottom-0 left-0 w-full h-2 bg-white/10 rounded-b-[50%]"></div>
    <MultiHandleSet visible={!!data.editMode} />
    {data.onToggleCollapse && (
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          data.onToggleCollapse?.();
        }}
        title={data.collapsed ? data.expandLabel : data.collapseLabel}
        className="nodrag nopan absolute top-3 right-3 z-10 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/6 text-[11px] font-black text-white/70 transition-colors hover:bg-white/12 hover:text-white"
      >
        {data.collapsed ? '+' : '-'}
      </button>
    )}
    {data.statusTag && (
      <div className="absolute left-3 top-3 rounded-full border border-white/12 bg-white/6 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.18em] text-white/60">
        {data.statusTag}
      </div>
    )}
    <div className="pr-7">
      <div className={`text-xs font-black italic epilogue uppercase text-white/90 text-center ${data.statusTag ? 'pt-6' : ''}`}>{data.label}</div>
      {data.collapsed ? (
        <>
          {data.summary && (
            <p className="mt-2 text-[10px] leading-relaxed text-white/64">
              {data.summary}
            </p>
          )}
          <ul className="mt-2 space-y-1">
            {(data.summaryItems || data.contains || data.keyFields || []).slice(0, 3).map((item: string) => (
              <li key={item} className="text-[10px] leading-snug text-white/72">
                {item}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          {data.summary && (
            <p className="mt-2 text-[10px] leading-relaxed text-white/60">
              {data.summary}
            </p>
          )}
          {data.tables?.length > 0 && (
            <div className="mt-2 flex flex-wrap justify-center gap-1">
              {data.tables.slice(0, 5).map((table: string) => (
                <span key={table} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/68">
                  {table}
                </span>
              ))}
            </div>
          )}
          {data.writePattern && (
            <div className="mt-2 text-[10px] font-bold uppercase tracking-wide text-cyan-200/85 text-center">{data.writePattern}</div>
          )}
          {data.keyFields?.length > 0 && (
            <ul className="mt-2 space-y-1">
              {data.keyFields.slice(0, 5).map((item: string) => (
                <li key={item} className="text-[10px] leading-snug text-white/72">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {(data.usedBy || data.jobs)?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {(data.usedBy || data.jobs).slice(0, 3).map((item: string) => (
                <span key={item} className="rounded-full border border-cyan-400/15 bg-cyan-400/8 px-2 py-0.5 text-[9px] font-bold text-cyan-100/75">
                  {item}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  </div>
);

const NoteNode = ({ data }: any) => {
  const tone = data.tone || 'info';
  const palette = {
    guide: {
      shell: 'bg-[#585858]/92 border-white/20',
      heading: 'text-white',
      body: 'text-white/80',
      chip: 'bg-white/8 border-white/12 text-white/82',
    },
    info: {
      shell: 'bg-cyan-200/18 border-cyan-100/40',
      heading: 'text-cyan-300',
      body: 'text-cyan-50/92',
      chip: 'bg-cyan-200/14 border-cyan-100/30 text-cyan-50/92',
    },
    system: {
      shell: 'bg-orange-200/18 border-orange-100/40',
      heading: 'text-orange-300',
      body: 'text-orange-50/92',
      chip: 'bg-orange-200/14 border-orange-100/30 text-orange-50/92',
    },
    warning: {
      shell: 'bg-amber-200/20 border-amber-100/42',
      heading: 'text-amber-200',
      body: 'text-amber-50/94',
      chip: 'bg-amber-200/16 border-amber-100/30 text-amber-50/94',
    },
  }[tone] ?? {
    shell: 'bg-cyan-200/18 border-cyan-100/40',
    heading: 'text-cyan-300',
    body: 'text-cyan-50/92',
    chip: 'bg-cyan-200/14 border-cyan-100/30 text-cyan-50/92',
  };
  const items = (data.risks?.length ? data.risks : data.systems?.length ? data.systems : data.sources || []).slice(0, 4);

  return (
    <div className={`w-[280px] rounded-xl border px-4 py-3 shadow-lg backdrop-blur-sm transition-all ${data.edgeHighlighted ? 'shadow-[0_0_16px_rgba(255,255,255,0.18)]' : ''} ${data.dimmed ? 'opacity-30' : 'opacity-100'} ${palette.shell}`}>
      <Handle type="source" position={Position.Left} id="left" className="w-2 h-2 !bg-white/40 opacity-0" />
      <Handle type="source" position={Position.Right} id="right" className="w-2 h-2 !bg-white/40 opacity-0" />
      <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${palette.heading}`}>{data.label}</div>
      {data.details && (
        <p className={`mt-2 text-[11px] leading-relaxed whitespace-pre-line ${palette.body}`}>{data.details}</p>
      )}
      {items.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {items.map((item: string) => (
            <li key={item} className={`rounded-md border px-2 py-1 text-[10px] leading-relaxed ${palette.chip}`}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ZoneNode = ({ data }: any) => {
  const theme = data.theme || 'runtime';
  const palette = {
    ops: 'bg-emerald-400/6 border-emerald-300/20',
    runtime: 'bg-cyan-400/5 border-cyan-300/18',
    architecture: 'bg-[#11161d]/72 border-white/10',
    future: 'bg-slate-400/6 border-slate-300/20 border-dashed',
  }[theme] || 'bg-white/5 border-white/10';

  return (
    <div
      className={`rounded-2xl border px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.18)] ${palette}`}
      style={{ width: data.widthPx, height: data.heightPx }}
    >
      <div className="text-[11px] font-black uppercase tracking-[0.24em] text-white/72">{data.label}</div>
      {data.subtitle && (
        <div className="mt-1 text-[11px] leading-relaxed text-white/45">{data.subtitle}</div>
      )}
    </div>
  );
};

const LaneNode = ({ data }: any) => {
  const h = data.heightPx ? `${data.heightPx}px` : (data.height || '200px');
  return (
    <div
      className={`border-b border-white/8 flex items-stretch ${data.index % 2 === 0 ? 'bg-[#4f4f4f]' : 'bg-[#5a5a5a]'} ${data.layoutSelected ? 'border-t-2 border-b-2 border-primary/45 shadow-[inset_0_0_0_1px_rgba(255,142,125,0.18)]' : ''}`}
      style={{ height: h, width: data.width || '5000px', cursor: data.editMode ? (data.layoutSelected ? 'grab' : 'pointer') : 'default' }}
    >
      <div className="w-12 bg-[#2f2f2f] border-r border-white/10 flex items-center justify-center shadow-[5px_0_15px_rgba(0,0,0,0.25)] shrink-0">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 transform -rotate-90 whitespace-nowrap">
          {data.label}
        </span>
      </div>
    </div>
  );
};

const PoolNode = ({ data }: any) => (
  <div
    style={{
      width: data.widthPx || 6600,
      height: data.heightPx || 300,
      backgroundColor: `${data.color}20`,
      border: data.layoutSelected ? `2px solid ${data.color}80` : `1px solid ${data.color}40`,
      borderRadius: 4,
      position: 'relative',
      pointerEvents: data.editMode ? 'auto' : 'none',
      cursor: data.editMode ? (data.layoutSelected ? 'grab' : 'pointer') : 'default',
      boxShadow: data.layoutSelected ? 'inset 0 0 0 1px rgba(255,255,255,0.08)' : undefined,
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: -36,
        top: 0,
        bottom: 0,
        width: 32,
        backgroundColor: `${data.color}28`,
        border: `1px solid ${data.color}40`,
        borderRadius: '4px 0 0 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{
        fontSize: 11,
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: `${data.color}cc`,
        transform: 'rotate(-90deg)',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-epilogue, sans-serif)',
        fontStyle: 'italic',
      }}>
        {data.label}
      </span>
    </div>
  </div>
);

const nodeTypes = { task: TaskNode, service: ServiceNode, gateway: GatewayNode, event: EventNode, database: DatabaseNode, note: NoteNode, lane: LaneNode, pool: PoolNode, zone: ZoneNode };

type RollerApiReference = {
  name: string;
  docUrl?: string;
  docStatus?: 'official' | 'confirm';
  note?: string;
};

const ROLLER_API_STAGE_MAP = [
  {
    priority: 'KRITISK',
    stage: 'Ny bokning på plats',
    endpoints: ['Hämta produkttillgänglighet', 'Beräkna bokningskostnad', 'Skapa utkastbokning', 'Publicera utkastbokning', 'Presentkort som betalmedel'],
    desc: 'Starttid väljs först. Cloud hämtar tillgänglighet, räknar slutpris, skapar utkast och publicerar efter godkänd betalning. Presentkort används som betalmedel i utkastflödet.',
  },
  {
    priority: 'KRITISK',
    stage: 'Tillägg på befintlig bokning',
    endpoints: ['Skapa utkastbokning', 'Publicera utkastbokning', 'Presentkort som betalmedel', 'Medlemskod som betalmedel', 'Rabattkod i checkout'],
    desc: 'Valt huvudmönster skapar en separat länkad bokning så betalning stannar i webbappen med inbäddad Roller/Adyen.',
  },
  {
    priority: 'KRITISK',
    stage: 'Bokningskopia och sökning',
    endpoints: ['Sök bokningar', 'Hämta bokningsdetalj', 'Bokningswebhook under dagen'],
    desc: 'Daglig import bygger startläge. Bokningswebhooken tar sedan in nya och ändrade bokningar under dagen.',
  },
  {
    priority: 'KRITISK',
    stage: 'Inlösen vid utlämning',
    endpoints: ['Lös in biljetter', 'Inlösenhändelse'],
    desc: 'Roller-inlösen gäller bara biljetter och sessionprodukter. Lagerartiklar och tillägg lämnas ut via Cloud-rättigheter.',
  },
  {
    priority: 'WORKAROUND',
    stage: 'Bekräftat med workaround',
    endpoints: ['Stöd för länkad bokning', 'Flerbesök tillfälligt'],
    desc: 'Länkningen mellan originalbokning och separat tilläggsbokning ägs av JumpYard Cloud. Flerbesök hålls interim tills Roller har dedikerad livebalans.',
  },
] as const;

const ROLLER_API_REFERENCES: Record<string, RollerApiReference> = {
  'Sök bokningar': {
    name: 'Sök bokningar',
    docUrl: 'https://docs.roller.app/docs/rest-api/fbb465d1ed24d-search-for-bookings',
    docStatus: 'official',
  },
  'Hämta bokningsdetalj': {
    name: 'Hämta bokningsdetalj',
    docUrl: 'https://docs.roller.app/docs/rest-api/olt8a8nxs75ev',
    docStatus: 'official',
  },
  'Hämta produkttillgänglighet': {
    name: 'Hämta produkttillgänglighet',
    docUrl: 'https://docs.roller.app/docs/rest-api/efb9788ea3808',
    docStatus: 'official',
  },
  'Beräkna bokningskostnad': {
    name: 'Beräkna bokningskostnad',
    docUrl: 'https://docs.roller.app/docs/rest-api/branches/main/62e21c34b7ef3',
    docStatus: 'official',
  },
  'Skapa utkastbokning': {
    name: 'Skapa utkastbokning',
    docUrl: 'https://docs.roller.app/docs/rest-api/516f25029993a',
    docStatus: 'official',
  },
  'Publicera utkastbokning': {
    name: 'Publicera utkastbokning',
    docUrl: 'https://docs.roller.app/docs/rest-api/130004f5ad82e-publish-draft-booking-no-payment',
    docStatus: 'official',
  },
  'Presentkort som betalmedel': {
    name: 'Presentkort som betalmedel',
    docUrl: 'https://docs.roller.app/docs/rest-api/15x291npk7c3d-checkout-workflow',
    docStatus: 'official',
    note: 'Befintliga presentkort kan användas som betalmedel i utkastbokning; skapa/admin av presentkort är inte V1.',
  },
  'Medlemskod som betalmedel': {
    name: 'Medlemskod som betalmedel',
    docUrl: 'https://docs.roller.app/docs/rest-api/15x291npk7c3d-checkout-workflow',
    docStatus: 'official',
    note: 'Hanteras i checkoutflödet för utkastbokning där Roller stödjer tendern.',
  },
  'Rabattkod i checkout': {
    name: 'Rabattkod i checkout',
    docUrl: 'https://docs.roller.app/docs/rest-api/15x291npk7c3d-checkout-workflow',
    docStatus: 'official',
    note: 'Hanteras i checkoutflödet innan utkastet publiceras.',
  },
  'Avbryt eller släpp utkastbokning': {
    name: 'Avbryt eller släpp utkastbokning',
    docStatus: 'confirm',
    note: 'Används vid timeout eller avbrott så reserverad kapacitet inte ligger kvar',
  },
  'Bokningswebhook under dagen': {
    name: 'Bokningswebhook under dagen',
    docUrl: 'https://docs.roller.app/docs/webhooks/1tjb4whgq33f0-booking-webhook',
    docStatus: 'official',
  },
  'Lös in biljetter': {
    name: 'Lös in biljetter',
    docUrl: 'https://docs.roller.app/docs/rest-api/fb1d84952285f-redeem-tickets',
    docStatus: 'official',
  },
  'Inlösenhändelse': {
    name: 'Inlösenhändelse',
    docUrl: 'https://docs.roller.app/docs/webhooks/c9ntvneweithh-redemption-webhook',
    docStatus: 'official',
  },
  'Stöd för länkad bokning': {
    name: 'Stöd för länkad bokning',
    docStatus: 'confirm',
    note: 'JumpYard Cloud sparar relationen mellan originalbokning och separat tilläggsbokning.',
  },
  'Flerbesök tillfälligt': {
    name: 'Flerbesök tillfälligt',
    docUrl: 'https://docs.roller.app/docs/webhooks/c9ntvneweithh-redemption-webhook',
    docStatus: 'confirm',
    note: 'Bekräftat med workaround: Cloud håller interim status från inlösenhändelser tills Roller har dedikerad slutpunkt',
  },
};

const ROLLER_API_REFERENCE_ALIASES: Record<string, string> = {
  'Search for Bookings / GET /bookings': 'Sök bokningar',
  'Get Detail of a Booking / GET /bookings/{uniqueId}': 'Hämta bokningsdetalj',
  'Booking Webhook med include.payments: true': 'Bokningswebhook under dagen',
  'Get Product Availability / REST API': 'Hämta produkttillgänglighet',
  'Booking Costs / REST API': 'Beräkna bokningskostnad',
  'Create Draft Booking / REST API': 'Skapa utkastbokning',
  'ROLLER Payments / Adyen': 'Presentkort som betalmedel',
  'Publish Draft Booking / confirm': 'Publicera utkastbokning',
  'Publish Draft Booking (No Payment)': 'Publicera utkastbokning',
  'Presentkort som betalmedel i ny utkastbokning': 'Presentkort som betalmedel',
  'Presentkort som betalmedel i utkastbokning': 'Presentkort som betalmedel',
  'Medlemskod som betalmedel i utkastbokning': 'Medlemskod som betalmedel',
  'Discount codes i utkast-/checkoutflöde': 'Rabattkod i checkout',
  'Cancel/release Draft Booking vid timeout eller avbrott': 'Avbryt eller släpp utkastbokning',
  'Redeem Tickets': 'Lös in biljetter',
  'Redemption Webhook': 'Inlösenhändelse',
  'Redemption Webhook för interim multi-visit state': 'Inlösenhändelse',
  'Membership state på ticket records i GET /bookings/{uniqueId}': 'Hämta bokningsdetalj',
};

// ─── Array field editor ───────────────────────────────────────────────────────

function ArrayField({ label, items, onAdd, onRemove, placeholder }: {
  label: string; items: string[];
  onAdd: (v: string) => void; onRemove: (i: number) => void; placeholder?: string;
}) {
  const [draft, setDraft] = useState('');
  const commit = () => { if (draft.trim()) { onAdd(draft.trim()); setDraft(''); } };
  return (
    <div>
      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{label}</label>
      {items.length > 0 && (
        <ul className="space-y-1 mb-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-1">
              <span className="flex-1 text-xs text-white/60 bg-white/5 px-2 py-1 rounded leading-relaxed">{item}</span>
              <button onClick={() => onRemove(i)} className="text-white/20 hover:text-red-400 text-sm px-1 shrink-0 leading-none mt-0.5">×</button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-1">
        <input
          type="text" value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && commit()}
          placeholder={placeholder}
          className="flex-1 text-xs text-white bg-[#1a1a1a] px-2 py-1.5 rounded border border-white/10 focus:border-primary outline-none"
        />
        <button onClick={commit} className="px-2 py-1 text-xs bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded border border-white/10 transition-colors">+</button>
      </div>
    </div>
  );
}

// ─── Read-only metadata ───────────────────────────────────────────────────────

function getRollerApiReference(endpoint: string): RollerApiReference {
  const referenceKey = ROLLER_API_REFERENCE_ALIASES[endpoint] || endpoint;
  const reference = ROLLER_API_REFERENCES[referenceKey];
  return reference ? { ...reference, name: endpoint } : { name: endpoint };
}

function ApiEndpointList({
  apiPoints,
  endpoints,
  language,
}: {
  apiPoints?: string[];
  endpoints?: string[];
  language: Language;
}) {
  const t = (value: string) => translateText(value, language);
  const items = (apiPoints?.length ? apiPoints : endpoints || [])
    .filter((item, index, list) => item && list.indexOf(item) === index);
  if (!items.length) return null;

  return (
    <div>
      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('API-slutpunkter')}</label>
      <div className="space-y-2">
        {items.map((endpoint) => {
          const ref = getRollerApiReference(endpoint);
          return (
            <div key={endpoint} className="rounded border border-cyan-400/18 bg-cyan-500/8 px-3 py-2">
              <div className="text-xs font-bold text-cyan-100">{ref.name}</div>
              {ref.docUrl ? (
                <a
                  href={ref.docUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex text-[10px] font-bold text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
                >
                  {t('Öppna länk')}
                </a>
              ) : null}
              {!ref.docUrl && ref.docStatus === 'confirm' && (
                <div className="mt-1 text-[10px] text-amber-200/85">{t(ref.note || 'Doklänk att bekräfta')}</div>
              )}
              {!ref.docUrl && ref.docStatus !== 'confirm' && (
                <div className="mt-1 text-[10px] text-amber-200/85">{t('Under utredning: länk saknas i underlaget.')}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function NodeMeta({ data, language }: { data: any; language: Language }) {
  const t = (value: string) => translateText(value, language);
  const renderList = (label: string, items?: string[], tone = 'default') => {
    if (!items?.length) return null;
    const itemClass = tone === 'info'
      ? 'text-xs text-cyan-100/85 bg-cyan-500/10 border border-cyan-400/20 px-2 py-1.5 rounded leading-relaxed'
      : tone === 'danger'
        ? 'text-xs text-red-400/80 bg-red-500/10 border border-red-500/20 px-2 py-1.5 rounded leading-relaxed'
        : tone === 'warning'
          ? 'text-xs text-amber-100/90 bg-amber-500/10 border border-amber-400/22 px-2 py-1.5 rounded leading-relaxed'
          : 'text-xs text-white/65 bg-white/5 px-2 py-1.5 rounded leading-relaxed';
    return (
      <div>
        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t(label)}</label>
        <ul className="space-y-1">
          {items.map((item: string) => (
            <li key={item} className={itemClass}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <>
      {data.apiStatusLabel && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Roller-status')}</label>
          <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${getApiStatusClass(data.apiStatus)}`}>
            {data.apiStatusLabel}
          </span>
        </div>
      )}
      {(data.details || data.note) && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Beskrivning')}</label>
          <p className="text-xs text-white/70 leading-relaxed whitespace-pre-line">{data.details || data.note}</p>
        </div>
      )}
      <ApiEndpointList apiPoints={data.apiPoints} endpoints={data.endpoints} language={language} />
      {renderList('Roller har bekräftat', data.confirmedByRoller)}
      {renderList('JumpYard hanterar', data.jumpyardHandling, 'info')}
      {renderList('Begränsning / risk', data.limitations, 'warning')}
      {data.why && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Varför noden finns')}</label>
          <p className="text-xs text-white/70 leading-relaxed whitespace-pre-line">{data.why}</p>
        </div>
      )}
      {data.channel && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Kanal')}</label>
          <span className={`inline-block px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded ${
            data.channel === 'primary-remote' ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : data.channel === 'primary-onsite' ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : data.channel === 'assisted-onsite' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
            : data.channel === 'onsite-purchase' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
            : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
          }`}>
            {data.channel === 'primary-remote' ? t('Mobil · hemma')
            : data.channel === 'primary-onsite' ? t('Mobil · på plats')
            : data.channel === 'assisted-onsite' ? t('Assisterad kiosk')
            : data.channel === 'onsite-purchase' ? t('Köp på plats')
            : t('Enbart kiosk')}
          </span>
        </div>
      )}
      {data.systems?.length > 0 && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('System')}</label>
          <ul className="space-y-1">
            {data.systems.map((s: string) => (
              <li key={s} className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded">{s}</li>
            ))}
          </ul>
        </div>
      )}
      {renderList('Källtyp', data.sourceTypes, 'info')}
      {renderList('Roller-källa', data.rollerSources, 'info')}
      {data.writePattern && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Skrivmönster')}</label>
          <p className="text-xs text-cyan-100/85 bg-cyan-500/10 border border-cyan-400/20 px-2 py-1.5 rounded leading-relaxed whitespace-pre-line">
            {data.writePattern}
          </p>
        </div>
      )}
      {data.cadence && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Kadens')}</label>
          <p className="text-xs text-white/70 bg-white/5 px-2 py-1.5 rounded leading-relaxed">{data.cadence}</p>
        </div>
      )}
      {renderList('Läser', data.reads, 'info')}
      {renderList('Skriver', data.writes, 'info')}
      {renderList('Visas när', data.shownWhen)}
      {renderList('Hoppas över när', data.skippedWhen)}
      {renderList('Ger besökaren', data.givesGuest)}
      {renderList('Parkpersonal verifierar med', data.staffVerifies)}
      {renderList('Datapunkter', data.touchpoints, 'info')}
      {renderList('Tabellgrupper', data.tables)}
      {renderList('Nyckelfält', data.keyFields, 'info')}
      {renderList('Ägd status', data.ownedState)}
      {renderList('Används av', data.usedBy)}
      {renderList('Jobb', data.jobs)}
      {data.contains?.length > 0 && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Lagrar')}</label>
          <ul className="space-y-1">
            {data.contains.map((item: string) => (
              <li key={item} className="text-xs text-white/65 bg-white/5 px-2 py-1.5 rounded leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      )}
      {data.risks?.length > 0 && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Risker')}</label>
          <ul className="space-y-1">
            {data.risks.map((r: string) => (
              <li key={r} className="text-xs text-red-400/80 bg-red-500/10 border border-red-500/20 px-2 py-1.5 rounded leading-relaxed">{r}</li>
            ))}
          </ul>
        </div>
      )}
      {data.sources?.length > 0 && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Källor')}</label>
          <ul className="space-y-1">
            {data.sources.map((s: string) => (
              <li key={s} className="text-[10px] text-white/35 font-mono">{s}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function getEdgeCategory(edge: any): 'data' | 'fallback' | 'arch' | 'process' {
  const stroke = String(edge?.data?.baseStyle?.stroke || edge?.style?.stroke || '');
  if (edge?.data?.edgeKind === 'data' || edge?.data?.edgeStyle === 'data' || stroke === '#38bdf8' || stroke === '#22d3ee') return 'data';
  if (stroke === '#94a3b8') return 'arch';
  if (stroke === '#8b5cf6' || stroke === '#a78bfa') return 'fallback';
  return 'process';
}

function EdgeMeta({
  edge,
  sourceLabel,
  targetLabel,
  language,
}: {
  edge: any;
  sourceLabel?: string;
  targetLabel?: string;
  language: Language;
}) {
  const t = (value: string) => translateText(value, language);
  const data = localizeValue(edge?.data || {}, language) as any;
  const category = getEdgeCategory(edge);
  const categoryLabel = category === 'data'
    ? t('Dataflöde')
    : category === 'fallback'
      ? t('Reservflöde')
      : category === 'arch'
        ? t('Arkitekturkoppling')
        : t('Processflöde');
  const renderList = (label: string, items?: string[], tone = 'default') => {
    if (!items?.length) return null;
    const itemClass = tone === 'info'
      ? 'text-xs text-cyan-100/85 bg-cyan-500/10 border border-cyan-400/20 px-2 py-1.5 rounded leading-relaxed'
      : 'text-xs text-white/65 bg-white/5 px-2 py-1.5 rounded leading-relaxed';
    return (
      <div>
        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t(label)}</label>
        <ul className="space-y-1">
          {items.map((item: string) => (
            <li key={item} className={itemClass}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded border border-white/8 bg-white/4 px-3 py-2">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Från')}</label>
          <div className="text-xs text-white/80 leading-relaxed">{sourceLabel || '—'}</div>
        </div>
        <div className="rounded border border-white/8 bg-white/4 px-3 py-2">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Till')}</label>
          <div className="text-xs text-white/80 leading-relaxed">{targetLabel || '—'}</div>
        </div>
      </div>

      <div>
        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Kantkategori')}</label>
        <div className="text-xs text-white/70 bg-white/5 px-2 py-1.5 rounded leading-relaxed">{categoryLabel}</div>
      </div>

      {typeof edge?.label === 'string' && edge.label.trim() && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Kantetikett')}</label>
          <div className="text-xs text-white/70 bg-white/5 px-2 py-1.5 rounded leading-relaxed">{t(edge.label)}</div>
        </div>
      )}

      {data.details && (
        <div>
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t(category === 'data' ? 'Dataflöde' : 'Beskrivning')}</label>
          <p className="text-xs text-white/70 leading-relaxed whitespace-pre-line">{data.details}</p>
        </div>
      )}

      {category === 'data' ? (
        <>
          {data.operation && (
            <div>
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Operation')}</label>
              <div className="text-xs text-cyan-100/85 bg-cyan-500/10 border border-cyan-400/20 px-2 py-1.5 rounded leading-relaxed">{data.operation}</div>
            </div>
          )}
          {renderList('Hämtar / skriver', data.fields, 'info')}
          {data.why && (
            <div>
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Varför flödet finns')}</label>
              <p className="text-xs text-white/70 leading-relaxed whitespace-pre-line">{data.why}</p>
            </div>
          )}
        </>
      ) : !data.details ? (
        <div className="text-xs text-white/50 bg-white/5 px-2 py-1.5 rounded leading-relaxed">
          {t('Ingen extra metadata för denna kanttyp.')}
        </div>
      ) : null}
    </div>
  );
}

function getNodeDims(type?: string) {
  if (type === 'event')   return { w: 48, h: 48 };
  if (type === 'gateway') return { w: 64, h: 64 };
  if (type === 'database') return { w: 270, h: 168 };
  if (type === 'service') return { w: 220, h: 84 };
  if (type === 'note') return { w: 280, h: 160 };
  if (type === 'zone') return { w: 480, h: 180 };
  return { w: 160, h: 50 };
}

const defaultEdgeOptions = {
  type: 'smoothstep',
  markerEnd: { type: MarkerType.ArrowClosed, color: '#ff8e7d' },
  style: { strokeWidth: 2, stroke: '#ff8e7d' },
};

function hydrateEdge(edge: any) {
  return edge;
}

function normalizeEdge(edge: any, nodesOrLookup?: any[] | Map<string, any>) {
  const nodeLookup = nodesOrLookup instanceof Map
    ? nodesOrLookup
    : new Map((nodesOrLookup || []).map((node: any) => [node.id, node]));
  const rawStyle = edge?.data?.baseStyle || edge?.style || defaultEdgeOptions.style;
  const baseStyle = {
    ...defaultEdgeOptions.style,
    ...(rawStyle || {}),
  };
  delete (baseStyle as any).filter;
  delete (baseStyle as any).strokeOpacity;

  const rawMarkerEnd = edge?.data?.baseMarkerEnd || edge?.markerEnd || defaultEdgeOptions.markerEnd;
  const baseMarkerEnd = {
    ...defaultEdgeOptions.markerEnd,
    ...(typeof rawMarkerEnd === 'object' ? rawMarkerEnd : {}),
    color: (typeof rawMarkerEnd === 'object' ? rawMarkerEnd?.color : null) || baseStyle.stroke || defaultEdgeOptions.style.stroke,
  };

  const sourceNode = nodeLookup.get(edge?.source);
  const targetNode = nodeLookup.get(edge?.target);
  const pathMode = EDGE_PATH_MODES.has(edge?.data?.pathMode)
    ? edge.data.pathMode
    : EDGE_PATH_MODES.has(edge?.type)
      ? edge.type
      : defaultEdgeOptions.type;

  const normalized: any = {
    ...edge,
    type: pathMode,
    style: { ...baseStyle },
    markerEnd: { ...baseMarkerEnd },
    data: {
      ...(edge?.data || {}),
      baseStyle,
      baseMarkerEnd,
      pathMode,
    },
  };

  const sourceHandle = normalizeHandleForNode(sourceNode, normalized.sourceHandle);
  const targetHandle = normalizeHandleForNode(targetNode, normalized.targetHandle);

  if (sourceHandle) normalized.sourceHandle = sourceHandle;
  else delete normalized.sourceHandle;

  if (targetHandle) normalized.targetHandle = targetHandle;
  else delete normalized.targetHandle;

  return normalized;
}

function applyEdgeVisualState(edge: any, mode: 'base' | 'highlight' | 'dim', nodesOrLookup?: any[] | Map<string, any>) {
  const hydrated = normalizeEdge(hydrateEdge(edge), nodesOrLookup);
  const baseStyle = hydrated.data.baseStyle || defaultEdgeOptions.style;
  const baseMarkerEnd = hydrated.data.baseMarkerEnd || defaultEdgeOptions.markerEnd;

  if (mode === 'highlight') {
    return {
      ...hydrated,
      style: {
        ...baseStyle,
        strokeWidth: (baseStyle.strokeWidth || 2) + 1.25,
        strokeOpacity: 1,
        filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.28))',
      },
      markerEnd: { ...baseMarkerEnd },
      zIndex: 12,
      data: { ...hydrated.data, edgeHighlighted: true, dimmed: false },
    };
  }

  if (mode === 'dim') {
    return {
      ...hydrated,
      style: {
        ...baseStyle,
        strokeOpacity: 0.18,
      },
      markerEnd: { ...baseMarkerEnd },
      zIndex: 0,
      data: { ...hydrated.data, edgeHighlighted: false, dimmed: true },
    };
  }

  return {
    ...hydrated,
    style: { ...baseStyle },
    markerEnd: { ...baseMarkerEnd },
    zIndex: 0,
    data: { ...hydrated.data, edgeHighlighted: false, dimmed: false },
  };
}

function sanitizeEdgeForStorage(edge: any, nodesOrLookup?: any[] | Map<string, any>) {
  const hydrated = normalizeEdge(hydrateEdge(edge), nodesOrLookup);
  const data = { ...(hydrated.data || {}) };
  delete data.edgeHighlighted;
  delete data.dimmed;
  return {
    ...hydrated,
    style: { ...(hydrated.data?.baseStyle || hydrated.style || defaultEdgeOptions.style) },
    markerEnd: { ...(hydrated.data?.baseMarkerEnd || hydrated.markerEnd || defaultEdgeOptions.markerEnd) },
    zIndex: 0,
    data,
  };
}

// ─── Persistence ──────────────────────────────────────────────────────────────

const FLOW_SCHEMA_VERSION = '2026-04-svensk-roller-v10-linked-booking-only';
const STORAGE_NODES = `jy-bpmn-nodes:${FLOW_SCHEMA_VERSION}`;
const STORAGE_EDGES = `jy-bpmn-edges:${FLOW_SCHEMA_VERSION}`;
const STORAGE_LANGUAGE = 'jy-bpmn-language';

const REMOVED_NODE_IDS = new Set([
  'roller-not-v1',
  'app-payment-link',
  'cloud-existing-payment',
  'roller-payment-link',
]);

function hasCurrentDatabaseLaneModel(nodes: any[], edges?: any[]) {
  const nodeLookup = new Map(nodes.map((node) => [node.id, node]));
  const laneOf = (id: string) => String((nodeLookup.get(id) as any)?.data?.lane || (nodeLookup.get(id) as any)?.data?.label || '');
  const typeOf = (id: string) => String((nodeLookup.get(id) as any)?.type || '');
  const isDatabase = (id: string) => typeOf(id) === 'database' || laneOf(id) === 'Databaser / Aurora' || laneOf(id) === 'AWS + Aurora';
  const isRoller = (id: string) => laneOf(id) === 'Roller API' || laneOf(id) === 'Roller';
  const requiredNodes = [
    ['lane-aws', 'Databaser / Aurora'],
    ['store-booking', 'Databaser / Aurora'],
    ['store-commerce', 'Databaser / Aurora'],
    ['store-payment', 'Databaser / Aurora'],
    ['store-operational', 'Databaser / Aurora'],
    ['store-entitlement', 'Databaser / Aurora'],
    ['cloud-availability', 'Driftjobb'],
    ['cloud-costs', 'Driftjobb'],
    ['cloud-draft', 'Driftjobb'],
    ['cloud-linked-booking', 'Driftjobb'],
    ['cloud-publish', 'Driftjobb'],
    ['job-ticket-redeem', 'Driftjobb'],
    ['roller-membership-multipass', 'Roller API'],
  ];

  const requiredNodesOk = requiredNodes.every(([id, lane]) => laneOf(id) === lane);
  if (!requiredNodesOk) return false;
  if (!edges) return true;

  return !edges.some((edge) => {
    if (getEdgeCategory(edge) !== 'data') return false;
    return (isDatabase(edge.source) && isRoller(edge.target)) || (isRoller(edge.source) && isDatabase(edge.target));
  });
}

const CANONICAL_ROLLER_METADATA_NODE_IDS = new Set([
  'job-webhook',
  'roller-webhook',
  'roller-availability',
  'roller-costs',
  'roller-draft',
  'roller-membership-multipass',
]);

const CANONICAL_ROLLER_METADATA_FIELDS = [
  'label',
  'details',
  'endpoints',
  'apiStatus',
  'apiStatusLabel',
  'apiPoints',
  'confirmedByRoller',
  'jumpyardHandling',
  'limitations',
  'sources',
];

function syncCanonicalRollerMetadata(nodes: any[]) {
  const canonicalById = new Map(pilotNodes.map((node: any) => [node.id, node]));
  return nodes.map((node: any) => {
    if (!CANONICAL_ROLLER_METADATA_NODE_IDS.has(node.id)) return node;
    const canonical = canonicalById.get(node.id);
    if (!canonical?.data) return node;
    const data = { ...node.data };
    for (const field of CANONICAL_ROLLER_METADATA_FIELDS) {
      if (field in canonical.data) data[field] = canonical.data[field];
    }
    return { ...node, data };
  });
}

const RED_PROCESS_EDGE_STYLE = {
  strokeWidth: 2.5,
  stroke: '#ff8e7d',
};

const RED_PROCESS_MARKER = {
  type: MarkerType.ArrowClosed,
  color: '#ff8e7d',
};

const CANONICAL_EDGE_VISUAL_IDS = new Set([
  'xy-edge__gw-payment-contextbottom-app-linked-booking',
  'xy-edge__app-linked-bookingright-app-safetyleft-bottom',
]);

function syncCanonicalEdgeVisuals(edges: any[]) {
  return edges
    .filter((edge) => !REMOVED_NODE_IDS.has(edge.source) && !REMOVED_NODE_IDS.has(edge.target))
    .map((edge) => {
      if (!CANONICAL_EDGE_VISUAL_IDS.has(edge.id)) return edge;
      return {
        ...edge,
        markerEnd: { ...(edge.markerEnd || {}), ...RED_PROCESS_MARKER },
        style: { ...RED_PROCESS_EDGE_STYLE },
        data: {
          ...(edge.data || {}),
          edgeKind: 'process',
          baseStyle: { ...RED_PROCESS_EDGE_STYLE },
          baseMarkerEnd: { ...RED_PROCESS_MARKER },
          edgeStyle: 'solid',
        },
      };
    });
}

const loadNodes = () => {
  try {
    const s = localStorage.getItem(STORAGE_NODES);
    const ns: any[] = (s ? JSON.parse(s) : pilotNodes).filter((node: any) => !REMOVED_NODE_IDS.has(node.id));
    if (!hasCurrentDatabaseLaneModel(ns)) return pilotNodes;
    // Migrate: assign poolId to lanes that don't have one yet (Y-range heuristic, one-time migration)
    const pools = ns.filter(n => n.type === 'pool').sort((a: any, b: any) => a.position.y - b.position.y);
    const migrated = ns.map((n: any) => {
      let next = n;
      if (n.type === 'database' && typeof n.data?.collapsed !== 'boolean') {
        next = { ...next, data: { ...next.data, collapsed: true } };
      }
      if (next.type !== 'lane' || next.data?.poolId) return next;
      const pool = pools.find((p: any) =>
        next.position.y >= p.position.y && next.position.y < p.position.y + (p.data?.heightPx || 300)
      );
      return pool ? { ...next, data: { ...next.data, poolId: pool.id } } : next;
    });
    return syncCanonicalRollerMetadata(migrated);
  } catch { return pilotNodes; }
};
const loadEdges = (nodes: any[] = pilotNodes) => {
  try {
    const s = localStorage.getItem(STORAGE_EDGES);
    const raw = syncCanonicalEdgeVisuals(s ? JSON.parse(s) : pilotEdges);
    if (!hasCurrentDatabaseLaneModel(nodes, raw)) return syncCanonicalEdgeVisuals(pilotEdges.map((edge: any) => applyEdgeVisualState(edge, 'base', nodes)));
    return syncCanonicalEdgeVisuals(raw.map((edge: any) => applyEdgeVisualState(edge, 'base', nodes)));
  } catch { return syncCanonicalEdgeVisuals(pilotEdges.map((edge: any) => applyEdgeVisualState(edge, 'base', nodes))); }
};

// ─── App ──────────────────────────────────────────────────────────────────────

const ROLLER_KRAV = [
  {
    endpoint: 'Hämta bokningsdetalj',
    docUrl: 'https://docs.roller.app/docs/rest-api/olt8a8nxs75ev',
    priority: 'KRITISK',
    label: 'Hämta bokning',
    desc: 'Returnerar: gästnamn, email, produktlista, biljettantal, betalningsstatus, sessionstid',
  },
  {
    endpoint: 'Hämta produkttillgänglighet',
    docUrl: 'https://docs.roller.app/docs/rest-api/efb9788ea3808',
    priority: 'KRITISK',
    label: 'Hämta tillgänglighet',
    desc: 'Hämtar köpbara tider, produkter och längder efter vald park och starttid',
  },
  {
    endpoint: 'Beräkna bokningskostnad',
    docUrl: 'https://docs.roller.app/docs/rest-api/branches/main/62e21c34b7ef3',
    priority: 'KRITISK',
    label: 'Beräkna kostnad',
    desc: 'Slutlig varukorgskontroll innan utkastbokning och inbäddad betalning',
  },
  {
    endpoint: 'Presentkort som betalmedel',
    docUrl: 'https://docs.roller.app/docs/rest-api/15x291npk7c3d-checkout-workflow',
    priority: 'KRITISK',
    label: 'Presentkort i utkastflöde',
    desc: 'Befintligt presentkort kan användas som betalmedel i ny utkastbokning',
  },
  {
    endpoint: 'Lös in biljetter',
    docUrl: 'https://docs.roller.app/docs/rest-api/fb1d84952285f-redeem-tickets',
    priority: 'KRITISK',
    label: 'Lös in biljetter',
    desc: 'Gäller biljetter och sessionprodukter, inte lagerartiklar/tillägg som kaffe och lås',
  },
  {
    endpoint: 'Bokningswebhook under dagen',
    docUrl: 'https://docs.roller.app/docs/webhooks/1tjb4whgq33f0-booking-webhook',
    priority: 'KRITISK',
    label: 'Bokningar under dagen',
    desc: 'Tar in nya och ändrade bokningar efter daglig import när booking detail och betaldata ingår',
  },
  {
    endpoint: 'Flerbesök tillfälligt',
    docUrl: 'https://docs.roller.app/docs/webhooks/c9ntvneweithh-redemption-webhook',
    priority: 'WORKAROUND',
    label: 'Tillfällig status i Cloud',
    desc: 'Cloud håller status från inlösenhändelser tills Roller har dedikerad slutpunkt',
  },
];

function DataKravPanel({ onClose, language }: { onClose: () => void; language: Language }) {
  const t = (value: string) => translateText(value, language);
  return (
    <div className="fixed top-0 right-0 h-full w-[380px] z-50 bg-[#0e0e0e]/98 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
        <div>
          <div className="text-xs font-black uppercase tracking-widest text-white">{t('Datakravslista')}</div>
          <div className="text-[10px] text-white/40 mt-0.5">{t('Roller API — bekräftade slutpunkter')}</div>
        </div>
        <button onClick={onClose} className="text-white/40 hover:text-white text-lg leading-none px-1">×</button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {ROLLER_KRAV.map((k, i) => (
          <div key={i} className="rounded border border-white/8 bg-white/3 p-3">
            <div className="flex items-start justify-between gap-2 mb-1">
              <code className="text-[11px] text-[#ff8e7d] font-mono leading-snug">{k.endpoint}</code>
              <span className={`text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded shrink-0 ${k.priority === 'KRITISK' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {k.priority}
              </span>
            </div>
            <div className="text-[11px] font-bold text-white/80 mb-1">{t(k.label)}</div>
            <div className="text-[10px] text-white/50 leading-relaxed">{t(k.desc)}</div>
            {k.docUrl && (
              <a
                href={k.docUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-[10px] font-bold text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
              >
                {t('Öppna länk')}
              </a>
            )}
          </div>
        ))}
        <div className="pt-2 pb-1 text-[9px] text-white/25 text-center">
          {t('Källa: Roller API-krav — bekräftad av kundansvarig')}
        </div>
      </div>
    </div>
  );
}

const ROLLER_API_MAP = ROLLER_API_STAGE_MAP;

function ArchitecturePanel({ onClose, language, nodes }: { onClose: () => void; language: Language; nodes: any[] }) {
  const t = (value: string) => translateText(value, language);
  const byCanvasOrder = (a: any, b: any) => (a.position.x - b.position.x) || (a.position.y - b.position.y);
  const projectNodeData = (predicate: (node: any) => boolean) =>
    nodes
      .filter(predicate)
      .sort(byCanvasOrder)
      .map((node) => ({ id: node.id, data: getProjectedNodeData(node, language) as any }));

  const dataNodes = projectNodeData((node) => node.type === 'database');
  const jobNodes = projectNodeData((node) => node.type === 'service' && String(node.data?.lane) === 'Driftjobb');

  return (
    <div className="fixed top-0 right-0 h-full w-[430px] z-50 bg-[#0e0e0e]/98 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
        <div>
          <div className="text-xs font-black uppercase tracking-widest text-white">{t('Arkitektur / drift')}</div>
          <div className="text-[10px] text-white/40 mt-0.5">{t('Aurora-tabellgrupper, Roller API-karta och jobb')}</div>
        </div>
        <button onClick={onClose} className="text-white/40 hover:text-white text-lg leading-none px-1">×</button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        <section>
          <div className="mb-2 text-[10px] font-black uppercase tracking-widest text-white/45">{t('Aurora-tabellgrupper')}</div>
          <div className="space-y-2">
            {dataNodes.map(({ id, data }) => (
              <div key={id} className={`rounded border p-3 ${data.future ? 'border-slate-300/18 bg-slate-400/5' : 'border-cyan-300/16 bg-cyan-400/5'}`}>
                <div className="flex items-start justify-between gap-2">
                  <div className={`text-[11px] font-bold ${data.future ? 'text-slate-100' : 'text-cyan-100'}`}>{data.label}</div>
                  {data.statusTag && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.18em] text-white/55">
                      {data.statusTag}
                    </span>
                  )}
                </div>
                {data.summary && (
                  <div className="mt-1 text-[10px] leading-relaxed text-white/58">{data.summary}</div>
                )}
                {data.systems?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {data.systems.slice(0, 4).map((item: string) => (
                      <span key={item} className="rounded-full border border-sky-300/18 bg-sky-400/8 px-2 py-0.5 text-[9px] font-bold text-sky-100/80">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {data.tables?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {data.tables.map((table: string) => (
                      <span key={table} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-white/68">
                        {table}
                      </span>
                    ))}
                  </div>
                )}
                {data.keyFields?.length > 0 && (
                  <div className="mt-2 text-[10px] text-white/55 leading-relaxed">
                    <span className="font-black uppercase tracking-wide text-white/38">{t('Nyckelfält')}:</span>{' '}
                    {data.keyFields.slice(0, 5).join(', ')}
                  </div>
                )}
                {data.ownedState?.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {data.ownedState.slice(0, 3).map((item: string) => (
                      <li key={item} className="text-[10px] text-white/60 leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}
                {data.usedBy?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {data.usedBy.slice(0, 3).map((item: string) => (
                      <span key={item} className="rounded-full border border-cyan-400/15 bg-cyan-400/8 px-2 py-0.5 text-[9px] font-bold text-cyan-100/75">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-2 text-[10px] font-black uppercase tracking-widest text-white/45">{t('Roller API-karta')}</div>
          <div className="space-y-2">
            {ROLLER_API_MAP.map((item) => (
              <div key={item.stage} className="rounded border border-white/8 bg-white/3 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-[11px] font-bold text-white/82">{t(item.stage)}</div>
                  <span className={`rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest ${item.priority === 'KRITISK' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {item.priority}
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  {item.endpoints.map((endpoint) => {
                    const ref = getRollerApiReference(endpoint);
                    return (
                      <div key={endpoint} className="rounded border border-[#ff8e7d]/16 bg-[#ff8e7d]/6 px-2.5 py-2">
                        <div className="text-[10px] font-bold text-[#ffb1a4]">{ref.name}</div>
                        {ref.docUrl ? (
                          <a
                            href={ref.docUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-flex text-[10px] font-bold text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
                          >
                            {t('Öppna länk')}
                          </a>
                        ) : null}
                        {!ref.docUrl && ref.docStatus === 'confirm' && (
                          <div className="mt-1 text-[10px] text-amber-200/85">{t(ref.note || 'Doklänk att bekräfta')}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2 text-[10px] leading-relaxed text-white/50">{t(item.desc)}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-2 text-[10px] font-black uppercase tracking-widest text-white/45">{t('Jobb & kadens')}</div>
          <div className="space-y-2">
            {jobNodes.map(({ id, data }) => (
              <div key={id} className="rounded border border-emerald-300/16 bg-emerald-400/6 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-[11px] font-bold text-emerald-100">{data.label}</div>
                  {data.cadence && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-white/55">
                      {data.cadence}
                    </span>
                  )}
                </div>
                {data.details && <div className="mt-1 text-[10px] leading-relaxed text-white/58">{data.details}</div>}
                {data.endpoints?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {data.endpoints.map((endpoint: string) => (
                      <span key={endpoint} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-white/65">
                        {endpoint}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="pt-1 pb-2 text-[9px] text-white/25 text-center">
          {t('Källa: Roller API-krav — bekräftad av kundansvarig')}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { getViewport, setViewport: rfSetViewport } = useReactFlow();
  const initialNodesRef = useRef<any[] | null>(null);
  if (!initialNodesRef.current) initialNodesRef.current = loadNodes();
  const initialNodes = initialNodesRef.current ?? pilotNodes;
  const initialEdgesRef = useRef<any[] | null>(null);
  if (!initialEdgesRef.current) initialEdgesRef.current = loadEdges(initialNodes);
  const initialEdges = initialEdgesRef.current ?? loadEdges(initialNodes);
  const [nodes, setNodes, applyNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [language] = useState<Language>('sv');
  const [selectedElements, setSelectedElements] = useState<{ nodes: any[]; edges: any[] }>({ nodes: [], edges: [] });
  const [editMode, setEditMode] = useState(false);
  const [isInternalToggleVisible, setInternalToggleVisible] = useState(false);
  const [isGuideCollapsed, setGuideCollapsed] = useState(false);
  const [history, setHistory] = useState<DiagramHistoryEntry[]>([]);
  const nodesRef  = React.useRef(nodes);
  const edgesRef  = React.useRef(edges);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerInInternalZoneRef = useRef(false);
  const positionHistoryCapturedRef = React.useRef(false);
  const invalidFlowModelResetRef = React.useRef(false);
  useEffect(() => { nodesRef.current = nodes; }, [nodes]);
  useEffect(() => { edgesRef.current = edges; }, [edges]);

  const activeNodes = nodes;
  const activeEdges = edges;
  const interactionEditMode = editMode;

  const clearInternalToggleTimer = useCallback(() => {
    if (!hoverTimerRef.current) return;
    clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = null;
  }, []);

  const startInternalToggleReveal = useCallback(() => {
    if (editMode || isInternalToggleVisible) return;
    clearInternalToggleTimer();
    hoverTimerRef.current = setTimeout(() => {
      setInternalToggleVisible(true);
      hoverTimerRef.current = null;
    }, 5000);
  }, [clearInternalToggleTimer, editMode, isInternalToggleVisible]);

  useEffect(() => clearInternalToggleTimer, [clearInternalToggleTimer]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const isInInternalZone = event.clientX <= 96 && event.clientY >= window.innerHeight - 96;

      if (isInInternalZone && !pointerInInternalZoneRef.current) {
        pointerInInternalZoneRef.current = true;
        startInternalToggleReveal();
        return;
      }

      if (!isInInternalZone && pointerInInternalZoneRef.current) {
        pointerInInternalZoneRef.current = false;
        clearInternalToggleTimer();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [clearInternalToggleTimer, startInternalToggleReveal]);

  useEffect(() => {
    if (invalidFlowModelResetRef.current || hasCurrentDatabaseLaneModel(nodes, edges)) return;
    invalidFlowModelResetRef.current = true;
    localStorage.removeItem(STORAGE_NODES);
    localStorage.removeItem(STORAGE_EDGES);
    setSelectedElements({ nodes: [], edges: [] });
    setNodes(pilotNodes);
    setEdges(pilotEdges.map((edge: any) => applyEdgeVisualState(edge, 'base', pilotNodes)));
  }, [edges, nodes, setEdges, setNodes]);

  const selectedNodeId = selectedElements.nodes[0]?.id ?? null;
  const selectedEdgeId = selectedElements.edges[0]?.id ?? null;
  const rawSelectedNode = selectedNodeId ? activeNodes.find(n => n.id === selectedNodeId) ?? null : null;
  const rawSelectedEdge = selectedEdgeId ? activeEdges.find(e => e.id === selectedEdgeId) ?? null : null;
  const selectedDataNodeId = rawSelectedNode && (isProcessActivityNode(rawSelectedNode) || isTechnicalNode(rawSelectedNode)) ? rawSelectedNode.id : null;
  const selectedNode = rawSelectedNode ?? null;
  const selectedEdge = rawSelectedEdge
    && getEdgeCategory(rawSelectedEdge) !== 'arch'
      ? rawSelectedEdge
      : null;
  const selectedEdgeSourceNode = selectedEdge ? activeNodes.find((node) => node.id === selectedEdge.source) ?? null : null;
  const selectedEdgeTargetNode = selectedEdge ? activeNodes.find((node) => node.id === selectedEdge.target) ?? null : null;
  const hasSelection = !!(selectedNode || selectedEdge);
  const t = (value: string) => translateText(value, language);
  const selectedNodeViewData = selectedNode ? getProjectedNodeData(selectedNode, language) : null;
  const selectedEdgeViewData = selectedEdge ? localizeValue(selectedEdge.data || {}, language) : null;
  const selectedNodeViewLabel = selectedNodeViewData?.label || (selectedNode?.type === 'lane' ? t('Bana') : t('Nod'));
  const selectedEdgeSourceLabel = selectedEdgeSourceNode ? String((getProjectedNodeData(selectedEdgeSourceNode, language) as any)?.label || selectedEdgeSourceNode.id) : '—';
  const selectedEdgeTargetLabel = selectedEdgeTargetNode ? String((getProjectedNodeData(selectedEdgeTargetNode, language) as any)?.label || selectedEdgeTargetNode.id) : '—';

  useEffect(() => {
    if (interactionEditMode) return;
    setSelectedElements((current) => ({
      nodes: current.nodes.filter((node) => node.type !== 'lane' && node.type !== 'pool'),
      edges: current.edges,
    }));
  }, [interactionEditMode]);

  const collectRelatedGraph = useCallback((seedNodeIds: string[], depth = 1) => {
    const nodeIds = new Set(seedNodeIds);
    const edgeIds = new Set<string>();
    let frontier = new Set(seedNodeIds);

    for (let level = 0; level < depth; level++) {
      const next = new Set<string>();
      for (const edge of edgesRef.current) {
        if (!frontier.has(edge.source) && !frontier.has(edge.target)) continue;
        edgeIds.add(edge.id);
        if (!nodeIds.has(edge.source)) { nodeIds.add(edge.source); next.add(edge.source); }
        if (!nodeIds.has(edge.target)) { nodeIds.add(edge.target); next.add(edge.target); }
      }
      if (!next.size) break;
      frontier = next;
    }

    return { nodeIds, edgeIds };
  }, []);

  useEffect(() => {
    if (!hasCurrentDatabaseLaneModel(nodes, edges)) return;
    const clean = nodes.map(n => {
      const data = { ...(n.data as any) };
      delete data.edgeHighlighted;
      delete data.dimmed;
      return { ...n, data };
    });
    localStorage.setItem(STORAGE_NODES, JSON.stringify(clean));
  }, [edges, nodes]);
  useEffect(() => {
    if (!hasCurrentDatabaseLaneModel(nodes, edges)) return;
    const nodeLookup = new Map(nodes.map((node) => [node.id, node]));
    localStorage.setItem(STORAGE_EDGES, JSON.stringify(edges.map((edge) => sanitizeEdgeForStorage(edge, nodeLookup))));
  }, [edges, nodes]);
  useEffect(() => {
    localStorage.setItem(STORAGE_LANGUAGE, language);
  }, [language]);

  // ── Export ────────────────────────────────────────────────────────────────
  const flowRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState<'png' | 'pdf' | null>(null);

  const captureFlow = async (pixelRatio: number): Promise<string> => {
    if (!flowRef.current) throw new Error('No ref');
    const el = flowRef.current;
    const prevVp = getViewport();

    // Compute full bounding box of all nodes at zoom=1
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const n of activeNodes) {
      const w = (n as any).measured?.width ?? ((n.data as any).widthPx ?? 150);
      const h = (n as any).measured?.height ?? ((n.data as any).heightPx ?? 60);
      minX = Math.min(minX, n.position.x);
      minY = Math.min(minY, n.position.y);
      maxX = Math.max(maxX, n.position.x + w);
      maxY = Math.max(maxY, n.position.y + h);
    }
    const pad = 80;
    const contentW = Math.ceil(maxX - minX + pad * 2);
    const contentH = Math.ceil(maxY - minY + pad * 2);

    // Temporarily expand the container to content size at zoom=1
    const s = el.style;
    const orig = { position: s.position, width: s.width, height: s.height, left: s.left, top: s.top, zIndex: s.zIndex };
    s.position = 'fixed'; s.left = '0'; s.top = '0';
    s.width = contentW + 'px'; s.height = contentH + 'px'; s.zIndex = '9998';
    rfSetViewport({ x: -minX + pad, y: -minY + pad, zoom: 1 }, { duration: 0 });
    await new Promise(r => setTimeout(r, 200));

    try {
      return await toPng(el, {
        backgroundColor: '#0e0e0e',
        pixelRatio,
        width: contentW,
        height: contentH,
        filter: (node) =>
          !node.classList?.contains('react-flow__minimap') &&
          !node.classList?.contains('react-flow__controls'),
      });
    } finally {
      s.position = orig.position; s.width = orig.width; s.height = orig.height;
      s.left = orig.left; s.top = orig.top; s.zIndex = orig.zIndex;
      rfSetViewport(prevVp, { duration: 0 });
    }
  };

  const exportToPng = async () => {
    if (!flowRef.current) return;
    setExporting('png');
    try {
      const dataUrl = await captureFlow(2);
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `jumpyard-bpmn-${new Date().toISOString().slice(0, 10)}.png`;
      a.click();
    } finally {
      setExporting(null);
    }
  };

  const exportToPdf = async () => {
    if (!flowRef.current) return;
    setExporting('pdf');
    try {
      const dataUrl = await captureFlow(1.5);
      const img = new Image();
      img.src = dataUrl;
      await new Promise(r => { img.onload = r; });
      const w = img.width, h = img.height;
      const pdf = new jsPDF({ orientation: w > h ? 'landscape' : 'portrait', unit: 'px', format: [w, h] });
      pdf.addImage(dataUrl, 'PNG', 0, 0, w, h);
      pdf.save(`jumpyard-bpmn-${new Date().toISOString().slice(0, 10)}.pdf`);
    } finally {
      setExporting(null);
    }
  };

  const setActiveNodeList = useCallback((updater: (current: any[]) => any[]) => {
    setNodes(updater);
  }, [setNodes]);

  const setActiveEdgeList = useCallback((updater: (current: any[]) => any[]) => {
    setEdges(updater);
  }, [setEdges]);

  const saveHistory = useCallback(() => {
    setHistory(h => [...h.slice(-29), { nodes: activeNodes, edges: activeEdges }]);
  }, [activeEdges, activeNodes]);

  const onNodesChange = useCallback((changes: any[]) => {
    const hasPositionChange = changes.some((change) => change.type === 'position');
    if (interactionEditMode && hasPositionChange && !positionHistoryCapturedRef.current) {
      positionHistoryCapturedRef.current = true;
      saveHistory();
    }

    applyNodesChange(changes);

    const positionSequenceFinished = changes.some(
      (change) => change.type === 'position' && change.dragging === false,
    );
    if (positionSequenceFinished || !hasPositionChange) {
      positionHistoryCapturedRef.current = false;
    }
  }, [applyNodesChange, interactionEditMode, saveHistory]);

  const toggleDatabaseCollapse = useCallback((id: string) => {
    saveHistory();
    setNodes(nds => nds.map((node) => {
      if (node.id !== id || node.type !== 'database') return node;
      return { ...node, data: { ...node.data, collapsed: !node.data?.collapsed } };
    }));
  }, [saveHistory, setNodes]);

  const undo = useCallback(() => {
    setHistory(h => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setNodes(prev.nodes);
      setEdges(prev.edges);
      return h.slice(0, -1);
    });
  }, [setNodes, setEdges]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); undo(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [undo]);

  const saveAsDefault = async () => {
    try {
      const res = await fetch('/api/save-flow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });
      const json = await res.json();
      if (json.ok) alert(`✓ ${t('Sparat som ursprungsdata i pilotFlow.ts')}`);
      else alert(`Error: ${JSON.stringify(json)}`);
    } catch (e) {
      alert(t('Kunde inte nå /api/save-flow — är dev-servern igång?'));
    }
  };

  const loadDefaultFlow = () => {
    localStorage.removeItem(STORAGE_NODES);
    localStorage.removeItem(STORAGE_EDGES);
    setNodes(pilotNodes);
    setEdges(pilotEdges.map((edge: any) => applyEdgeVisualState(edge, 'base', pilotNodes)));
    setHistory([]);
  };

  const resetToDefaults = () => {
    if (!confirm(t('Återställ till ursprungsdata? Alla ändringar tas bort.'))) return;
    loadDefaultFlow();
  };

  const refreshCustomerFlow = () => {
    if (!confirm(t('Hämta senaste publicerade flödet? Lokalt sparad vy ersätts.'))) return;
    loadDefaultFlow();
  };

  const onConnect = useCallback(
    (params: any) => {
      saveHistory();
      setActiveEdgeList(eds => addEdge(normalizeEdge({
          ...params,
          ...defaultEdgeOptions,
          data: {
            baseStyle: { ...defaultEdgeOptions.style },
            baseMarkerEnd: { ...defaultEdgeOptions.markerEnd },
            edgeStyle: 'solid',
            pathMode: defaultEdgeOptions.type,
          },
        }, activeNodes),
        eds,
      ));
    },
    [activeNodes, saveHistory, setActiveEdgeList],
  );

  const onReconnect = useCallback(
    (oldEdge: any, newConnection: any) => {
      saveHistory();
      setActiveEdgeList(eds => reconnectEdge(oldEdge, newConnection, eds));
    },
    [saveHistory, setActiveEdgeList],
  );

  const clearGraphFocus = useCallback(() => {
    setNodes(nds => nds.map(n => {
      if (n.type === 'lane' || n.type === 'pool') return n;
      if (!(n.data as any).edgeHighlighted && !(n.data as any).dimmed) return n;
      return { ...n, data: { ...n.data, edgeHighlighted: false, dimmed: false } };
    }));
    setEdges(eds => eds.map(e => applyEdgeVisualState(e, 'base')));
  }, [setEdges, setNodes]);

  const onPaneClick = useCallback(() => {
    setSelectedElements({ nodes: [], edges: [] });
    clearGraphFocus();
  }, [clearGraphFocus]);

  const onSelectionChange = useCallback((elements: any) => {
    const filteredElements = {
      nodes: (elements.nodes || []).filter((n: any) => n.type !== 'lane' && n.type !== 'pool'),
      edges: elements.edges || [],
    };
    const onlyStructuralSelection =
      filteredElements.edges.length === 0 &&
      filteredElements.nodes.length > 0 &&
      filteredElements.nodes.every((node: any) => node.type === 'lane' || node.type === 'pool');

    if (onlyStructuralSelection) {
      setSelectedElements(interactionEditMode ? filteredElements : { nodes: [], edges: [] });
      clearGraphFocus();
      return;
    }

    setSelectedElements(filteredElements);

    const pickedNodes = filteredElements.nodes
      .filter((n: any) => n.type !== 'lane' && n.type !== 'pool')
      .map((n: any) => n.id);
    const pickedEdgeIds = new Set(filteredElements.edges.map((e: any) => e.id));

    const nodeIds = new Set<string>();
    const edgeIds = new Set<string>();

    if (pickedNodes.length > 0) {
      const related = collectRelatedGraph(pickedNodes, 1);
      related.nodeIds.forEach(id => nodeIds.add(id));
      related.edgeIds.forEach(id => edgeIds.add(id));
    }

    if (pickedEdgeIds.size > 0) {
      for (const edge of edgesRef.current) {
        if (!pickedEdgeIds.has(edge.id)) continue;
        edgeIds.add(edge.id);
        nodeIds.add(edge.source);
        nodeIds.add(edge.target);
      }
    }

    const hasGraphFocus = nodeIds.size > 0 || edgeIds.size > 0;

    setNodes(nds => nds.map(n => {
      if (n.type === 'lane' || n.type === 'pool') return n;
      const highlighted = nodeIds.has(n.id);
      const dimmed = hasGraphFocus && !highlighted;
      if (!!(n.data as any).edgeHighlighted === highlighted && !!(n.data as any).dimmed === dimmed) return n;
      return { ...n, data: { ...n.data, edgeHighlighted: highlighted, dimmed } };
    }));

    setActiveEdgeList(eds => eds.map(e => {
      const mode = hasGraphFocus ? (edgeIds.has(e.id) ? 'highlight' : 'dim') : 'base';
      return applyEdgeVisualState(e, mode);
    }));
  }, [clearGraphFocus, collectRelatedGraph, interactionEditMode, setActiveEdgeList, setNodes]);

  const updateNodeData = (id: string, key: string, value: string) => {
    saveHistory();
    setActiveNodeList(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, [key]: value } } : n));
  };

  const addToNodeArray = (id: string, key: string, value: string) => {
    saveHistory();
    setActiveNodeList(nds => nds.map(n => n.id === id ? {
      ...n, data: { ...n.data, [key]: [...((n.data[key] as string[]) || []), value] }
    } : n));
  };

  const removeFromNodeArray = (id: string, key: string, index: number) => {
    saveHistory();
    setActiveNodeList(nds => nds.map(n => n.id === id ? {
      ...n, data: { ...n.data, [key]: ((n.data[key] as string[]) || []).filter((_, i) => i !== index) }
    } : n));
  };

  const updateEdgeLabel = (id: string, label: string) => {
    saveHistory();
    setActiveEdgeList(eds => eds.map(e => e.id === id ? { ...e, label, labelStyle: { fill: '#fff', fontWeight: 700 }, labelBgStyle: { fill: '#1a1a1a' } } : e));
  };

  const updateEdgeStyle = (id: string, style: 'solid' | 'dashed' | 'data') => {
    saveHistory();
    const cfg: Record<string, { color: string; dash?: string; w: number }> = {
      solid:  { color: '#ff8e7d', w: 2 },
      dashed: { color: '#8b5cf6', dash: '6,6', w: 2 },
      data:   { color: '#22d3ee', dash: '3,5', w: 1.5 },
    };
    const { color, dash, w } = cfg[style];
    setActiveEdgeList(eds => eds.map(e => {
      if (e.id !== id) return e;
      const nextData: any = {
        ...(e.data || {}),
        edgeStyle: style,
        baseStyle: { strokeWidth: w, stroke: color, ...(dash ? { strokeDasharray: dash } : {}) },
        baseMarkerEnd: { type: MarkerType.ArrowClosed, color },
      };
      if (style === 'data') nextData.edgeKind = 'data';
      else delete nextData.edgeKind;
      const updated = {
        ...e,
        data: nextData,
      };
      return applyEdgeVisualState(updated, e.data?.edgeHighlighted ? 'highlight' : e.data?.dimmed ? 'dim' : 'base', activeNodes);
    }));
  };

  const updateEdgePathMode = (id: string, pathMode: 'smoothstep' | 'step' | 'straight') => {
    saveHistory();
    setActiveEdgeList(eds => eds.map(e => {
      if (e.id !== id) return e;
      const updated = {
        ...e,
        type: pathMode,
        data: {
          ...(e.data || {}),
          pathMode,
        },
      };
      return applyEdgeVisualState(updated, e.data?.edgeHighlighted ? 'highlight' : e.data?.dimmed ? 'dim' : 'base', activeNodes);
    }));
  };

  const updateEdgeHandle = (id: string, side: 'sourceHandle' | 'targetHandle', handleId: string) => {
    saveHistory();
    setActiveEdgeList(eds => eds.map(e => {
      if (e.id !== id) return e;
      const updated: any = {
        ...e,
        [side]: handleId || undefined,
      };
      if (!handleId) delete updated[side];
      return applyEdgeVisualState(updated, e.data?.edgeHighlighted ? 'highlight' : e.data?.dimmed ? 'dim' : 'base', activeNodes);
    }));
  };

  const updateEdgeData = (id: string, key: string, value: string) => {
    saveHistory();
    setActiveEdgeList(eds => eds.map(e => {
      if (e.id !== id) return e;
      const updated = {
        ...e,
        data: {
          ...(e.data || {}),
          [key]: value,
        },
      };
      return applyEdgeVisualState(updated, e.data?.edgeHighlighted ? 'highlight' : e.data?.dimmed ? 'dim' : 'base', activeNodes);
    }));
  };

  const addToEdgeArray = (id: string, key: string, value: string) => {
    saveHistory();
    setActiveEdgeList(eds => eds.map(e => {
      if (e.id !== id) return e;
      const updated = {
        ...e,
        data: {
          ...(e.data || {}),
          [key]: [...(((e.data || {})[key] as string[]) || []), value],
        },
      };
      return applyEdgeVisualState(updated, e.data?.edgeHighlighted ? 'highlight' : e.data?.dimmed ? 'dim' : 'base', activeNodes);
    }));
  };

  const removeFromEdgeArray = (id: string, key: string, index: number) => {
    saveHistory();
    setActiveEdgeList(eds => eds.map(e => {
      if (e.id !== id) return e;
      const updated = {
        ...e,
        data: {
          ...(e.data || {}),
          [key]: ((((e.data || {})[key] as string[]) || []).filter((_, i) => i !== index)),
        },
      };
      return applyEdgeVisualState(updated, e.data?.edgeHighlighted ? 'highlight' : e.data?.dimmed ? 'dim' : 'base', activeNodes);
    }));
  };

  const deleteSelected = () => {
    saveHistory();
    if (selectedElements.nodes.length > 0) {
      const ids = new Set(selectedElements.nodes.map(n => n.id));
      setActiveNodeList(nds => nds.filter(n => !ids.has(n.id)));
    }
    if (selectedElements.edges.length > 0) {
      const ids = new Set(selectedElements.edges.map(e => e.id));
      setActiveEdgeList(eds => eds.filter(e => !ids.has(e.id)));
    }
    setSelectedElements({ nodes: [], edges: [] });
  };

  // ── Alignment helpers ──────────────────────────────────────────────────────
  const alignNodes = (type: 'left' | 'centerH' | 'right' | 'top' | 'centerV' | 'bottom') => {
    const sel = selectedElements.nodes.filter(n => n.type !== 'lane' && n.type !== 'pool');
    if (sel.length < 2) return;
    saveHistory();
    const wd = sel.map(n => ({ n, d: getNodeDims(n.type) }));
    const xs = wd.map(({ n }) => n.position.x);
    const ys = wd.map(({ n }) => n.position.y);
    const xe = wd.map(({ n, d }) => n.position.x + d.w);
    const ye = wd.map(({ n, d }) => n.position.y + d.h);
    const anchors: Record<string, number> = {
      left:    Math.min(...xs),
      centerH: (Math.min(...xs) + Math.max(...xe)) / 2,
      right:   Math.max(...xe),
      top:     Math.min(...ys),
      centerV: (Math.min(...ys) + Math.max(...ye)) / 2,
      bottom:  Math.max(...ye),
    };
    const anchor = anchors[type];
    const selIds = new Set(sel.map(n => n.id));
    setActiveNodeList(nds => nds.map(n => {
      if (!selIds.has(n.id)) return n;
      const d = getNodeDims(n.type);
      const p = { ...n.position };
      if (type === 'left')    p.x = anchor;
      if (type === 'centerH') p.x = anchor - d.w / 2;
      if (type === 'right')   p.x = anchor - d.w;
      if (type === 'top')     p.y = anchor;
      if (type === 'centerV') p.y = anchor - d.h / 2;
      if (type === 'bottom')  p.y = anchor - d.h;
      return { ...n, position: p };
    }));
  };

  const distributeNodes = (axis: 'h' | 'v') => {
    const sel = selectedElements.nodes.filter(n => n.type !== 'lane' && n.type !== 'pool');
    if (sel.length < 3) return;
    saveHistory();
    const wd = sel.map(n => ({ n, d: getNodeDims(n.type) }));
    if (axis === 'h') {
      const sorted = [...wd].sort((a, b) => a.n.position.x - b.n.position.x);
      const span = sorted[sorted.length - 1].n.position.x + sorted[sorted.length - 1].d.w - sorted[0].n.position.x;
      const totalW = sorted.reduce((s, { d }) => s + d.w, 0);
      const gap = (span - totalW) / (sorted.length - 1);
      let x = sorted[0].n.position.x;
      const map = new Map(sorted.map(({ n, d }, i) => { const cx = x; x += d.w + gap; return [n.id, cx]; }));
      setActiveNodeList(nds => nds.map(n => map.has(n.id) ? { ...n, position: { ...n.position, x: map.get(n.id)! } } : n));
    } else {
      const sorted = [...wd].sort((a, b) => a.n.position.y - b.n.position.y);
      const span = sorted[sorted.length - 1].n.position.y + sorted[sorted.length - 1].d.h - sorted[0].n.position.y;
      const totalH = sorted.reduce((s, { d }) => s + d.h, 0);
      const gap = (span - totalH) / (sorted.length - 1);
      let y = sorted[0].n.position.y;
      const map = new Map(sorted.map(({ n, d }) => { const cy = y; y += d.h + gap; return [n.id, cy]; }));
      setActiveNodeList(nds => nds.map(n => map.has(n.id) ? { ...n, position: { ...n.position, y: map.get(n.id)! } } : n));
    }
  };

  const multiSel = selectedElements.nodes.filter(n => n.type !== 'lane' && n.type !== 'pool');
  // ── Snap guides ─────────────────────────────────────────────────────────────

  const edgeStyle: 'solid' | 'dashed' | 'data' = selectedEdge
    ? ((selectedEdge.data as any)?.edgeStyle ??
       ((selectedEdge.style as any)?.strokeDasharray ? 'dashed' : 'solid'))
    : 'solid';
  const edgePathMode: 'smoothstep' | 'step' | 'straight' = selectedEdge
    ? (((selectedEdge.data as any)?.pathMode || selectedEdge.type || 'smoothstep') as 'smoothstep' | 'step' | 'straight')
    : 'smoothstep';

  const displayNodes = activeNodes.map((node) => {
    const data = { ...(getProjectedNodeData(node, language) as any) };
    data.layoutSelected =
      interactionEditMode &&
      selectedElements.edges.length === 0 &&
      selectedElements.nodes.some((selectedNode) => selectedNode.id === node.id && (selectedNode.type === 'lane' || selectedNode.type === 'pool'));
    data.editMode = interactionEditMode;
    if (node.type === 'database') {
      data.onToggleCollapse = () => toggleDatabaseCollapse(node.id);
      data.expandLabel = t('Fäll ut');
      data.collapseLabel = t('Fäll ihop');
      data.expandHint = t('Visa lagrad data');
    }
    if (node.type === 'pool') {
      return { ...node, data, draggable: false, selectable: false, selected: false, zIndex: -2 };
    }
    if (node.type === 'lane') {
      return { ...node, data, draggable: false, selectable: false, selected: false, zIndex: -1 };
    }
    if (node.type === 'zone') {
      return { ...node, data, draggable: false, selectable: false, selected: false, zIndex: node.zIndex ?? -1 };
    }
    return { ...node, data, draggable: interactionEditMode };
  });

  const displayNodeIds = new Set(displayNodes.map(n => n.id));
  const displayNodeLookup = new Map<string, any>(activeNodes.map((node) => [node.id, node]));
  const displayEdges = activeEdges
    .filter((edge) => displayNodeIds.has(edge.source) && displayNodeIds.has(edge.target))
    .filter((edge) => shouldShowEdgeInSingleView(edge, displayNodeLookup, selectedDataNodeId))
    .map((edge) => {
      return typeof edge.label === 'string' ? { ...edge, label: t(edge.label) } : edge;
    });

  return (
    <div className="bg-background text-on-surface font-manrope selection:bg-primary selection:text-white min-h-screen flex flex-col">

      {/* ── Header ── */}
      <header className="fixed top-0 w-full flex justify-between items-center px-8 h-20 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-white/5 z-50 gap-4">
        <div className="flex items-center gap-5 min-w-0">
          <div className="min-w-0">
            <div className="text-2xl font-black italic epilogue text-white tracking-wide shrink-0">
              JumpYard <span className="text-primary">Next</span>
            </div>
            <div className="mt-0.5 max-w-[560px] truncate text-[11px] font-semibold text-white/45">
              {t('Roller-integrerat gästflöde för bokning, betalning, säkerhet och utlämning.')}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {editMode && (
            <button
              onClick={() => {
                setEditMode(false);
                setInternalToggleVisible(false);
                pointerInInternalZoneRef.current = false;
              }}
              title={editMode ? t('Byt till visningsläge') : t('Byt till redigeringsläge')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded border transition-all ${editMode ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'}`}
            >
              {editMode ? <Eye className="w-3.5 h-3.5" /> : <Pencil className="w-3.5 h-3.5" />}
              {t('Visa kundläge')}
            </button>
          )}

          {interactionEditMode && (
            <button onClick={undo} disabled={history.length === 0} title={t('Ångra (Ctrl+Z)')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <Undo2 className="w-3.5 h-3.5" />{t('Ångra')}
            </button>
          )}

          {interactionEditMode && (
            <button onClick={saveAsDefault} title={t('Spara nuläge som ursprungsdata i källkoden')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all">
              {t('Spara som standard')}
            </button>
          )}

          {interactionEditMode && (
            <button onClick={resetToDefaults} title={t('Återställ till ursprungsdata')}
              className="p-2 rounded border border-white/10 bg-white/5 text-white/40 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition-all">
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {!interactionEditMode && (
            <button
              onClick={refreshCustomerFlow}
              title={t('Hämta senaste publicerade flödet')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t('Uppdatera flöde')}
            </button>
          )}

          {interactionEditMode && (
            <>
              <div className="px-3 py-1 bg-green-500/20 text-green-500 border border-green-500/30 text-[10px] font-bold uppercase tracking-widest rounded flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                {localStorage.getItem(STORAGE_NODES) ? t('Lokalt sparat') : t('Liveutkast')}
              </div>
              <div className="flex items-center gap-1 border border-white/10 rounded px-1 py-0.5">
                <button
                  onClick={exportToPng}
                  disabled={exporting !== null}
                  title={t('Exportera som PNG')}
                  className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-white/50 hover:text-white hover:bg-white/5 rounded transition-all disabled:opacity-40"
                >
                  <Download className="w-3 h-3" />PNG
                </button>
                <div className="w-px h-4 bg-white/10" />
                <button
                  onClick={exportToPdf}
                  disabled={exporting !== null}
                  title={t('Exportera som PDF')}
                  className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-white/50 hover:text-white hover:bg-white/5 rounded transition-all disabled:opacity-40"
                >
                  <Download className="w-3 h-3" />PDF
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      {/* ── Selected-edge highlight CSS ── */}
      <style>{`.react-flow__edge.selected .react-flow__edge-path { stroke-width: 3px !important; filter: drop-shadow(0 0 6px rgba(255,255,255,0.32)); }`}</style>

      <div
        className="flex-1 relative flex"
        style={{ marginTop: '5rem' }}
      >
        <div className="flex-1 relative" ref={flowRef}>
          <aside className={`fixed left-6 top-24 z-30 rounded-lg border border-white/12 bg-[#111111]/92 shadow-2xl backdrop-blur-xl transition-all ${isGuideCollapsed ? 'w-[220px] p-3' : 'w-[300px] p-4'}`}>
            <div className="flex items-center justify-between gap-3">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-primary/80">
                {t('Så läser du flödet')}
              </div>
              <button
                type="button"
                onClick={() => setGuideCollapsed((value) => !value)}
                aria-expanded={!isGuideCollapsed}
                title={isGuideCollapsed ? t('Visa guide') : t('Dölj guide')}
                className="rounded border border-white/10 bg-white/5 p-1 text-white/55 transition-colors hover:bg-white/10 hover:text-white"
              >
                {isGuideCollapsed ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5" />}
              </button>
            </div>
            {!isGuideCollapsed && (
              <ul className="mt-3 space-y-2 text-[11px] leading-relaxed text-white/64">
                <li>{t('Klicka på en aktivitet för att läsa detaljer.')}</li>
                <li>{t('Klicka på Webbapp-, Gäst- eller Parkpersonal-steg för att visa deras dataflöden mot JumpYard Cloud.')}</li>
                <li>{t('Klicka på teknik- och Roller API-noder för att se bekräftade API-slutpunkter.')}</li>
                <li>{t('Databaser kan fällas ut för att se vilken information Cloud lagrar.')}</li>
                <li>{t('Röda pilar visar huvudflöde. Blå pilar visar dataflöde. Röda streckade pilar visar reserv-/workaroundflöde.')}</li>
              </ul>
            )}
          </aside>

          <ReactFlow
            key="process"
            nodes={displayNodes} edges={displayEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={interactionEditMode ? onConnect : undefined}
            onSelectionChange={onSelectionChange}
            onPaneClick={onPaneClick}
            onReconnect={interactionEditMode ? onReconnect : undefined}

            nodeTypes={nodeTypes} defaultEdgeOptions={defaultEdgeOptions}
            connectionMode={ConnectionMode.Loose}
            nodesDraggable={interactionEditMode} nodesConnectable={interactionEditMode}
            edgesFocusable={interactionEditMode} edgesUpdatable={interactionEditMode}
            deleteKeyCode={interactionEditMode ? ['Delete', 'Backspace'] : []}
            elementsSelectable={true}
            multiSelectionKeyCode={['Control', 'Meta']}
            selectionKeyCode={null}
            fitView fitViewOptions={{ padding: 0.2 }}
            minZoom={0.1} maxZoom={2}
            className="bg-[#707070]"
          >
            <Background color="#9a9a9a" gap={20} size={1.5} opacity={0.25} />
            <Controls className="bg-[#1a1a1a] border-white/10 fill-white" showInteractive={false} />

            <MiniMap
              nodeColor={node => {
                if (node.type === 'gateway') return '#ff8e7d';
                if (node.type === 'database') return node.data.future ? '#64748b' : '#0891b2';
                if (node.type === 'event') return node.data.type === 'start' ? '#22c55e' : '#ef4444';
                if (node.type === 'zone') return node.data.theme === 'future' ? '#64748b' : node.data.theme === 'architecture' ? '#334155' : node.data.theme === 'ops' ? '#166534' : '#0f766e';
                if (node.type === 'note') {
                  if (node.data.tone === 'warning') return '#fbbf24';
                  if (node.data.tone === 'system') return '#fb923c';
                  if (node.data.tone === 'guide') return '#94a3b8';
                  return '#22d3ee';
                }
                if (node.data?.archCategory === 'job') return '#16a34a';
                if (node.data?.archCategory === 'aws') return '#0ea5e9';
                if (node.data?.archCategory === 'roller') return '#f97316';
                return '#333';
              }}
              maskColor="rgba(0, 0, 0, 0.7)"
              className="bg-[#131313] border border-white/10 rounded-lg overflow-hidden"
            />

          </ReactFlow>
        </div>

        {/* ── Detail / Inspector Panel ── */}
        {hasSelection && (
          <div className="w-80 bg-[#131313] border-l border-white/10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-20 overflow-y-auto">

            <div className="px-6 pt-6 pb-4 border-b border-white/5">
              <h2 className="text-lg font-epilogue italic font-black text-white">
                {selectedNode
                  ? selectedNodeViewLabel
                  : t('Kant')}
              </h2>
              {selectedNodeViewData?.note && (
                <p className="text-xs text-white/40 mt-1 leading-relaxed">{selectedNodeViewData.note}</p>
              )}
            </div>

            <div className="p-6 space-y-5">

              {/* ── Alignment toolbar (multi-select) ── */}
              {interactionEditMode && multiSel.length >= 2 && (
                <div className="pb-4 border-b border-white/5 space-y-3">
                  <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">
                    {`${t('Justera')} (${multiSel.length} ${t('markerade')})`}
                  </p>

                  {/* Align row */}
                  <div className="grid grid-cols-6 gap-1">
                    {([
                      ['left',    '⫤', '⬅', 'Vänsterjustera'],
                      ['centerH', '⬛', '↔', 'Centrera horisontellt'],
                      ['right',   '⊣', '➡', 'Högerjustera'],
                      ['top',     '⊤', '↑', 'Toppjustera'],
                      ['centerV', '↕', '↕', 'Centrera vertikalt'],
                      ['bottom',  '⊥', '↓', 'Bottenjustera'],
                    ] as const).map(([key, , icon, title]) => (
                      <button key={key} onClick={() => alignNodes(key as any)} title={t(title)}
                        className="py-1.5 text-sm bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded border border-white/10 transition-colors flex items-center justify-center">
                        {icon}
                      </button>
                    ))}
                  </div>

                  {/* Labels row */}
                  <div className="grid grid-cols-6 gap-1">
                    {['L', 'C↔', 'R', 'T', 'C↕', 'B'].map(lbl => (
                      <div key={lbl} className="text-[9px] text-white/25 text-center font-bold tracking-widest">{lbl}</div>
                    ))}
                  </div>

                  {/* Distribute */}
                  <div className="grid grid-cols-2 gap-1">
                    <button onClick={() => distributeNodes('h')} disabled={multiSel.length < 3}
                      title={t('Fördela jämnt horisontellt')}
                      className="py-1.5 text-xs font-bold bg-white/5 hover:bg-white/15 text-white/60 hover:text-white rounded border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                      {t('Fördela ↔')}
                    </button>
                    <button onClick={() => distributeNodes('v')} disabled={multiSel.length < 3}
                      title={t('Fördela jämnt vertikalt')}
                      className="py-1.5 text-xs font-bold bg-white/5 hover:bg-white/15 text-white/60 hover:text-white rounded border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                      {t('Fördela ↕')}
                    </button>
                  </div>
                </div>
              )}

              {/* ── Label / lane edit ── */}
              {(selectedEdge || selectedNodeViewData) && (
                <div className="space-y-4 pb-4 border-b border-white/5">
                  {interactionEditMode && (
                    <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">{t('Lokaliserad förhandsvisning')}</p>
                  )}
                  {selectedEdge && (
                    <EdgeMeta edge={{ ...selectedEdge, data: selectedEdgeViewData || selectedEdge.data }} sourceLabel={selectedEdgeSourceLabel} targetLabel={selectedEdgeTargetLabel} language={language} />
                  )}
                  {!selectedEdge && selectedNodeViewData && <NodeMeta data={selectedNodeViewData as any} language={language} />}
                </div>
              )}

              {interactionEditMode && selectedNode && (
                <div className="space-y-3 pb-4 border-b border-white/5">
                  <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">{t('Redigera')}</p>
                  <div>
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Etikett')}</label>
                    <input type="text" value={selectedNode.data.label || ''}
                      onChange={e => updateNodeData(selectedNode.id, 'label', e.target.value)}
                      className="w-full text-sm text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none" />
                  </div>
                </div>
              )}

              {/* ── Edge edit ── */}
              {interactionEditMode && selectedEdge && (
                <div className="space-y-3 pb-4 border-b border-white/5">
                  <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">{t('Redigera kant')}</p>
                  <div>
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Etikett')}</label>
                    <input type="text" value={typeof selectedEdge.label === 'string' ? selectedEdge.label : ''}
                      onChange={e => updateEdgeLabel(selectedEdge.id, e.target.value)}
                      className="w-full text-sm text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Kanttyp')}</label>
                    <div className="grid grid-cols-3 gap-1">
                      <button onClick={() => updateEdgeStyle(selectedEdge.id, 'solid')}
                        className={`py-1.5 text-xs font-bold rounded border transition-all ${edgeStyle === 'solid' ? 'bg-[#ff8e7d]/20 border-[#ff8e7d] text-[#ff8e7d]' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}>
                        ——<br/><span className="text-[9px]">{t('Process')}</span>
                      </button>
                      <button onClick={() => updateEdgeStyle(selectedEdge.id, 'dashed')}
                        className={`py-1.5 text-xs font-bold rounded border transition-all ${edgeStyle === 'dashed' ? 'bg-[#8b5cf6]/20 border-[#8b5cf6] text-[#8b5cf6]' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}>
                        - -<br/><span className="text-[9px]">{t('Reserv')}</span>
                      </button>
                      <button onClick={() => updateEdgeStyle(selectedEdge.id, 'data')}
                        className={`py-1.5 text-xs font-bold rounded border transition-all ${edgeStyle === 'data' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}>
                        ···<br/><span className="text-[9px]">{t('Data')}</span>
                      </button>
                    </div>
                  </div>
                  <EdgeMeta edge={selectedEdge} sourceLabel={selectedEdgeSourceLabel} targetLabel={selectedEdgeTargetLabel} language={language} />
                  {getEdgeCategory(selectedEdge) === 'data' && (
                    <>
                      <div>
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Dataflöde')}</label>
                        <textarea value={String(selectedEdge.data?.details || '')}
                          onChange={e => updateEdgeData(selectedEdge.id, 'details', e.target.value)}
                          rows={3}
                          className="w-full text-xs text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none resize-none" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Operation')}</label>
                        <input
                          type="text"
                          value={String(selectedEdge.data?.operation || '')}
                          onChange={e => updateEdgeData(selectedEdge.id, 'operation', e.target.value)}
                          className="w-full text-sm text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none"
                        />
                      </div>
                      <ArrayField
                        label={t('Hämtar / skriver')}
                        items={((selectedEdge.data?.fields as string[]) || [])}
                        onAdd={(value) => addToEdgeArray(selectedEdge.id, 'fields', value)}
                        onRemove={(index) => removeFromEdgeArray(selectedEdge.id, 'fields', index)}
                        placeholder={t('Lägg till fält...')}
                      />
                      <div>
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Varför flödet finns')}</label>
                        <textarea value={String(selectedEdge.data?.why || '')}
                          onChange={e => updateEdgeData(selectedEdge.id, 'why', e.target.value)}
                          rows={2}
                          className="w-full text-xs text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none resize-none" />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* ── Editable metadata (edit mode) ── */}
              {interactionEditMode && selectedNode && selectedNode.type !== 'lane' && selectedNode.type !== 'pool' && (
                <div className="space-y-4 pt-1 border-t border-white/5">
                  <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">{t('Metadata')}</p>

                  {selectedNode.type === 'event' && (
                    <div>
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Typ')}</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => updateNodeData(selectedNode.id, 'type', 'start')}
                          className={`flex-1 py-1.5 text-xs font-bold rounded border transition-all ${selectedNode.data.type === 'start' ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}>
                          ● {t('Start')}
                        </button>
                        <button onClick={() => updateNodeData(selectedNode.id, 'type', 'intermediate')}
                          className={`flex-1 py-1.5 text-xs font-bold rounded border transition-all ${selectedNode.data.type === 'intermediate' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-300' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}>
                          ● {t('Mellan')}
                        </button>
                        <button onClick={() => updateNodeData(selectedNode.id, 'type', 'end')}
                          className={`flex-1 py-1.5 text-xs font-bold rounded border transition-all ${selectedNode.data.type === 'end' ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}>
                          ● {t('Slut')}
                        </button>
                      </div>
                    </div>
                  )}

                  {selectedNode.type === 'note' && (
                    <div>
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Ton')}</label>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          ['guide', 'Guide'],
                          ['info', 'Moln'],
                          ['warning', 'Fråga'],
                          ['system', 'System'],
                        ].map(([tone, label]) => (
                          <button
                            key={tone}
                            onClick={() => updateNodeData(selectedNode.id, 'tone', tone)}
                            className={`py-1.5 text-[10px] font-bold rounded border transition-all ${
                              selectedNode.data.tone === tone
                                ? 'bg-white/15 border-white/25 text-white'
                                : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
                            }`}
                          >
                            {t(label)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Beskrivning')}</label>
                    <textarea value={(selectedNode.data as any).details || ''}
                      onChange={e => updateNodeData(selectedNode.id, 'details', e.target.value)}
                      rows={3} placeholder={t('Beskriv vad steget gör...')}
                      className="w-full text-xs text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none resize-none" />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Varför noden finns')}</label>
                    <textarea value={(selectedNode.data as any).why || ''}
                      onChange={e => updateNodeData(selectedNode.id, 'why', e.target.value)}
                      rows={2} placeholder={t('Motivering...')}
                      className="w-full text-xs text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none resize-none" />
                  </div>

                  <ArrayField label={t('System')}
                    items={(selectedNode.data as any).systems || []}
                    onAdd={v => addToNodeArray(selectedNode.id, 'systems', v)}
                    onRemove={i => removeFromNodeArray(selectedNode.id, 'systems', i)}
                    placeholder={t('Lägg till system...')} />

                  <ArrayField label={t('Risker')}
                    items={(selectedNode.data as any).risks || []}
                    onAdd={v => addToNodeArray(selectedNode.id, 'risks', v)}
                    onRemove={i => removeFromNodeArray(selectedNode.id, 'risks', i)}
                    placeholder={t('Lägg till risk...')} />

                  <ArrayField label={t('Källor')}
                    items={(selectedNode.data as any).sources || []}
                    onAdd={v => addToNodeArray(selectedNode.id, 'sources', v)}
                    onRemove={i => removeFromNodeArray(selectedNode.id, 'sources', i)}
                    placeholder={t('Lägg till källa...')} />
                </div>
              )}

              {/* ── Delete ── */}
              {interactionEditMode && (
                <div className="pt-2 border-t border-white/5">
                  <button onClick={deleteSelected}
                    className="w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 text-xs font-bold rounded transition-colors">
                    {t('Ta bort markerade')}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {interactionEditMode && selectedEdge && (
        <div className="fixed right-[21rem] top-24 z-40 w-72 rounded-xl border border-white/10 bg-[#111111]/96 p-4 shadow-2xl backdrop-blur-xl">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary/70">{t('Pilar och ruttning')}</div>
          <div className="mt-3 space-y-3">
            <div>
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t('Ruttning')}</label>
              <div className="grid grid-cols-3 gap-1">
                <button
                  onClick={() => updateEdgePathMode(selectedEdge.id, 'smoothstep')}
                  className={`py-1.5 text-xs font-bold rounded border transition-all ${edgePathMode === 'smoothstep' ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}
                >
                  {t('Mjuk')}
                </button>
                <button
                  onClick={() => updateEdgePathMode(selectedEdge.id, 'step')}
                  className={`py-1.5 text-xs font-bold rounded border transition-all ${edgePathMode === 'step' ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}
                >
                  {t('Stegad')}
                </button>
                <button
                  onClick={() => updateEdgePathMode(selectedEdge.id, 'straight')}
                  className={`py-1.5 text-xs font-bold rounded border transition-all ${edgePathMode === 'straight' ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}
                >
                  {t('Rak')}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Från fäste')}</label>
                <select
                  value={selectedEdge.sourceHandle || ''}
                  onChange={e => updateEdgeHandle(selectedEdge.id, 'sourceHandle', e.target.value)}
                  className="w-full text-sm text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none"
                >
                  {getHandleOptionsForNode(selectedEdgeSourceNode).map((option) => (
                    <option key={option.value || 'auto'} value={option.value}>{t(option.label)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{t('Till fäste')}</label>
                <select
                  value={selectedEdge.targetHandle || ''}
                  onChange={e => updateEdgeHandle(selectedEdge.id, 'targetHandle', e.target.value)}
                  className="w-full text-sm text-white bg-[#1a1a1a] p-2 rounded border border-white/10 focus:border-primary outline-none"
                >
                  {getHandleOptionsForNode(selectedEdgeTargetNode).map((option) => (
                    <option key={option.value || 'auto'} value={option.value}>{t(option.label)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-[10px] leading-relaxed text-white/45">
              {t('Tips: välj annat fäste eller ruttningstyp för att styra hur pilen lämnar och går in i noderna.')}
            </div>
          </div>
        </div>
      )}

      {isInternalToggleVisible && !editMode && (
        <button
          type="button"
          onClick={() => {
            clearInternalToggleTimer();
            pointerInInternalZoneRef.current = false;
            setEditMode(true);
          }}
          title={t('Aktivera intern redigering')}
          className="fixed bottom-3 left-3 z-[60] rounded border border-primary/35 bg-[#111111]/95 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-primary shadow-2xl backdrop-blur-xl transition-colors hover:bg-primary/15"
        >
          <Pencil className="mr-1 inline h-3 w-3" />
          {t('Intern redigering')}
        </button>
      )}

    </div>
  );
}

