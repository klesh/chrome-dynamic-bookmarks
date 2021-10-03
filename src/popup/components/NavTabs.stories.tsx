import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavTabs from "./NavTabs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "popup/components/NavTabs",
  component: NavTabs,
  argTypes: { onChange: { action: "clicked", control: false } },
} as ComponentMeta<typeof NavTabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavTabs> = (args) => (
  <NavTabs {...args} />
);

export const Example = Template.bind({});
Example.args = {
  value: 0,
};
