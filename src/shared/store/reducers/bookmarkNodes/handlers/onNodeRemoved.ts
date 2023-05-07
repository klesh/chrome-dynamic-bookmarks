import { removeProp } from "@/shared/lib/objects";
import {
  ActionHandler,
  BookmarkNodesAction,
  BookmarkNodesState,
} from "@/shared/types";

import { getNode } from "./getNode";

export const onNodeRemoved: ActionHandler<
  BookmarkNodesState,
  BookmarkNodesAction
> = (state, { data }) => {
  if (!data) return state;

  const nodeId = data.id;
  const node = getNode(state, nodeId, null);
  if (!node) {
    return state;
  }
  const parentNode = getNode(state, node.parentId);
  const newData = removeProp(state.data, nodeId);
  newData[parentNode.id] = {
    ...parentNode,
    children: parentNode.children.filter((childId) => childId !== nodeId),
  };
  return { ...state, data: newData };
};
