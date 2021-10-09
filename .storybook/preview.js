import { muiTheme } from "storybook-addon-material-ui";
import { notification, baseline } from "./decorators";
import { getTheme } from "@/shared/theme";
import "./mocks/browser";

export const decorators = [
  muiTheme([getTheme("dark"), getTheme("light")]),
  baseline(),
  notification(),
].reverse();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
