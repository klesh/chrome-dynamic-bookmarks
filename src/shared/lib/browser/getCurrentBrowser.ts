/**
 * @returns {chrome} Current browser API object (ex. `chrome` for google chrome or `browser` for mozilla firefox)
 */
export default function getCurrentBrowser(): typeof chrome {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentBrowser = chrome || self?.chrome || (self as any)?.browser;

  if (currentBrowser) {
    return currentBrowser;
  }

  throw "This extension does not support your browser";
}
