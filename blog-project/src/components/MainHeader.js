import { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import BlogModal from "./BlogModal";

const MainHeader = () => {
  //Blog Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      bg="dark"
      expand="sm"
      variant="dark"
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-4"
    >
      <Container>
        <Navbar.Brand>Blog</Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Button className="mx-2" onClick={handleShow} variant="success">
            Add Blog
          </Button>

          <BlogModal show={show} handleClose={handleClose} status="add" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
