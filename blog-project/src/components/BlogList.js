import React, { useContext, useState } from "react";
import BlogContext from "../context/BlogContext";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import BlogModal from "./BlogModal";

const BlogList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const blogCtx = useContext(BlogContext);

  //   const onUpdateHandler = (blog) => {
  //     blogCtx.updateBlog(blog);
  //   };

  const onRemoveHandler = (id) => {
    blogCtx.removeBlog(id);
  };
  return (
    <Container className="mt-5">
      <Row className="g-4">
        {blogCtx.blogList.map((item) => (
          <Col md={3}>
            <Card className="shadow-lg" id={item.id}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body style={{ backgroundColor: "#EEE9DD" }}>
                <Container>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Title>{item.description}</Card.Title>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mx-2"
                    onClick={handleShow}
                  >
                    Update
                  </Button>
                  <BlogModal show={show} handleClose={handleClose} />

                  <Button
                    variant="danger"
                    type="submit"
                    onClick={() => {
                      onRemoveHandler(item.id);
                    }}
                  >
                    Remove
                  </Button>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogList;
