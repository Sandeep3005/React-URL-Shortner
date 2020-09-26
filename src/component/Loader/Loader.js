import React from "react";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "35vh" }}
    >
      <div
        style={{ width: "8rem", height: "8rem" }}
        className="spinner-border"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
