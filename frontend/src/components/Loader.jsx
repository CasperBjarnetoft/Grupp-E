import React from "react";
// import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
