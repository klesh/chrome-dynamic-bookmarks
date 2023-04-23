import { getCurrentBrowser } from "../browser";

const browser = getCurrentBrowser();

export default function getFaviconSrc({ size, pageUrl }) {
  const url = new URL(`chrome-extension://${browser.runtime.id}/_favicon/`);
  url.searchParams.append("pageUrl", pageUrl);
  url.searchParams.append("size", size.toString());
  return url.href;
}
