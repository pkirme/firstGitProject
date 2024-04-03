import { useContext, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import BlogContext from "../context/BlogContext";

const BlogModal = (props) => {
  const [imgUrl, setImgUrl] = useState(props.url);
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  const blogCtx = useContext(BlogContext);

  useEffect(() => {
    // Update state when props change
    setImgUrl(props.url);
    setTitle(props.title);
    setDesc(props.desc);
  }, [props.url, props.title, props.desc]);

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!imgUrl || !title || !desc) {
      alert("Please fill in all fields.");
      return;
    }

    const blog = {
      id: props.id || Date.now().toString(),
      imageUrl: imgUrl,
      title: title,
      description: desc,
    };
    console.log(blog);
    if (props.status === "add") {
      blogCtx.addBlog(blog);
    } else if (props.status === "update") {
      blogCtx.updateBlog(blog);
    }

    props.handleClose();
    setImgUrl("");
    setTitle("");
    setDesc("");
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.status === "add" ? "Post Blog" : "Update Blog"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>ImageUrl</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              value={imgUrl}
              onChange={(e) => handleInputChange(e, setImgUrl)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => handleInputChange(e, setTitle)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="decription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog description"
              value={desc}
              onChange={(e) => handleInputChange(e, setDesc)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSubmit}>
          {props.status === "add" ? "Post Blog" : "Update Blog"}
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BlogModal;
