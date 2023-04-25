/**
 * Converts `\ ^ $ * + ? . ( ) | { } [ ]` characters
 * into `\\ \^ \$ \* \+ \? \. \( \) \| \{ \} \[ \] `
 * @param {string} regExpString - string to escape
 */
export default function escapeRegExp(regExpString: string): string {
  return regExpString.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
