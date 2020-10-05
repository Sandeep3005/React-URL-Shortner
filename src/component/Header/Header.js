import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <strong>
          <Navbar.Brand href="/">Simple URL Shortner</Navbar.Brand>
        </strong>
      </Navbar>
    </>
  );
};

export default Header;
