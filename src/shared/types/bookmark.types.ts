import { OmitStrict } from "./common.types";

export type DynamicBookmarkStorageItem = {
  regExp?: string;
  history?: string[];
};

export type BrowserBookmark = chrome.bookmarks.BookmarkTreeNode;

export type NormalizedBrowserBookmark = OmitStrict<
  BrowserBookmark,
  "children"
> & {
  /** Array of node ids */
  children?: string[];
};

export type NormalizedDynamicBookmark = OmitStrict<
  BrowserBookmark,
  "children" | "title"
> & {
  title?: string;
  regExp?: string | RegExp;
  history?: string[];
  /** Array of node ids */
  children?: string[];
};
