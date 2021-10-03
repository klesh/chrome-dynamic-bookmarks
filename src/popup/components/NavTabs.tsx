import React from "react";
import { AppBar, Tabs } from "@material-ui/core";
import { LinkTab } from "@/shared/components/helpers";
import type { GenericFunction } from "@/shared/types";

function a11yProps(index: string | number) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

interface Props {
  value: number;
  onChange?: GenericFunction;
}

const NavTabs = ({ value, onChange }: Props): JSX.Element => {
  return (
    <AppBar position="static">
      <Tabs
        variant="scrollable"
        scrollButtons="on"
        value={value}
        onChange={onChange}
        aria-label="Navigation Tabs"
        indicatorColor="primary"
      >
        <LinkTab label="Add Bookmark" {...a11yProps(0)} />
        <LinkTab
          label="Open Manager"
          href="bookmarkManager.html"
          target="_blank"
          rel="noopener"
          {...a11yProps(1)}
        />
      </Tabs>
    </AppBar>
  );
};

export default NavTabs;
