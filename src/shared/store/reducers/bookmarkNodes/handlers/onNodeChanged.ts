import {
  ActionHandler,
  BookmarkNodesAction,
  BookmarkNodesState,
} from "@/shared/types";

import { getNode } from "./getNode";

export const onNodeChanged: ActionHandler<
  BookmarkNodesState,
  BookmarkNodesAction
> = (state, { data }) => {
  if (!data) return state;

  const nodeId = data.id;
  const node = getNode(state, nodeId);
  return {
    ...state,
    data: {
      ...state.data,
      [nodeId]: {
        ...node,
        ...data,
      },
    },
  };
};
