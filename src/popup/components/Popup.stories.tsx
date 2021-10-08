import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";

import { Popup } from "./Popup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "popup/components/Popup",
  component: Popup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Popup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popup> = () => <Popup />;

export const Example = Template.bind({});
