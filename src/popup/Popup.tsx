import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AddBookmarkForm from "./AddBookmarkForm";
import { CssBaseline, Box } from "@material-ui/core";
import { TabPanel } from "shared/components/helpers";

export default function Popup(): JSX.Element {
  const [value, setValue] = useState(0);

  function handleChange(_event, newValue) {
    setValue(newValue);
  }

  return (
    <Box>
      <CssBaseline />
      <NavTabs value={value} onChange={handleChange}></NavTabs>
      <TabPanel value={value} index={0}>
        <AddBookmarkForm />
      </TabPanel>
    </Box>
  );
}
