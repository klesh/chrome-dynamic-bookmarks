import { Dialog, DialogContent,DialogTitle } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { addBookmarkNode,filterSelector } from "@/shared/store";

import { BookmarkForm } from "../form";

function AddBookmarkDialog(props) {
  const { onClose, open, parentId, onSubmit } = props;

  function handleClose() {
    onClose();
  }

  function handleSubmit(values) {
    onSubmit({ ...values, parentId });
    handleClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="add-bookmark-dialog-title"
      open={open}
      fullWidth={true}
    >
      <DialogTitle id="add-bookmark-dialog-title">Add bookmark</DialogTitle>
      <DialogContent dividers>
        <BookmarkForm handleSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}

AddBookmarkDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const filter = filterSelector(state) || {};
  return {
    parentId: filter.parentId,
  };
}

export default connect(mapStateToProps, { onSubmit: addBookmarkNode })(
  AddBookmarkDialog
);
