import { Dispatch } from "redux";

import { actionTypes } from "@/shared/constants";
import { FilterAction } from "@/shared/types";

export function applyFilter(filter: FilterAction["filter"] = {}) {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.APPLY_FILTER, filter });
    dispatch({ type: actionTypes.CLEAR_SELECTED });
  };
}

export function openFolder(folderId: string) {
  return applyFilter({ parentId: folderId });
}

export function filterAllByText(searchText: string) {
  return applyFilter({ searchText });
}
