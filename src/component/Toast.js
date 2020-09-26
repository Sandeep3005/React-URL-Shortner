import React, { useState, useEffect } from "react";
import { Toast } from "react-bootstrap";

const Toaster = ({ toasterValue }) => {
  const [showToaster, setShowToaster] = useState(false);

  useEffect(() => {
    setShowToaster(Boolean(toasterValue));
  }, [toasterValue]);
  const toggleShowToaster = () => setShowToaster(!showToaster);

  return (
    <Toast delay={2000} autohide show={showToaster} onClose={toggleShowToaster}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Short Url</strong>
      </Toast.Header>
      <Toast.Body>Short URL Copied succesfully.</Toast.Body>
    </Toast>
  );
};

export default Toaster;
