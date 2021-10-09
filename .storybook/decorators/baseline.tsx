{
  /* <CssBaseline /> */
}
import React from "react";
import { DecoratorFunction } from "@storybook/addons";
import { CssBaseline } from "@material-ui/core";

const baseline = (): DecoratorFunction<JSX.Element> => {
  return (story) => {
    const storyItem = story();
    return <CssBaseline>{storyItem}</CssBaseline>;
  };
};

export default baseline;
