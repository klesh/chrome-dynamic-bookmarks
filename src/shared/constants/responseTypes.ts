import type { MessageResponseType } from "shared/types";

export const SUCCESS = "success";
export const ERROR = "error";

export default {
  SUCCESS,
  ERROR,
} as Record<string, MessageResponseType>;
