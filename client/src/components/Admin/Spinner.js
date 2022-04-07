import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

const Spinner = () => {
  return (
    <MDBSpinner
      className="me-2"
      style={{
        marginTop: "50px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </MDBSpinner>
  );
};

export default Spinner;
