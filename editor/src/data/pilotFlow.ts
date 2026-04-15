// Auto-generated — do not edit by hand
export const pilotNodes = [
  {
    "id": "pool-guest",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 0
    },
    "data": {
      "label": "Gäst",
      "color": "#f59e0b",
      "widthPx": 6400,
      "heightPx": 230
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 230
    }
  },
  {
    "id": "pool-staff",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 270
    },
    "data": {
      "label": "Staff / parkpersonal",
      "color": "#fb7185",
      "widthPx": 6400,
      "heightPx": 180
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 180
    }
  },
  {
    "id": "pool-webapp",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 490
    },
    "data": {
      "label": "WebApp",
      "color": "#38bdf8",
      "widthPx": 6400,
      "heightPx": 300
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 300
    }
  },
  {
    "id": "pool-cloud",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 850
    },
    "data": {
      "label": "JumpYard Cloud",
      "color": "#22c55e",
      "widthPx": 6400,
      "heightPx": 480
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 480
    }
  },
  {
    "id": "pool-roller",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 1380
    },
    "data": {
      "label": "Roller",
      "color": "#8b5cf6",
      "widthPx": 6400,
      "heightPx": 170
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 170
    }
  },
  {
    "id": "lane-guest",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 0
    },
    "data": {
      "label": "Gäst",
      "width": "6400px",
      "heightPx": 230,
      "index": 0,
      "poolId": "pool-guest"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 230
    },
    "selected": true
  },
  {
    "id": "lane-staff",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 270
    },
    "data": {
      "label": "Staff / parkpersonal",
      "width": "6400px",
      "heightPx": 180,
      "index": 1,
      "poolId": "pool-staff"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 180
    },
    "selected": true
  },
  {
    "id": "lane-webapp",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 490
    },
    "data": {
      "label": "WebApp",
      "width": "6400px",
      "heightPx": 300,
      "index": 2,
      "poolId": "pool-webapp"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 300
    },
    "selected": true
  },
  {
    "id": "lane-cloud-ops",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 1130
    },
    "data": {
      "label": "Ops jobs",
      "width": "6400px",
      "heightPx": 200,
      "index": 4,
      "poolId": "pool-cloud"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 200
    },
    "selected": true
  },
  {
    "id": "lane-cloud-aws",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 850
    },
    "data": {
      "label": "AWS + Aurora",
      "width": "6400px",
      "heightPx": 280,
      "index": 3,
      "poolId": "pool-cloud"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 280
    },
    "selected": true
  },
  {
    "id": "lane-roller",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 1380
    },
    "data": {
      "label": "Roller API",
      "width": "6400px",
      "heightPx": 170,
      "index": 5,
      "poolId": "pool-roller"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 170
    },
    "selected": true
  },
  {
    "id": "guest-start",
    "type": "event",
    "position": {
      "x": 140,
      "y": 98.51058240127703
    },
    "data": {
      "label": "Besök planeras",
      "type": "start",
      "lane": "Gäst",
      "details": "Resan börjar antingen hemma på befintlig webbplats eller på plats i parken.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 68,
      "height": 62
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-booked",
    "type": "gateway",
    "position": {
      "x": 267.1537326206614,
      "y": 90.8462673793386
    },
    "data": {
      "label": "Bokat hemma redan?",
      "lane": "Gäst",
      "details": "Piloten ska tydligt skilja mellan bokning hemma as-is och on-site-ingång i parken.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-home-book",
    "type": "task",
    "position": {
      "x": 430,
      "y": 34
    },
    "data": {
      "label": "Boka hemma as-is på webbplatsen",
      "lane": "Gäst",
      "details": "Bokningen sker fortsatt på befintlig webbplats hemma. Efteråt kan gästen antingen använda SMS-länken eller starta på plats via QR eller kiosk.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-sms",
    "type": "task",
    "position": {
      "x": 773.3037426417994,
      "y": 33.8600582720908
    },
    "data": {
      "label": "Få SMS 30 minuter före starttid",
      "lane": "Gäst",
      "details": "Gästen får ett sms cirka 30 minuter före starttid. Länken öppnar snabbt check-in, men gästen kan fortfarande välja parkens QR eller kiosk i stället.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-onsite-entry",
    "type": "task",
    "position": {
      "x": 781.4500398564182,
      "y": 160.18900729158486
    },
    "data": {
      "label": "Skanna park-QR på ställning eller välj kiosk",
      "lane": "Gäst",
      "details": "Samma on-site-ingång används både för gäster utan bokning och för gäster som redan bokat hemma men väljer QR eller kiosk i stället för SMS-länken.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-onsite-choice",
    "type": "task",
    "position": {
      "x": 1090.7733524226858,
      "y": 160.46889074740324
    },
    "data": {
      "label": "Hitta bokning eller köp på plats",
      "lane": "Gäst",
      "details": "På plats kan gästen hitta en befintlig bokning eller köpa en närliggande tid direkt i parkflödet.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-entry-choice",
    "type": "gateway",
    "position": {
      "x": 1108.8901107802833,
      "y": 31.679772082021323
    },
    "data": {
      "label": "Öppna check-in hur?",
      "lane": "Gäst",
      "details": "Gästen kan ha bokat hemma och ändå välja att använda parkens QR eller kiosk i stället för SMS-länken.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-open",
    "type": "task",
    "position": {
      "x": 1325.1667764084991,
      "y": 98.686827016206
    },
    "data": {
      "label": "Gå in i check-in-flödet",
      "lane": "Gäst",
      "details": "Flödet kan starta via personlig SMS-länk, via QR eller kiosk med befintlig bokning, eller efter köp på plats.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 183,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-review",
    "type": "task",
    "position": {
      "x": 1535.1058240127702,
      "y": 99.18195235740015
    },
    "data": {
      "label": "Granska bokning",
      "lane": "Gäst",
      "details": "När bokning finns ser gästen deltagare och vad som redan ingår.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 150,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-safety",
    "type": "task",
    "position": {
      "x": 1772.9168167211853,
      "y": 99.18195235740016
    },
    "data": {
      "label": "Slutför safety",
      "lane": "Gäst",
      "details": "Säkerhetsflödet i piloten: (1) kort safety-video, (2) generella parkregler, (3) bokningsnivå-intygande, (4) attraktionsspecifik bekräftelse där relevant. Slutförs innan tillägg och handoff.",
      "why": "JumpYard Cloud äger safety-steget. Alla gäster genomför samma sekvens oavsett kanal.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 136,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-addons",
    "type": "task",
    "position": {
      "x": 2000.7991869586108,
      "y": 99.9440795310727
    },
    "data": {
      "label": "Välj tillägg och connected",
      "lane": "Gäst",
      "details": "Samma huvudsteg oavsett om gästen kommer via mobil eller kiosk.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-pay",
    "type": "gateway",
    "position": {
      "x": 2384.7842489030777,
      "y": 87.85332231352328
    },
    "data": {
      "label": "Betalning krävs?",
      "lane": "Gäst",
      "details": "Efter tillägg och connected avgörs om bokningen behöver betalas eller kan gå direkt vidare till bekräftelsen.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-payment-step",
    "type": "task",
    "position": {
      "x": 2554.9944209972173,
      "y": 15.825102576784538
    },
    "data": {
      "label": "Betala",
      "lane": "Gäst",
      "details": "Gästen betalar bara om totalen inte redan är 0 efter tillägg, connected eller tidigare betalning.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 79,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-confirm",
    "type": "task",
    "position": {
      "x": 2698.7560291663394,
      "y": 95.69253475867718
    },
    "data": {
      "label": "Se bekräftelse + QR + kod",
      "lane": "Gäst",
      "details": "Bekräftelsen används sedan vid handoff hos staff.",
      "why": "Gästens perspektiv: check-in-flödet sammanfattas. I mobilflödet är detta samma skärm som guest-present.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 199,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-output-choice",
    "type": "gateway",
    "position": {
      "x": 3242.4429849222333,
      "y": 85.51763733546171
    },
    "data": {
      "label": "Skriv ut eller visa i mobilen?",
      "lane": "Gäst",
      "details": "I slutet skiljer sig bara utlämningen mellan kiosk och mobil: kiosk kan skriva ut ett kvitto eller confirmation, medan mobilen visar QR eller bokningskod direkt.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-print",
    "type": "task",
    "position": {
      "x": 3534.0548492005,
      "y": 9.889870869885641
    },
    "data": {
      "label": "Skriv ut kvitto / confirmation",
      "lane": "Gäst",
      "channel": "kiosk-only",
      "details": "Det här görs bara vid kiosk på plats när ett utskrivet kvitto eller confirmation behövs inför utlämningen hos staff.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 84
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-present",
    "type": "task",
    "position": {
      "x": 3770.4288750538644,
      "y": 105.02116480255405
    },
    "data": {
      "label": "Visa bekräftelse hos staff",
      "lane": "Gäst",
      "details": "I mobilflödet: samma bekräftelseskärm som guest-confirm, nu i handoff-kontext hos staff. I kioskflödet: gästen har redan skrivit ut och visar kvitto/confirmation fysiskt.",
      "why": "Överlämningspunkten hos staff. Mobil = samma data som guest-confirm. Kiosk = utskrivet kvitto.",
      "givesGuest": [
        "Tydlig QR-kod",
        "Kort bokningskod som reservväg",
        "Utskriven confirmation eller kvitto vid kiosk"
      ],
      "staffVerifies": [
        "QR-kod",
        "Bokningskod",
        "Utskriven confirmation eller kvitto"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 213,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-end",
    "type": "event",
    "position": {
      "x": 4553.447090984949,
      "y": 93.48528133041762
    },
    "data": {
      "label": "Redo för park",
      "type": "end",
      "lane": "Gäst",
      "details": "Parkresan fortsätter efter att staff har slutfört handoff.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 61,
      "height": 62
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-start",
    "type": "task",
    "position": {
      "x": 168.79289322246518,
      "y": 616.6629507687877
    },
    "data": {
      "label": "VY: Start / länk",
      "lane": "WebApp",
      "details": "Gemensam ingång för SMS-länk, park-QR och kiosk på plats.",
      "reads": [
        "checkin_token",
        "channel_hint",
        "venue context"
      ],
      "shownWhen": [
        "SMS-länk öppnas",
        "Parkens QR-ställning skannas",
        "Kiosk startas på plats"
      ],
      "givesGuest": [
        "Tydlig startpunkt för samma check-in- eller köpflöde"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 136,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-channel",
    "type": "gateway",
    "position": {
      "x": 390.70710677753476,
      "y": 606.7487372137181
    },
    "data": {
      "label": "Hur öppnas flödet?",
      "lane": "WebApp",
      "details": "SMS-länk är snabbspåret. Park-QR och kiosk går in i samma on-site-logik.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-mobile",
    "type": "task",
    "position": {
      "x": 610,
      "y": 516
    },
    "data": {
      "label": "SMS-länk med token",
      "lane": "WebApp",
      "channel": "primary-remote",
      "details": "Personlig länk som skickas cirka 30 min före och öppnar bokningsvyn direkt när gästen redan bokat hemma.",
      "shownWhen": [
        "Gästen har redan bokat hemma och öppnar sin personliga länk"
      ],
      "skippedWhen": [
        "Gästen startar i parken via QR eller kiosk"
      ],
      "givesGuest": [
        "Direkt väg in i bokningen utan extra lookup"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 168,
      "height": 67
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-mobile-entry",
    "type": "task",
    "position": {
      "x": 610,
      "y": 604
    },
    "data": {
      "label": "Park-QR på ställning",
      "lane": "WebApp",
      "channel": "primary-onsite",
      "details": "Bekvämt entrypoint i parken för gäster som inte bokat hemma eller inte checkat in ännu.",
      "shownWhen": [
        "Gästen skannar parkens QR-ställning"
      ],
      "givesGuest": [
        "Tydlig on-site-start för samma boknings- eller köpflöde"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 175,
      "height": 67
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-entry",
    "type": "task",
    "position": {
      "x": 649.5,
      "y": 691.5
    },
    "data": {
      "label": "Kiosk på plats",
      "lane": "WebApp",
      "channel": "assisted-onsite",
      "details": "Alternativ on-site-ingång till samma WebApp-flöde för gäster som redan är i parken.",
      "shownWhen": [
        "Gästen väljer kiosk i parken"
      ],
      "skippedWhen": [
        "Gästen använder egen telefon"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 138,
      "height": 67
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-kiosk-existing",
    "type": "gateway",
    "position": {
      "x": 930,
      "y": 621.5
    },
    "data": {
      "label": "Har du befintlig bokning?",
      "lane": "WebApp",
      "details": "Park-QR och kiosk delar samma on-site-val: hitta befintlig bokning eller köpa en närliggande tid i parken.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-lookup",
    "type": "task",
    "position": {
      "x": 1137,
      "y": 571
    },
    "data": {
      "label": "Hitta befintlig bokning",
      "lane": "WebApp",
      "details": "Gemensam lookup för Park-QR och kiosk när gästen redan har bokning.",
      "reads": [
        "booking_ref (primär)",
        "QR-matchning (primär)",
        "telefon + efternamn (sekundär)"
      ],
      "shownWhen": [
        "Gästen skannar parkens QR-ställning",
        "Kiosk används och gästen redan har bokning"
      ],
      "skippedWhen": [
        "SMS-länk med token går direkt till bokningen"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 189,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-buy-select",
    "type": "task",
    "position": {
      "x": 1015,
      "y": 689
    },
    "data": {
      "label": "VY: Välj produkt & antal",
      "badge": "Steg 1",
      "lane": "WebApp",
      "channel": "onsite-purchase",
      "details": "Gästen väljer produkt/paket och antal deltagare.",
      "why": "On-site purchase är ett eget pilotspår. Gäster som redan är i parken ska kunna köpa direkt.",
      "writes": [
        "vald_produkt",
        "antal_deltagare"
      ],
      "shownWhen": [
        "Ingen befintlig bokning hittas på plats",
        "Gästen vill köpa en tid som snart startar i parken"
      ],
      "endpoints": [
        "Get products"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 195,
      "height": 85
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-buy-details",
    "type": "task",
    "position": {
      "x": 1270,
      "y": 688.5
    },
    "data": {
      "label": "VY: Välj tid",
      "badge": "Steg 2",
      "lane": "WebApp",
      "channel": "onsite-purchase",
      "details": "Gästen väljer starttid 1–2 h framåt. Visar lediga tider i realtid.",
      "writes": [
        "vald_starttid",
        "guest_contact_email",
        "guest_contact_phone"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 113,
      "height": 85
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-booking",
    "type": "task",
    "position": {
      "x": 1377.5957653396656,
      "y": 589.2223757422418
    },
    "data": {
      "label": "VY: Bokning & deltagare",
      "lane": "WebApp",
      "details": "Gemensamt huvudsteg när bokningen hittats via SMS eller lookup, eller skapats på plats i parken.",
      "reads": [
        "bokningssammanfattning",
        "deltagare",
        "produkter",
        "betalningsstatus"
      ],
      "shownWhen": [
        "Bokning finns eller har skapats"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 192,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-safety-video",
    "type": "task",
    "position": {
      "x": 1617.748190512085,
      "y": 588.760189365936
    },
    "data": {
      "label": "VY: Safety-video",
      "lane": "WebApp",
      "details": "Gästen tittar på safety-videon innan intyget kan bockas i.",
      "writes": [
        "safety_video_seen_at"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 142,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-safety-attest",
    "type": "task",
    "position": {
      "x": 1811.918492339435,
      "y": 589.4363015675441
    },
    "data": {
      "label": "VY: Safety-intygande",
      "lane": "WebApp",
      "details": "Gästen bockar i att hen tagit del av safety-reglerna. Intygande krävs för att gå vidare.",
      "writes": [
        "safety_attested_at",
        "safety_status",
        "safety_completed_at"
      ],
      "shownWhen": [
        "Safety-videon är sedd"
      ],
      "givesGuest": [
        "Klart safety-läge inför resten av check-in-resan"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 174,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-addons",
    "type": "task",
    "position": {
      "x": 2025.9961686915517,
      "y": 588.313096677631
    },
    "data": {
      "label": "VY: Tillägg",
      "lane": "WebApp",
      "details": "Gästen ser tillägg som redan lagts till (från bokning eller tidigare steg) och kan lägga till fler eller nya. Tillgängliga tillägg: SkyRider, Connected, kaffe, extra person, hänglås.",
      "reads": [
        "produktkatalog",
        "prisregler",
        "befintliga_tillägg"
      ],
      "writes": [
        "valda tillägg",
        "connected_selected",
        "tillägg_uppdaterade"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 106,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-app-connected",
    "type": "gateway",
    "position": {
      "x": 2417.9267648844916,
      "y": 580.8949129568651
    },
    "data": {
      "label": "Connected valt?",
      "lane": "WebApp",
      "details": "Connected-profiler visas bara om produkten valts.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-connected",
    "type": "task",
    "position": {
      "x": 2517.724219267691,
      "y": 510.26603206849654
    },
    "data": {
      "label": "VY: Connected-profiler",
      "lane": "WebApp",
      "details": "Lätta profiler med namn och ikonval — antalet följer bokningen. Skapas i pilotens operativa state.",
      "writes": [
        "connected_profiles[]",
        "ikonval",
        "connected_profile_status"
      ],
      "shownWhen": [
        "Connected-produkt är vald"
      ],
      "skippedWhen": [
        "Ingen connected-produkt är vald"
      ],
      "givesGuest": [
        "Profiler redo för bandkoppling hos staff (antal följer bokningen)"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 192,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-app-payment",
    "type": "gateway",
    "position": {
      "x": 2752.963328158134,
      "y": 590.3638868916635
    },
    "data": {
      "label": "Betalning krävs?",
      "lane": "WebApp",
      "details": "No-payment-vägen är explicit i pilotflödet.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-payment",
    "type": "task",
    "position": {
      "x": 2898.725526813734,
      "y": 499.58688337806433
    },
    "data": {
      "label": "VY: Betalning",
      "lane": "WebApp",
      "details": "Gemensamt betalsteg när totalen är större än 0.",
      "writes": [
        "payment_status",
        "payment_reference",
        "pending_writeback"
      ],
      "shownWhen": [
        "Totalen är större än 0"
      ],
      "skippedWhen": [
        "Inga nya tillägg valdes eller totalen är 0"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 123,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-confirm",
    "type": "task",
    "position": {
      "x": 3130.2342762586813,
      "y": 589.589044334972
    },
    "data": {
      "label": "VY: Bekräftelse + QR + kod",
      "lane": "WebApp",
      "details": "Gemensam slutskärm med QR och kort bokningskod för handoff hos staff.",
      "why": "WebApp-vyn som implementerar bekräftelseskärmen. Genererar QR och kort bokningskod.",
      "reads": [
        "confirmation_code",
        "token_payload",
        "payment_status"
      ],
      "givesGuest": [
        "QR-kod",
        "Kort bokningskod",
        "Bekräftelse att check-in-flödet är klart"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 203,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-print",
    "type": "task",
    "position": {
      "x": 3486.21598120339,
      "y": 494.6029193832943
    },
    "data": {
      "label": "Skriv ut kvitto / confirmation",
      "lane": "WebApp",
      "channel": "kiosk-only",
      "details": "Valfri kioskavvikelse efter avslutat flöde. Mobilen behöver normalt inte detta steg.",
      "why": "Kiosk-specifikt steg. Finns bara i kioskflödet — mobilen hoppar direkt till present.",
      "shownWhen": [
        "Kanal = kiosk och utskrift behövs"
      ],
      "skippedWhen": [
        "Kanal = mobil eller ingen utskrift behövs"
      ],
      "givesGuest": [
        "Utskriven confirmation eller kvitto"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 84
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-present",
    "type": "task",
    "position": {
      "x": 3650.036445509017,
      "y": 593.6538450520646
    },
    "data": {
      "label": "VY: Visa QR / bokningskod",
      "lane": "WebApp",
      "details": "Sista WebApp-vyn före staff-handoff.",
      "why": "WebApp-vyn för handoff-skärm. I mobil: samma ConfirmationScreen som app-confirm. Sista vyn före staff-handoff.",
      "reads": [
        "QR payload",
        "booking code",
        "connected_profile_status"
      ],
      "givesGuest": [
        "Det som ska visas upp hos staff"
      ],
      "staffVerifies": [
        "QR-kod",
        "Bokningskod"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 201,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-daily",
    "type": "service",
    "position": {
      "x": 978.6037383177238,
      "y": 1155
    },
    "data": {
      "label": "Daglig seed",
      "lane": "Ops jobs",
      "details": "Seedar dagens bokningar, tickets, payments och customers till lokal snapshot och kundcache innan parken öppnar.",
      "why": "Kärnjobbet i piloten. Seedar all data för dagen. Webhook delta/enrichment kompletterar med realtidsuppdateringar under dagen.",
      "viewTags": [
        "teknik"
      ],
      "cadence": "05:00 daily",
      "jobs": [
        "Hämtar bokningar",
        "Hämtar tickets",
        "Hämtar payments",
        "Hämtar customers",
        "Upsertar snapshot"
      ],
      "endpoints": [
        "Get bookings",
        "Get tickets",
        "Get payments",
        "Get customers"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 137
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-delta",
    "type": "service",
    "position": {
      "x": 1308.2210174093395,
      "y": 1155
    },
    "data": {
      "label": "Booking webhook intake",
      "lane": "Ops jobs",
      "details": "Delta-intake under dagen. Tar emot booking-webhooks och skapar enrich-underlag. Kompletterar daglig seed — inte ersättning.",
      "viewTags": [
        "teknik"
      ],
      "cadence": "On event",
      "jobs": [
        "Ta emot Created / Updated / Cancelled",
        "Spara webhook-event",
        "Markera pending enrichment"
      ],
      "endpoints": [
        "Booking webhook"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 121
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-enrich",
    "type": "service",
    "position": {
      "x": 1639.3633788934721,
      "y": 1155
    },
    "data": {
      "label": "Webhook enrichment",
      "lane": "Ops jobs",
      "details": "Enrichment efter delta-intake. Berikar sena bokningar med exakt state och kundkontakt. Daglig seed är kärnan, detta är kompletterande realtidslager.",
      "viewTags": [
        "teknik"
      ],
      "cadence": "On event",
      "jobs": [
        "Hämta booking detail",
        "Hämta customer detail",
        "Upserta snapshot + kundkontakt"
      ],
      "endpoints": [
        "Get detail of a booking",
        "Get customer detail"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 121
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-sms",
    "type": "service",
    "position": {
      "x": 1942.2978320501904,
      "y": 1160
    },
    "data": {
      "label": "SMS-trigger",
      "lane": "Ops jobs",
      "details": "Skapar token och skickar länk inför ankomst.",
      "cadence": "Every 1 min",
      "jobs": [
        "Hitta bokningar om 30 min",
        "Skapa token",
        "Skriv sms_outbox"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 105
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-refresh",
    "type": "service",
    "position": {
      "x": 2275.9088951825333,
      "y": 1160
    },
    "data": {
      "label": "Refresh vid länköppning",
      "lane": "Ops jobs",
      "details": "Kör live-refresh när länk eller på plats-lookup kräver färsk detalj.",
      "cadence": "On demand",
      "endpoints": [
        "Get detail of a booking"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 105
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-retry",
    "type": "service",
    "position": {
      "x": 2611.780508066142,
      "y": 1160
    },
    "data": {
      "label": "Retry för writeback",
      "lane": "Ops jobs",
      "details": "Tar om writeback och redeem om externa anrop fallerar.",
      "cadence": "Retry queue",
      "endpoints": [
        "Create a booking",
        "Edit booking",
        "Add transaction record",
        "Redeem tickets"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 105
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-writeback-sync",
    "type": "service",
    "position": {
      "x": 2920,
      "y": 1155
    },
    "data": {
      "label": "Writeback & redeem sync",
      "variant": "job",
      "lane": "Ops jobs",
      "details": "Synkar bokningsdata och redeem-status tillbaka till lokal snapshot och Roller. Hanterar on-site-köp-writeback och staff-handoff-redeem via operationsköer.",
      "why": "All skrivning mellan Roller och lokal snapshot måste gå via ops-jobb — inte direktkopplingar — för spårbarhet och retry.",
      "cadence": "On event",
      "jobs": [
        "Writeback ny bokning till snapshot",
        "Synka redeem-status från staff-handoff",
        "Uppdatera Roller via API vid behov"
      ],
      "endpoints": [
        "Create a booking",
        "Redeem tickets",
        "Edit booking"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 121
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-snapshot",
    "type": "database",
    "position": {
      "x": 1177.316811143001,
      "y": 899.2385363365615
    },
    "data": {
      "label": "Aurora / Roller Snapshot",
      "lane": "AWS + Aurora",
      "collapsed": true,
      "expandLabel": "Expandera databas",
      "collapseLabel": "Fäll ihop databas",
      "systems": [
        "Aurora PostgreSQL",
        "S3 rå-payloads"
      ],
      "summary": "Lokal snapshot av Roller-bokningar, tickets, produkter och betalningar för dagens operativa flöde.",
      "summaryItems": [
        "bookings",
        "booking_tickets",
        "booking_products"
      ],
      "tables": [
        "bookings",
        "booking_tickets",
        "booking_products",
        "booking_payments"
      ],
      "keyFields": [
        "booking_status",
        "booking_modified_date",
        "ticket_ids",
        "payload_hash",
        "last_seen_from_roller_at"
      ],
      "writePattern": "Upsertas av daily seed, webhook enrichment och link-open refresh. Daily seed bygger basen, webhooken fyller på sena bokningar.",
      "reads": [
        "WebApp: VY: Bokning & deltagare",
        "WebApp: Hitta befintlig bokning"
      ],
      "writes": [
        "Ops jobs: daily seed",
        "Ops jobs: webhook enrichment",
        "Ops jobs: link-open refresh"
      ],
      "usedBy": [
        "WebApp bokningsvy",
        "Kiosk lookup",
        "Staff validering"
      ],
      "endpoints": [
        "Get bookings",
        "Get tickets",
        "Get payments",
        "Get detail of a booking",
        "Booking webhook"
      ],
      "contains": [
        "Bokning",
        "Tickets per booking",
        "Produktsammanfattning",
        "Betalningssnapshot"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 250,
      "height": 156
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-operational",
    "type": "database",
    "position": {
      "x": 1953.592023449551,
      "y": 889.1700546181888
    },
    "data": {
      "label": "Aurora / Operativ state",
      "lane": "AWS + Aurora",
      "collapsed": true,
      "expandLabel": "Expandera databas",
      "collapseLabel": "Fäll ihop databas",
      "systems": [
        "Aurora PostgreSQL",
        "Redis (valfri i V1)",
        "SQS / EventBridge"
      ],
      "summary": "Pilotens egen state för safety, token, check-in, connected-profiler, handoff och kundkontakt.",
      "summaryItems": [
        "booking_operational_state",
        "checkin_tokens",
        "connected_profile_drafts"
      ],
      "tables": [
        "booking_operational_state",
        "checkin_tokens",
        "sms_outbox",
        "guest_profiles",
        "connected_profile_drafts"
      ],
      "keyFields": [
        "local_checkin_status",
        "confirmation_code",
        "token_hash",
        "safety_status",
        "connected_profile_status"
      ],
      "writePattern": "Skrivs av WebApp, webhook enrichment, staff-handoff och SMS-jobb. Läser inför SMS, redeem och utlämning.",
      "reads": [
        "WebApp: VY: Safety-intygande",
        "WebApp: VY: Tillägg",
        "WebApp: VY: Betalning",
        "Staff: Utlämning hos staff"
      ],
      "writes": [
        "Ops jobs: daily seed",
        "Ops jobs: webhook enrichment",
        "WebApp: Safety-intygande",
        "WebApp: Connected-profiler",
        "WebApp: Betalning",
        "Staff: Handoff"
      ],
      "ownedState": [
        "Safety completion",
        "Confirmation code",
        "Connected-profiler",
        "Handoff-status"
      ],
      "usedBy": [
        "SMS-trigger",
        "WebApp huvudflöde",
        "Utlämning hos staff"
      ],
      "endpoints": [
        "Get customers",
        "Get customer detail",
        "Create a booking",
        "Get products",
        "Booking costs",
        "Edit booking",
        "Add transaction record",
        "Redeem tickets"
      ],
      "contains": [
        "Operativ status",
        "Tokens",
        "SMS-logg",
        "Kundkontakt för SMS",
        "Lätta profilutkast för connected"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 250,
      "height": 156
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-events",
    "type": "database",
    "position": {
      "x": 2713.9183912765634,
      "y": 889.4346484856403
    },
    "data": {
      "label": "Aurora / Event & observability",
      "lane": "AWS + Aurora",
      "collapsed": true,
      "expandLabel": "Expandera databas",
      "collapseLabel": "Fäll ihop databas",
      "systems": [
        "Aurora PostgreSQL",
        "S3 rå-payloads",
        "SQS / EventBridge"
      ],
      "summary": "Append-only eventspår, webhook-intake och sync-observability för pilotens drift.",
      "summaryItems": [
        "booking_events",
        "sync_runs",
        "error_summary"
      ],
      "tables": [
        "booking_events",
        "sync_runs"
      ],
      "keyFields": [
        "event_type",
        "event_source",
        "booking_id",
        "status",
        "error_summary"
      ],
      "writePattern": "Append-only från WebApp, staff och ops jobs. Webhook-events och driftspår synkas hit för felsökning och support.",
      "usedBy": [
        "Support",
        "Drift",
        "Felsökning"
      ],
      "jobs": [
        "Daglig seed",
        "Booking webhook intake",
        "Webhook enrichment",
        "Retry för writeback"
      ],
      "contains": [
        "Visit events",
        "Webhook-events",
        "Sync-resultat",
        "Felspår"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 250,
      "height": 156
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-future",
    "type": "database",
    "position": {
      "x": 3185.758132978323,
      "y": 894.63092783827
    },
    "data": {
      "label": "Connected experience senare",
      "lane": "AWS + Aurora",
      "collapsed": true,
      "expandLabel": "Expandera databas",
      "collapseLabel": "Fäll ihop databas",
      "future": true,
      "statusTag": "Senare",
      "systems": [
        "Aurora PostgreSQL"
      ],
      "viewTags": [
        "teknik",
        "future"
      ],
      "why": "Fullständig session- och device-modell för Connected Experience. Pilotens lätta profilutkast ligger i store-operational, inte här.",
      "summary": "Framtida full session- och device-modell, skild från pilotens lätta profilutkast.",
      "summaryItems": [
        "connected_sessions",
        "device_pairings",
        "live session state"
      ],
      "tables": [
        "connected_sessions",
        "device_pairings"
      ],
      "keyFields": [
        "session_started_at",
        "band_assigned",
        "device_id"
      ],
      "writePattern": "Senare scope. Inte aktivt i pilotens check-in.",
      "contains": [
        "Bandkoppling",
        "Session state",
        "Device pairing"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 250,
      "height": 140
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-bulk",
    "type": "service",
    "position": {
      "x": 1114.3869058589235,
      "y": 1398
    },
    "data": {
      "label": "Get bookings / Get tickets / Get payments / Get customers",
      "lane": "Roller API",
      "details": "Daglig seed för bokningssnapshot, betalningsledger och lokal kundcache.",
      "endpoints": [
        "Get bookings",
        "Get tickets",
        "Get payments",
        "Get customers"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 112
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-webhook",
    "type": "service",
    "position": {
      "x": 1413.8118776528447,
      "y": 1420
    },
    "data": {
      "label": "Booking webhook",
      "lane": "Roller API",
      "details": "Skickar Created, Updated och Cancelled för bokningar under dagen.",
      "endpoints": [
        "Booking webhook"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 82
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-booking",
    "type": "service",
    "position": {
      "x": 1691.3965398282976,
      "y": 1405
    },
    "data": {
      "label": "Get detail of a booking",
      "lane": "Roller API",
      "details": "Live-detail när bokning eller lookup behöver en färsk källa.",
      "endpoints": [
        "Get detail of a booking"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 82
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-customer",
    "type": "service",
    "position": {
      "x": 1972.75498090804,
      "y": 1408
    },
    "data": {
      "label": "Get customer detail",
      "lane": "Roller API",
      "details": "Hämtar telefon, e-post och övrig kundkontakt för sena bokningar efter webhook.",
      "endpoints": [
        "Get customer detail"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 98
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-products",
    "type": "service",
    "position": {
      "x": 2256.75498090804,
      "y": 1405
    },
    "data": {
      "label": "Get products / Booking costs",
      "lane": "Roller API",
      "details": "Produktkatalog och kostnadsberäkning för tillägg och connected.",
      "endpoints": [
        "Get products",
        "Booking costs"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 97
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-create",
    "type": "service",
    "position": {
      "x": 2545.8564033726075,
      "y": 1398
    },
    "data": {
      "label": "Create a booking",
      "lane": "Roller API",
      "details": "Skapar en ny booking i Roller för on-site-köp, inklusive booking owner, items och eventuell initial betalning.",
      "endpoints": [
        "Create a booking"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 98
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-writeback",
    "type": "service",
    "position": {
      "x": 2832.642936856419,
      "y": 1405
    },
    "data": {
      "label": "Edit booking / Add transaction record",
      "lane": "Roller API",
      "details": "Writeback till Roller efter betalning och tillägg.",
      "endpoints": [
        "Edit booking",
        "Add transaction record"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 97
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-redeem",
    "type": "service",
    "position": {
      "x": 3141.644700622636,
      "y": 1412
    },
    "data": {
      "label": "Redeem tickets",
      "lane": "Roller API",
      "details": "Kritisk slutpunkt när staff slutför handoff i piloten.",
      "endpoints": [
        "Redeem tickets"
      ],
      "viewTags": [
        "teknik"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 82
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-assist",
    "type": "task",
    "position": {
      "x": 3793.733757296125,
      "y": 313.65060821255906
    },
    "data": {
      "label": "Assisterad fallback",
      "lane": "Staff / parkpersonal",
      "details": "Används vid mismatch, saknad kod eller andra undantag.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 172,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-manual",
    "type": "task",
    "position": {
      "x": 4136.881898042386,
      "y": 267.80616704906123
    },
    "data": {
      "label": "Manuell kontroll",
      "lane": "Staff / parkpersonal",
      "details": "Staff kan kontrollera bokning manuellt innan utlämning eller alternativ hantering.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 155,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-handoff",
    "type": "task",
    "position": {
      "x": 4335.280421980138,
      "y": 295.2587638034468
    },
    "data": {
      "label": "Utlämning hos staff",
      "lane": "Staff / parkpersonal",
      "details": "Normal utlämning hos staff när check-in-flödet är klart.",
      "why": "Staff verifierar QR-kod eller bokningskod, lämnar ut tillägg och kopplar Connected Experience-band. Om något strular kan staff falla tillbaka till dagens manuella check-in.",
      "reads": [
        "Bekräftad bokning",
        "QR-kod eller bokningskod",
        "Connected-profiler från operativ state"
      ],
      "writes": [
        "Redeem-status",
        "visit event",
        "utlämning klar",
        "bandkoppling slutförd"
      ],
      "givesGuest": [
        "Tillägg",
        "Connected Experience-band",
        "Klartecken att gå vidare"
      ],
      "staffVerifies": [
        "QR-kod",
        "Bokningskod"
      ],
      "endpoints": [
        "Redeem tickets"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 172,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-api-end",
    "type": "event",
    "position": {
      "x": 4546.147777870798,
      "y": 362.8093656076774
    },
    "data": {
      "label": "Manuell åtgärd klar",
      "type": "end",
      "lane": "Staff / parkpersonal",
      "details": "Fallbackgrenen avslutas här när normalen inte kunde användas.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 90,
      "height": 72
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-skyrider",
    "type": "gateway",
    "position": {
      "x": 2177.8296147568362,
      "y": 577.6382985779139
    },
    "data": {
      "label": "SkyRider valt?",
      "lane": "WebApp",
      "details": "SkyRider-höjdintyg krävs bara om SkyRider är valt som tillägg (befintligt eller nytt).",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-skyrider-attest",
    "type": "task",
    "position": {
      "x": 2247.3037191832755,
      "y": 721.836341792247
    },
    "data": {
      "label": "VY: SkyRider-höjdkrav",
      "lane": "WebApp",
      "details": "SkyRider-biljetter får endast användas av personer som är minst 100 cm långa. Visas bara om SkyRider är valt som tillägg.",
      "writes": [
        "skyrider_height_confirmed"
      ],
      "shownWhen": [
        "SkyRider är valt som tillägg"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 184,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-open",
    "type": "task",
    "position": {
      "x": 4754.458568286254,
      "y": 27.222375742241894
    },
    "data": {
      "label": "Öppna förlängning i webappen",
      "lane": "Gäst",
      "details": "Länken öppnar en dedikerad förlängningsvy i samma webapp.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-pay",
    "type": "task",
    "position": {
      "x": 5079.99998139304,
      "y": 36.00000058758822
    },
    "data": {
      "label": "Betala 50 kr för +30 min",
      "lane": "Gäst",
      "details": "Gästen genomför betalningen direkt i webappen (Swish/kort).",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 191,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-qr",
    "type": "task",
    "position": {
      "x": 5351.99998354753,
      "y": 38.00000078345096
    },
    "data": {
      "label": "Få QR-kod för bandbyte",
      "lane": "Gäst",
      "details": "Efter betalning visas en QR-kod som används vid kassan för att hämta nytt band.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 190,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-walk",
    "type": "task",
    "position": {
      "x": 5598.500084220977,
      "y": 37.99999020686308
    },
    "data": {
      "label": "Gå till kassan/staff",
      "lane": "Gäst",
      "details": "Gästen tar med QR-koden till kassan eller närmaste staff.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 170,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-band",
    "type": "task",
    "position": {
      "x": 6105.327710616821,
      "y": 36.765836220747005
    },
    "data": {
      "label": "Hämta nytt band till besökaren/barnet",
      "lane": "Gäst",
      "details": "Staff scannar QR och delar ut ett nytt band med uppdaterad sluttid.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-extend-view",
    "type": "task",
    "position": {
      "x": 5052.141904811604,
      "y": 540
    },
    "data": {
      "label": "VY: Förlängning",
      "lane": "WebApp",
      "details": "Fast pris 50 kr för 30 min extra. Visar nuvarande sluttid och ny sluttid.",
      "reads": [
        "booking_end_time",
        "extension_price_fixed"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 142,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-extend-pay",
    "type": "task",
    "position": {
      "x": 5250.893450145093,
      "y": 540
    },
    "data": {
      "label": "VY: Betalning förlängning",
      "lane": "WebApp",
      "details": "Swish eller kort. När betalningen lyckats genereras en QR-kod för bandutbyte.",
      "writes": [
        "extension_payment_status"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 211,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-extend-qr",
    "type": "task",
    "position": {
      "x": 5520,
      "y": 540
    },
    "data": {
      "label": "VY: QR för bandbyte",
      "lane": "WebApp",
      "details": "QR-kod visas tillsammans med instruktion: Gå till kassan/staff för att hämta nytt band.",
      "reads": [
        "extension_qr_token"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 164,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-extend-scan",
    "type": "task",
    "position": {
      "x": 5830.208657030996,
      "y": 330
    },
    "data": {
      "label": "Scanna förlängnings-QR",
      "lane": "Staff / parkpersonal",
      "details": "Staff scannar gästens QR vid kassan, ser betalningsstatus och bandets ID.",
      "reads": [
        "extension_payment_status",
        "current_band_id"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 204,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-extend-band",
    "type": "task",
    "position": {
      "x": 6080.129287973779,
      "y": 282.20236603543793
    },
    "data": {
      "label": "Dela ut nytt band",
      "lane": "Staff / parkpersonal",
      "details": "Staff aktiverar ett nytt band med den nya sluttiden och kopplar det till profilen/bokningen i Roller.",
      "writes": [
        "new_band_id",
        "booking_end_time_new"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 152,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "note-extension-flow",
    "type": "note",
    "position": {
      "x": 4963.973520779546,
      "y": -117.12894769554362
    },
    "data": {
      "label": "Under vistelse — förlängning",
      "lane": "Gäst",
      "tone": "guide",
      "details": "Delflöde efter check-in: gästen får påminnelse, betalar i webappen, får QR, hämtar nytt band hos staff.",
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "measured": {
      "width": 280,
      "height": 103
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "note-1775561450067",
    "type": "note",
    "position": {
      "x": 79.80617461005176,
      "y": -191.3643412337454
    },
    "data": {
      "label": "Scope-avgränsning",
      "lane": "JumpYard Cloud",
      "tone": "warning",
      "details": "Gruppbokning / kalas: identifierat scope-område, hanteras inte i pilotens check-in-flöde. Kräver separat discovery och designfas.",
      "scopeStatus": "out-of-scope",
      "viewTags": [
        "pilotresa",
        "future"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "measured": {
      "width": 280,
      "height": 103
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "event-1775807705215",
    "type": "event",
    "position": {
      "x": 4633.816678030457,
      "y": 35.77012104999213
    },
    "data": {
      "label": "Få SMS/mail 15 min före sluttid",
      "type": "start",
      "tags": [
        "main"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false,
      "lane": "Gäst"
    },
    "measured": {
      "width": 90,
      "height": 72
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "event-1775807990618",
    "type": "event",
    "position": {
      "x": 4895.317467977898,
      "y": 537.1819425182513
    },
    "data": {
      "label": "Få SMS/mail 15 min före sluttid",
      "type": "start",
      "tags": [
        "main"
      ],
      "viewTags": [
        "pilotresa"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 90,
      "height": 72
    },
    "selected": false,
    "dragging": false
  }
] as any[];

export const pilotEdges = [
  {
    "id": "g16",
    "source": "guest-output-choice",
    "target": "guest-present",
    "type": "step",
    "label": "Ingen utskrift / visa i mobilen",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g15",
    "source": "guest-confirm",
    "target": "guest-output-choice",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g14",
    "source": "guest-pay",
    "target": "guest-payment-step",
    "type": "step",
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g14b",
    "source": "guest-pay",
    "target": "guest-confirm",
    "type": "step",
    "label": "Nej",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g14c",
    "source": "guest-payment-step",
    "target": "guest-confirm",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g15b",
    "source": "guest-output-choice",
    "target": "guest-print",
    "type": "step",
    "label": "Kiosk / skriv ut",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g15c",
    "source": "guest-print",
    "target": "guest-present",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g13",
    "source": "guest-addons",
    "target": "guest-pay",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g12",
    "source": "guest-safety",
    "target": "guest-addons",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g11",
    "source": "guest-review",
    "target": "guest-safety",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g10",
    "source": "guest-open",
    "target": "guest-review",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g9",
    "source": "guest-onsite-choice",
    "target": "guest-open",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "bottom",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g8",
    "source": "guest-onsite-entry",
    "target": "guest-onsite-choice",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g7",
    "source": "guest-booked",
    "target": "guest-onsite-entry",
    "type": "step",
    "label": "Nej",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g6",
    "source": "guest-entry-choice",
    "target": "guest-onsite-entry",
    "type": "step",
    "label": "Skanna QR / kiosk",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g5",
    "source": "guest-entry-choice",
    "target": "guest-open",
    "type": "step",
    "label": "SMS-länk",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g4",
    "source": "guest-sms",
    "target": "guest-entry-choice",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g3",
    "source": "guest-home-book",
    "target": "guest-sms",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g2",
    "source": "guest-booked",
    "target": "guest-home-book",
    "type": "step",
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g1",
    "source": "guest-start",
    "target": "guest-booked",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w11",
    "source": "kiosk-buy-details",
    "target": "app-booking",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "bottom",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w10",
    "source": "kiosk-lookup",
    "target": "app-booking",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w9",
    "source": "gw-kiosk-existing",
    "target": "kiosk-buy-select",
    "type": "step",
    "label": "Nej",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w9b",
    "source": "kiosk-buy-select",
    "target": "kiosk-buy-details",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w8",
    "source": "gw-kiosk-existing",
    "target": "kiosk-lookup",
    "type": "step",
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w6",
    "source": "gw-mobile-entry",
    "target": "gw-kiosk-existing",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w5",
    "source": "app-mobile",
    "target": "app-booking",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w4",
    "source": "gw-channel",
    "target": "kiosk-entry",
    "type": "step",
    "label": "Kiosk",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w3",
    "source": "gw-channel",
    "target": "gw-mobile-entry",
    "type": "step",
    "label": "Park-QR",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w2",
    "source": "gw-channel",
    "target": "app-mobile",
    "type": "step",
    "label": "SMS-länk",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w1",
    "source": "app-start",
    "target": "gw-channel",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w12",
    "source": "app-booking",
    "target": "app-safety-video",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w13",
    "source": "app-safety-attest",
    "target": "app-addons",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w14",
    "source": "app-addons",
    "target": "gw-skyrider",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w18",
    "source": "gw-app-payment",
    "target": "app-payment",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w22",
    "source": "app-confirm",
    "target": "app-present",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "label": "mobil / ingen utskrift",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w23",
    "source": "kiosk-print",
    "target": "app-present",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o1",
    "source": "job-daily",
    "target": "job-delta",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o2",
    "source": "job-delta",
    "target": "job-enrich",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o3",
    "source": "job-enrich",
    "target": "job-sms",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o3b",
    "source": "job-sms",
    "target": "job-refresh",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o4",
    "source": "job-refresh",
    "target": "job-retry",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d9",
    "source": "app-confirm",
    "target": "store-operational",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Bekräftelsevyn läser token, QR och bokningskod från operativ state.",
      "operation": "Läsning",
      "fields": [
        "confirmation_code",
        "token_payload",
        "payment_status"
      ],
      "why": "Samma slutbild måste fungera för både mobil och kiosk.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d9b",
    "source": "app-confirm",
    "target": "store-events",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "WebApp-flödet skriver centrala händelser när check-in når bekräftat läge.",
      "operation": "Skrivning",
      "fields": [
        "booking_loaded",
        "safety_completed",
        "payment_recorded",
        "confirmation_ready"
      ],
      "why": "Eventspåret ska visa vad som faktiskt hände i WebApp-flödet, inte bara i staff och bakgrundsjobb.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d16",
    "source": "roller-webhook",
    "target": "job-delta",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Roller pushar Created, Updated och Cancelled till webhook-intake under dagen.",
      "operation": "Webhook",
      "fields": [
        "bookingReference",
        "bookingUniqueId",
        "eventType",
        "channel"
      ],
      "why": "Sena bokningar och uppdateringar ska fångas utan att belasta Data API med tät polling.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d19",
    "source": "job-refresh",
    "target": "roller-booking",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Refresh vid länköppning hämtar färsk booking detail.",
      "operation": "Läsning",
      "fields": [
        "booking detail",
        "produktstatus",
        "betalningsstatus",
        "tickets"
      ],
      "why": "Behövs när länk öppnas eller på plats-lookup kräver färsk data.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d22",
    "source": "job-retry",
    "target": "roller-writeback",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Retryjobbet tar om writeback när betalning eller bokningsändring inte gick igenom.",
      "operation": "Writeback",
      "fields": [
        "Create booking payload",
        "Edit booking payload",
        "transaction record payload",
        "retry context"
      ],
      "why": "Externa Roller-anrop behöver ett separat återförsöksspår.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "f1",
    "source": "guest-present",
    "target": "staff-assist",
    "type": "step",
    "label": "saknar kod / mismatch",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "f3",
    "source": "staff-manual",
    "target": "staff-handoff",
    "type": "step",
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-connected",
    "target": "gw-app-payment",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-connectedright-gw-app-paymentleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-confirm",
    "target": "kiosk-print",
    "label": "kiosk / utskrift",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-confirmtop-right-kiosk-printleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "source": "job-retry",
    "target": "staff-assist",
    "label": "kritisk avvikelse",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "zIndex": 0,
    "id": "xy-edge__job-retrytop-staff-assistbottom-right",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "source": "staff-assist",
    "target": "staff-manual",
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "zIndex": 0,
    "id": "xy-edge__staff-assistright-staff-manualleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "staff-handoff",
    "target": "guest-end",
    "sourceHandle": "right",
    "targetHandle": "bottom",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__staff-handoffright-top-guest-endbottom",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-daily",
    "target": "roller-bulk",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Daglig seed hämtar bokningar, tickets, payments och customers som behövs inför dagens SMS och check-in.",
      "operation": "Sync",
      "fields": [
        "bookings",
        "tickets",
        "payment rows",
        "customers"
      ],
      "why": "Bygger dagens operativa snapshot och kundcache före SMS och check-in, i stället för att utgå från redan redeemade arrivals.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__job-dailybottom-left-roller-bulktop-left",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-daily",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Daglig seed fyller gästprofiler och kontaktcache som SMS-flödet behöver senare under dagen.",
      "operation": "Skrivning",
      "fields": [
        "guest_profiles",
        "contactNumber",
        "email",
        "customerId"
      ],
      "why": "Telefonnummer och kundkontakt ska finnas lokalt innan SMS-triggern börjar jobba mot dagens bokningar.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "zIndex": 0,
    "id": "xy-edge__job-dailytop-right-store-operationalbottom-left",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-booking",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Bokningsvyn läser den senaste snapshoten för gemensam visning.",
      "operation": "Läsning",
      "fields": [
        "bokningssammanfattning",
        "deltagare",
        "produktlista",
        "betalningsstatus"
      ],
      "why": "Både mobil och kiosk ska visa samma bokningsbild efter att bokningen hittats.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__app-bookingbottom-store-snapshottop-right",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "kiosk-lookup",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Gemensam lookup läser en matchbar bokning från snapshoten.",
      "operation": "Läsning",
      "fields": [
        "booking_ref",
        "telefon + efternamn",
        "QR-matchning",
        "sessionstid"
      ],
      "why": "Samma lookup ska fungera för mobil via Park-QR och kiosk med befintlig bokning.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__kiosk-lookupbottom-store-snapshottop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-connected",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Connected-profiler sparas i pilotens operativa state.",
      "operation": "Skrivning",
      "fields": [
        "connected_profiles[]",
        "ikonval",
        "connected_profile_status"
      ],
      "why": "Pilotens lätta profilutkast hanteras i operativ state, inte i future-lagret.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__app-connectedbottom-right-store-operationaltop-left",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "staff-handoff",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Staff slutför connected-delen genom att koppla band till profilerna vid utlämning.",
      "operation": "Läsning + skrivning",
      "fields": [
        "connected_profiles[]",
        "band_assignment",
        "pairing_status",
        "handoff_completed"
      ],
      "why": "Bandkopplingen skriver till operativ state, inte till future-lagret.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "zIndex": 0,
    "id": "xy-edge__staff-handoffbottom-left-store-operationalright-bottom2",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "staff-handoff",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Staff läser och uppdaterar operativ state när handoff slutförs.",
      "operation": "Läsning + skrivning",
      "fields": [
        "QR-kod eller bokningskod",
        "connected-profiler",
        "utlämning klar",
        "bandkoppling"
      ],
      "why": "Piloten avslutas hos staff, inte i self-service.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__staff-handoffbottom-store-operationalright-bottom",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-present",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Slutvyn läser det som gästen ska visa upp hos staff.",
      "operation": "Läsning",
      "fields": [
        "QR-kod",
        "bokningskod",
        "connected_profile_status"
      ],
      "why": "Staff-handoff behöver en tydlig och stabil slutvy oavsett kanal.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "zIndex": 0,
    "id": "xy-edge__app-presentbottom-store-operationalright",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "kiosk-print",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Kiosk läser confirmation-data inför eventuell utskrift.",
      "operation": "Läsning",
      "fields": [
        "confirmation_code",
        "QR payload",
        "print status"
      ],
      "why": "Kioskens utskrift är ett litet sidospår efter det delade flödet.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "zIndex": 0,
    "id": "xy-edge__kiosk-printbottom-left-store-operationalright-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-addons",
    "target": "roller-products",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Tilläggsvyn hämtar produktkatalog och prisberäkning direkt via Cloud backend.",
      "operation": "Läsning",
      "fields": [
        "produktkatalog",
        "prisberäkning",
        "connected-produkt"
      ],
      "why": "Tilläggssteget läser Roller-data synkront via Cloud backend — inte via databasen.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__app-addonsbottom-roller-productstop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-sms",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "SMS-jobbet läser bokningar redo för utskick och skriver token/outbox-status.",
      "operation": "Läsning + skrivning",
      "fields": [
        "checkin_tokens",
        "sms_outbox",
        "checkin_link_sent_at"
      ],
      "why": "Unik länk måste skapas och spåras innan gästen öppnar flödet.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "zIndex": 0,
    "id": "xy-edge__job-smstop-left-store-operationalbottom-left",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-safety-attest",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Safetyresultat skrivs till operativ state.",
      "operation": "Skrivning",
      "fields": [
        "safety_status",
        "safety_completed_at"
      ],
      "why": "Safety ägs lokalt i JumpYard Cloud under piloten.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-safetybottom-store-operationalleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-addons",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Tilläggsval och connected-flagga sparas inför betalningsbeslut och writeback.",
      "operation": "Skrivning",
      "fields": [
        "selected_addons",
        "connected_selected",
        "pricing_context"
      ],
      "why": "WebApp behöver en lokal operativ state innan Roller-writeback sker.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "zIndex": 0,
    "id": "xy-edge__app-addonsbottom-store-operationalleft-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-connected",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Connected-profiler sparas som lätta profilutkast i piloten.",
      "operation": "Skrivning",
      "fields": [
        "connected_profiles[]",
        "ikonval",
        "connected_profile_status"
      ],
      "why": "Staff ska kunna koppla band till profilerna som skapades i check-in-flödet.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-connectedbottom-store-operationaltop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-payment",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Betalningsresultat skrivs innan writeback och bekräftelse.",
      "operation": "Skrivning",
      "fields": [
        "payment_status",
        "payment_reference",
        "writeback_pending"
      ],
      "why": "No-payment- och betalningsspåret behöver mötas i samma lokala state.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-paymentbottom-store-operationaltop-left",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-refresh",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Färsk booking detail skrivs tillbaka till snapshoten.",
      "operation": "Skrivning",
      "fields": [
        "raw_payload_json",
        "payload_hash",
        "updated booking snapshot"
      ],
      "why": "WebApp ska fortsätta läsa lokal snapshot även efter live-refresh.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "right",
    "zIndex": 0,
    "id": "xy-edge__job-refreshtop-left-store-snapshotright-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "staff-handoff",
    "target": "store-events",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Staff skriver visit event och utlämningsspår.",
      "operation": "Skrivning",
      "fields": [
        "handoff_completed",
        "redeem_succeeded",
        "band_paired"
      ],
      "why": "Append-only eventspår behövs för drift, analys och felsökning.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "zIndex": 0,
    "id": "xy-edge__staff-handoffbottom-left-store-eventsright-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-delta",
    "target": "store-events",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook-intake skriver råa booking-events och enrich-status till eventlagret.",
      "operation": "Skrivning",
      "fields": [
        "bookingReference",
        "eventType",
        "payload_hash",
        "pending_enrichment"
      ],
      "why": "Cloud behöver spåra sena bokningar och uppdateringar innan de berikas till lokal state.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "zIndex": 0,
    "id": "xy-edge__job-deltatop-left-store-eventsbottom-right",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-enrich",
    "target": "roller-booking",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook enrichment hämtar exakt booking-state direkt efter webhooken.",
      "operation": "Läsning",
      "fields": [
        "bookingReference",
        "bookingUniqueId",
        "items",
        "payments"
      ],
      "why": "Webhooken är en signal, men booking detail är den auktoritativa sanningen för den sena bokningen.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__job-enrichbottom-left-roller-bookingtop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-enrich",
    "target": "roller-customer",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook enrichment hämtar kundkontakt för att få telefonnummer och SMS-beredskap på sena bokningar.",
      "operation": "Läsning",
      "fields": [
        "customerId",
        "contactNumber",
        "email",
        "acceptMarketingSms"
      ],
      "why": "Sena bokningar behöver kundkontakt även om kunden inte fanns i morgonens seed.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__job-enrichbottom-right-roller-customertop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-enrich",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook enrichment skriver den sena bokningen tillbaka till Roller-snapshoten.",
      "operation": "Skrivning",
      "fields": [
        "bookings",
        "booking_tickets",
        "booking_payments",
        "last_seen_from_roller_at"
      ],
      "why": "Sena bokningar ska bli sökbara i lookup och bokningsvyn utan att vänta till nästa dag.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "zIndex": 0,
    "id": "xy-edge__job-enrichtop-left-store-snapshotbottom-right",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-enrich",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook enrichment skriver kundkontakt, sms-beredskap och senaste bookingkontext till operativ state.",
      "operation": "Skrivning",
      "fields": [
        "guest_profiles",
        "contactNumber",
        "sms_ready",
        "latest booking context"
      ],
      "why": "SMS-triggern ska kunna jobba helt mot Aurora även för bokningar som kommit in efter daily seed.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "zIndex": 0,
    "id": "xy-edge__job-enrichtop-right-store-operationalbottom-right",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-daily",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Daglig seed skriver dagens boknings-, ticket- och payment-snapshot till Aurora.",
      "operation": "Skrivning",
      "fields": [
        "bookings",
        "booking_tickets",
        "booking_products",
        "booking_payments"
      ],
      "why": "WebApp och lookup ska börja från ett lokalt snapshot av väntade gäster, inte från attendance-data.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__job-dailytop-left-store-snapshotleft-bottom",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "kiosk-entry",
    "target": "gw-kiosk-existing",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__kiosk-entryright-gw-kiosk-existingleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "gw-app-connected",
    "target": "gw-app-payment",
    "label": "No",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__gw-app-connectedbottom-gw-app-paymentleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-present",
    "target": "staff-handoff",
    "sourceHandle": "right",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__guest-presentright-staff-handofftop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w-extend-2",
    "source": "guest-extend-notice",
    "target": "guest-extend-open",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w-extend-6",
    "source": "app-extend-pay",
    "target": "app-extend-qr",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w-extend-10",
    "source": "staff-extend-scan",
    "target": "staff-extend-band",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w-extend-11",
    "source": "staff-extend-band",
    "target": "guest-extend-band",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-safety-video",
    "target": "app-safety-attest",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-safety-videoright-app-safety-attestleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-extend-view",
    "sourceHandle": "right",
    "target": "app-extend-pay",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__app-extend-viewright-app-extend-payleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "event-1775807705215",
    "sourceHandle": "right",
    "target": "guest-extend-open",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__event-1775807705215right-guest-extend-openleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-extend-open",
    "sourceHandle": "right",
    "target": "guest-extend-pay",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__guest-extend-openright-guest-extend-payleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-extend-pay",
    "sourceHandle": "right",
    "target": "guest-extend-qr",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__guest-extend-payright-guest-extend-qrleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-extend-qr",
    "target": "guest-extend-walk",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__guest-extend-qrright-guest-extend-walkleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-extend-walk",
    "target": "staff-extend-scan",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__guest-extend-walkright-staff-extend-scanleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "event-1775807990618",
    "sourceHandle": "right",
    "target": "app-extend-view",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__event-1775807990618right-app-extend-viewleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-skyrider-attest",
    "target": "gw-app-connected",
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-skyrider-attesttop-right-gw-app-connectedleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "gw-skyrider",
    "target": "app-skyrider-attest",
    "label": "SkyRider valt",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__gw-skyriderbottom-app-skyrider-attestleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-extend-pay",
    "target": "store-operational",
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Ny sluttid och nytt band-id skrivs till operativ state och vidare till Roller.",
      "operation": "Skrivning",
      "fields": [
        "new_band_id",
        "booking_end_time_new"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-extend-paybottom-store-operationalright",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "ops-wb-1",
    "source": "staff-handoff",
    "target": "job-writeback-sync",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Staff-handoff köar redeem-request via ops-jobb istället för direktanrop.",
      "operation": "Köa",
      "fields": [
        "ticket_ids",
        "redeem readiness",
        "handoff_completed"
      ],
      "why": "All kommunikation med Roller ska gå via ops-jobb för spårbarhet och retry.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "ops-wb-2",
    "source": "job-writeback-sync",
    "target": "store-snapshot",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Ops-jobbet skriver tillbaka bokningsdata och redeem-status till lokal snapshot.",
      "operation": "Skrivning",
      "fields": [
        "bookingReference",
        "redeem_status",
        "booking owner",
        "items"
      ],
      "why": "Writeback och redeem måste uppdatera snapshot via ops-jobb för konsistens.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "ops-wb-3",
    "source": "job-writeback-sync",
    "target": "roller-redeem",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Ops-jobbet anropar Roller Redeem tickets API.",
      "operation": "Writeback",
      "fields": [
        "ticket_ids",
        "redeem request per ticket"
      ],
      "why": "Redeem ska alltid gå via ops-jobb för retry och spårbarhet.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "ops-wb-4",
    "source": "job-writeback-sync",
    "target": "roller-create",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Ops-jobbet skapar ny bokning i Roller vid on-site-köp.",
      "operation": "Skapande",
      "fields": [
        "customer",
        "items",
        "payments"
      ],
      "why": "On-site-köp ska också gå via ops-jobb för retry och konsistens.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    },
    "source": "gw-skyrider",
    "target": "gw-app-connected",
    "label": "SkyRider ej valt",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__gw-skyriderright-gw-app-connectedleft"
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    },
    "source": "gw-app-connected",
    "target": "app-connected",
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__gw-app-connectedtop-app-connectedleft"
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    },
    "source": "app-payment",
    "target": "app-confirm",
    "sourceHandle": "right",
    "targetHandle": "left-top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-paymentright-app-confirmleft-top"
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    },
    "source": "gw-app-payment",
    "target": "app-confirm",
    "label": "Nej",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "right",
    "targetHandle": "left-bottom",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__gw-app-paymentright-app-confirmleft-bottom"
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "source": "staff-handoff",
    "target": "staff-api-end",
    "label": "manuell väg",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    },
    "id": "xy-edge__staff-handoffbottom-staff-api-endleft"
  }
] as any[];
