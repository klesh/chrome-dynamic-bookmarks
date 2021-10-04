import { CircularProgress, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import React, { useEffect,useState } from "react";

import { BookmarkForm } from "@/shared/components/bookmarks";
import { ADD_BM_NODE } from "@/shared/constants/requestTypes";
import { getCurrentTab,sendMessage } from "@/shared/lib/browser";
import { generateRegExp } from "@/shared/lib/regexp";

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

const AddBookmarkForm = (): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    getCurrentTab(
      (errMsg, { url = "https://www.google.com", title = "New Bookmark" }) => {
        if (errMsg) {
          console.warn(errMsg);
        }
        const regExp = generateRegExp(url);
        setInitialValues({ title, url, regExp });
      }
    );
  }, []);

  const classes = useStyles();

  function handleSubmit(values, actions) {
    sendMessage(ADD_BM_NODE, values, (status) => {
      actions.setSubmitting(false);
      actions.setStatus(status);
      if (enqueueSnackbar) {
        enqueueSnackbar(status.message, { variant: status.type });
      }
    });
  }

  return initialValues ? (
    <Container>
      <BookmarkForm initialValues={initialValues} handleSubmit={handleSubmit} />
    </Container>
  ) : (
    <CircularProgress className={classes.progress} />
  );
};

export default AddBookmarkForm;
