import type { GenericObject } from "./common.types";

export type MessageResponseType = "success" | "error";

export type MessageResponse = {
  type: MessageResponseType;
  message: string;
  data?: GenericObject;
};
