import { BrowserBookmark, NormalizedBrowserBookmark } from "@/shared/types";

import normalizeBookmarkTree from "./normalizeBookmarkTree";

describe("normalizeBookmarkTree", () => {
  it("normalizes bookmark tree", () => {
    const treeRoot: BrowserBookmark = {
      id: "0",
      title: "",
      children: [
        {
          children: [],
          id: "1",
          parentId: "0",
          title: "Folder",
        },
        {
          id: "2",
          parentId: "0",
          url: "https://mysite.com",
          title: "Bookmark",
        },
      ],
    };

    const expected: Record<string, NormalizedBrowserBookmark> = {
      0: {
        id: "0",
        title: "",
        children: ["1", "2"],
      },
      1: {
        id: "1",
        parentId: "0",
        title: "Folder",
        children: [],
      },
      2: {
        id: "2",
        parentId: "0",
        title: "Bookmark",
        url: "https://mysite.com",
      },
    };

    const actual = normalizeBookmarkTree(treeRoot);
    expect(actual).toEqual(expected);
  });
});
