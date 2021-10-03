import { muiTheme } from "storybook-addon-material-ui";
import { notification } from "./decorators";

export const decorators = [muiTheme(), notification()].reverse();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
