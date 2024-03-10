import React, { useState, useContext } from "react";
import ShoeContext from "../context/ShoeContext";

const AddShoe = () => {
  const shoeCtx = useContext(ShoeContext);
  const [id, setShoeId] = useState("");
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [large, setLarge] = useState("");
  const [medium, setMedium] = useState("");
  const [small, setSmall] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newList = {
      id: id,
      shoeName: shoeName,
      description: description,
      price: price,
      large: large,
      medium: medium,
      small: small,
    };

    shoeCtx.addShoe(newList);

    setShoeId("");
    setShoeName("");
    setDescription("");
    setPrice("");
    setLarge("");
    setMedium("");
    setSmall("");
  };
  
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="shoeId" className="form-label">
          Shoe Id
        </label>
        <input
          type="text"
          className="form-control"
          id="shoeId"
          value={id}
          onChange={(e) => setShoeId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="shoeName" className="form-label">
          Shoe Name
        </label>
        <input
          type="text"
          className="form-control"
          id="shoeName"
          value={shoeName}
          onChange={(e) => setShoeName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <p>Quantity : </p>
        <label htmlFor="larg" className="form-label">
          Large
        </label>
        <input
          type="number"
          className="form-control"
          id="larg"
          value={large}
          onChange={(e) => setLarge(e.target.value)}
        />

        <label htmlFor="medium" className="form-label">
          Medium
        </label>
        <input
          type="number"
          className="form-control"
          id="medium"
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
        />

        <label htmlFor="small" className="form-label">
          Small
        </label>
        <input
          type="number"
          className="form-control"
          id="small"
          value={small}
          onChange={(e) => setSmall(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddShoe;
