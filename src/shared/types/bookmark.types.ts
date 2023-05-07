export type DynamicBookmark = {
  regExp?: string;
  history?: string[];
};

/**
 * A node (either a bookmark or a folder) in the bookmark tree.
 * Child nodes are ordered within their parent folder.
 *
 * @see https://developer.chrome.com/docs/extensions/reference/bookmarks/#type-BookmarkTreeNode
 */
export type BookmarkTreeNode = {
  /* An ordered list of children of this node. */
  children?: BookmarkTreeNode[];

  /* When this node was created, in milliseconds since the epoch (new Date(dateAdded)). */
  dateAdded?: number;

  /* When the contents of this folder last changed, in milliseconds since the epoch. */
  dateGroupModified?: number;

  /* The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted. */
  id: string;

  /* The 0-based position of this node within its parent folder. */
  index?: number | null;

  /* The id of the parent folder. Omitted for the root node. */
  parentId?: string | null;

  /* The text displayed for the node. */
  title: string;

  /* The URL navigated to when a user clicks the bookmark. Omitted for folders. */
  url?: string | null;

  /**
   * Indicates the reason why this node is unmodifiable.
   * The managed value indicates that this node was configured by the system administrator or by the custodian of a supervised user.
   * Omitted if the node can be modified by the user and the extension (default).
   */
  unmodifiable?: "managed";
};

export type NormalizedBookmarkTreeNode = Omit<BookmarkTreeNode, "children"> & {
  /** Array of node ids */
  children?: string[];
};
