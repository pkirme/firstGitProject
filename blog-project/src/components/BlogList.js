import React, { useContext, useState, useCallback, useEffect } from "react";
import BlogContext from "../context/BlogContext";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import BlogModal from "./BlogModal";
import axios from "axios";

const BlogList = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (blog) => {
    console.log(blog);
    setSelectedBlog(blog);

    setShow(true);
  };

  const blogCtx = useContext(BlogContext);

  const url = `https://crudcrud.com/api/f15ebec3d7134d2680a13f5789e2489a/Blogs`;

  const fetchDataHandler = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      blogCtx.setBlogs(data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const onRemoveHandler = (id) => {
    blogCtx.removeBlog(id);
  };
  return (
    <Container className="mt-5">
      <Row className="g-4 mt-10">
        {blogCtx.blogList.map((item) => (
          <Col md={3} key={item.id}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body style={{ backgroundColor: "#EEE9DD" }}>
                <Container>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Title>{item.description}</Card.Title>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mx-2"
                    onClick={() => handleShow(item)}
                  >
                    Update
                  </Button>
                  <BlogModal
                    show={show}
                    handleClose={handleClose}
                    status="update"
                    id={selectedBlog?.id}
                    url={selectedBlog?.imageUrl}
                    title={selectedBlog?.title}
                    desc={selectedBlog?.description}
                  />

                  <Button
                    variant="danger"
                    type="submit"
                    onClick={() => {
                      onRemoveHandler(item._id);
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
