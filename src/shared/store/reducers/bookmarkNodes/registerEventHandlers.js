import events from "@/shared/constants/events";

import { onNodeChanged } from "./handlers/onNodeChanged";
import { onNodeCreated } from "./handlers/onNodeCreated";
import { onNodeMoved } from "./handlers/onNodeMoved";
import { onNodeRemoved } from "./handlers/onNodeRemoved";

export default function registerEventHandlers(factory) {
  factory.register(events.BM_NODE_MOVED, onNodeMoved);
  factory.register(events.BM_NODE_REMOVED, onNodeRemoved);
  factory.register(events.BM_NODE_CHANGED, onNodeChanged);
  factory.register(events.BM_NODE_CREATED, onNodeCreated);
}
