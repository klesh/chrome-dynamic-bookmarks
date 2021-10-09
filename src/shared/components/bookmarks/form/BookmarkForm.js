import { Field, Form,Formik } from "formik";
import { TextField } from "formik-material-ui";
import PropTypes from "prop-types";
import React from "react";

import { SubmitButton } from "@/shared/components/helpers";

import BookmarkSchema from "./BookmarkSchema";

export default function BookmarkForm(props) {
  const { initialValues, handleSubmit } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookmarkSchema}
      onSubmit={handleSubmit}
      render={({ isSubmitting, submitForm }) => (
        <Form>
          <Field
            type="text"
            name="title"
            label="Title"
            margin="normal"
            fullWidth
            component={TextField}
          />
          <Field
            type="url"
            name="url"
            label="Url"
            margin="normal"
            fullWidth
            component={TextField}
          />
          <Field
            type="text"
            name="regExp"
            label="Regular Expression"
            margin="normal"
            fullWidth
            component={TextField}
          />
          <SubmitButton disabled={isSubmitting} onClick={submitForm} />
        </Form>
      )}
    />
  );
}

BookmarkForm.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    regExp: PropTypes.string,
  }),
  handleSubmit: PropTypes.func.isRequired,
};
