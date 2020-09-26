import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./component/Header/Header";
import ShrinkUrlForm from "./component/ShrinkUrlForm/ShrinkUrlForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import URLTable from "./component/URLTable/URLTable";
import Loader from "./component/Loader/Loader";
import Toaster from "./component/Toast";

function App() {
  const [refreshTable, setRefreshTable] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showToaster, setShowToaster] = useState("");

  const handleTableRefresh = (value) => {
    setRefreshTable(value);
  };

  const setLoader = (value) => {
    setShowLoader(value);
  };

  const setToaster = (urlCopied) => {
    setShowToaster(urlCopied);
  };

  return (
    <div className="App">
      <Header />
      <Toaster toasterValue={showToaster} />
      {showLoader ? <Loader /> : null}
      <Container style={{ visibility: showLoader ? "hidden" : "visible" }}>
        <Row className="mt-5">
          <Col md={2}></Col>
          <Col md={8}>
            <ShrinkUrlForm
              setLoader={setLoader}
              afterTableRefresh={handleTableRefresh}
            />
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="mt-5">
          <Col md={2}></Col>
          <Col md={8}>
            <URLTable
              setLoader={setLoader}
              setToaster={setToaster}
              performTableRefresh={refreshTable}
              afterTableRefresh={handleTableRefresh}
            />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
