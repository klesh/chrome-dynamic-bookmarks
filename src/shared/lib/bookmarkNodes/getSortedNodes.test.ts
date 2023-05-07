import { NormalizedDynamicBookmark } from "@/shared/types";

import getSortedNodes from "./getSortedNodes";

describe("getSortedNodes", () => {
  it("sorts bookmark nodes", () => {
    const nodes: NormalizedDynamicBookmark[] = [
      { id: "0", title: "A", url: "https://mysite.com" },
      { id: "1", title: "B", url: "https://mysite2.com" },
      { id: "2", title: "A", children: [] },
      { id: "3", title: "B", children: [] },
    ];
    const expected: NormalizedDynamicBookmark[] = [
      { id: "2", title: "A", children: [] },
      { id: "3", title: "B", children: [] },
      { id: "0", title: "A", url: "https://mysite.com" },
      { id: "1", title: "B", url: "https://mysite2.com" },
    ];
    const actual = getSortedNodes(nodes);
    expect(actual).toEqual(expected);
  });
});
