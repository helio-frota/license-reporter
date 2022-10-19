
// Regex to test the cases:
// (A AND B); A AND B; (A OR B) ; A OR B
export function isDual (license:string): boolean {
  return /(\bOR\b)|(\bor\b)|(\bAND\b)|(\band\b)/.test(license);
}

// Extracts the first part of the string as:
// 'A' from '(A OR B)'
export function first (license: string): string {
  license = license.replace(/[()]/gi, '');
  return license.substring(0, license.indexOf(' '));
}

// Extracts the last part of the string as:
// 'B' from '(A OR B)'
export function last (license:string): string {
  license = license.replace(/[()]/gi, '');
  return license.substring(license.lastIndexOf(' ') + 1);
}
