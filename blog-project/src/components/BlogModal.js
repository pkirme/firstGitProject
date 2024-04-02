import { useRef, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import BlogContext from "../context/BlogContext";

const BlogModal = (props) => {
  const imageUrlInputRef = useRef();
  const titleInputRef = useRef();
  const descInputRef = useRef();
  const blogCtx = useContext(BlogContext);

  const addBlogHandler = () => {
    if (
      imageUrlInputRef.current.value.length === 0 ||
      titleInputRef.current.value.length === 0 ||
      descInputRef.current.value.length === 0
    ) {
      alert("One of field is empty!!");
    } else {
      const blog = {
        id: Date.now(),
        imageUrl: imageUrlInputRef.current.value,
        title: titleInputRef.current.value,
        description: descInputRef.current.value,
      };
      blogCtx.addBlog(blog);
      props.handleClose();
      imageUrlInputRef.current.value = "";
      titleInputRef.current.value = "";
      descInputRef.current.value = "";
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.value === "add" ? "Post Blog" : "Update Blog"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>ImageUrl</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              ref={imageUrlInputRef}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              ref={titleInputRef}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="decription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog description"
              ref={descInputRef}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={addBlogHandler}>
          {props.value === "add" ? "Post Blog" : "Update Blog"}
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BlogModal;
