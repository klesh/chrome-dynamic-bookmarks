import React from "react";
import { DecoratorFunction } from "@storybook/addons";
import { SnackbarProvider, SnackbarProviderProps } from "notistack";

type Props = SnackbarProviderProps;

const notification = (options?: Props): DecoratorFunction<JSX.Element> => {
  return (story) => {
    const storyItem = story();
    return (
      <SnackbarProvider
        maxSnack={1}
        dense
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        {...(options || {})}
      >
        {storyItem}
      </SnackbarProvider>
    );
  };
};

export default notification;
