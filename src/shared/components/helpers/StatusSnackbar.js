import { withSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

export function StatusSnackbar({ enqueueSnackbar }) {
  const alert = useSelector((state) => state.alert);

  React.useEffect(() => {
    if (alert.message && alert.type) {
      enqueueSnackbar(alert.message, { variant: alert.type });
    }
  }, [alert]);

  return <div style={{ display: "none" }} />;
}

StatusSnackbar.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withSnackbar(StatusSnackbar);
