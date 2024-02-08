import React, { useState} from "react";
import { useMedicine } from "../../contexts";

const MedicineForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const {addMedicine}=useMedicine();
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addMedicine({name,description,price,quantity});
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Medicine Name:</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label>Price:</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label>Quantity:</label>
        <input
          type="number"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <button type="submit">Add Medicine</button>
      </form>
    </>
  );
};
export default MedicineForm;
