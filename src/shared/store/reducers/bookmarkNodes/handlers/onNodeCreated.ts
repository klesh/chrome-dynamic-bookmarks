import { isFolder } from "@/shared/lib/bookmarkNodes";
import {
  ActionHandler,
  BookmarkNodesAction,
  BookmarkNodesState,
} from "@/shared/types";

import { getNode } from "./getNode";
import { onNodeChanged } from "./onNodeChanged";

export const onNodeCreated: ActionHandler<
  BookmarkNodesState,
  BookmarkNodesAction
> = (state, { data }) => {
  if (!data) return state;

  const nodeId = data.id;
  if (nodeId in state.data) {
    return onNodeChanged(state, { data });
  }
  const newNode = { ...data };
  if (isFolder(newNode) && !newNode.children) {
    newNode.children = [];
  }
  const parent = getNode(state, data.parentId);
  return {
    ...state,
    data: {
      ...state.data,
      [parent.id]: {
        ...parent,
        children: [...parent.children, nodeId],
      },
      [nodeId]: newNode,
    },
  };
};
