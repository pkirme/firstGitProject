import { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import BlogContext from "../context/BlogContext";

const BlogModal = (props) => {
  const [imgUrl, setImgUrl] = useState(
    props.status === "update" ? props.url : ""
  );
  const [title, setTitle] = useState(
    props.status === "update" ? props.title : ""
  );
  const [desc, setDesc] = useState(props.status === "update" ? props.desc : "");

  const blogCtx = useContext(BlogContext);

  const addBlogHandler = () => {
    if (imgUrl.length === 0 || title.length === 0 || desc.length === 0) {
      alert("One of field is empty!!");
    } else {
      const blog = {
        id: Date.now().toString(),
        imageUrl: imgUrl,
        title: title,
        description: desc,
      };
      blogCtx.addBlog(blog);
      props.handleClose();
      setImgUrl("");
      setTitle("");
      setDesc("");
    }
  };

  const updateBlogHandler = () => {
    if (imgUrl.length === 0 || title.length === 0 || desc.length === 0) {
      alert("One of field is empty!!");
    } else {
      const blog = {
        id:props.id,
        imageUrl: imgUrl,
        title: title,
        description: desc,
      };
      blogCtx.updateBlog(blog);
      // props.handleClose();
      // setImgUrl("");
      // setTitle("");
      // setDesc("");
    }
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
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="decription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={props.status === "add" ? addBlogHandler : updateBlogHandler}
        >
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
