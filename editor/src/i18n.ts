export type Language = 'sv' | 'en';

export function translateText(value: string, _language: Language = 'sv') {
  return value;
}

export function localizeValue<T>(value: T, _language: Language = 'sv'): T {
  return value;
}
