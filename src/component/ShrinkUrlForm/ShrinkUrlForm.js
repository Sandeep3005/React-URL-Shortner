import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, InputGroup, Button } from "react-bootstrap";
import CONSTANTS from "./../../constants";

const ShrinkUrlForm = ({ afterTableRefresh, setLoader }) => {
  const { register, handleSubmit, errors } = useForm();

  const [fullUrlValue, setFullUrlValue] = useState("");

  const saveData = async (fullUrl) => {
    const res = await fetch(CONSTANTS.SAVE_RECORD_URL, {
      method: CONSTANTS.POST_REQUEST_TYPE,
      headers: CONSTANTS.POST_HEADER,
      body: JSON.stringify({ fullUrl }),
    });
    res.json().then(() => {
      afterTableRefresh(true);
      setFullUrlValue("");
      setLoader(false);
    });
  };

  const isValidUrl = (url) => {
    let valid = true;
    try {
      new URL(url);
    } catch (_) {
      valid = false;
    }
    return valid;
  };

  const onSubmit = (data) => {
    setLoader(true);
    saveData(data.urlToShrink);
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFullUrlValue(value);
  };

  return (
    <>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Form.Control
            type="text"
            name="urlToShrink"
            value={fullUrlValue}
            isInvalid={!!errors.urlToShrink}
            ref={register({ required: true, validate: isValidUrl })}
            onChange={handleChange}
            placeholder="URL to shrink"
            aria-label="URL to shrink"
          />
          <InputGroup.Append>
            <Button type="submit" variant="outline-primary">
              Shrink Me
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        <small className="text-danger">
          {errors.urlToShrink &&
            errors.urlToShrink.type === "required" &&
            "Your input is required"}
          {errors.urlToShrink &&
            errors.urlToShrink.type === "validate" &&
            "Invalid URL provided"}
        </small>
      </Form>
    </>
  );
};

export default ShrinkUrlForm;
