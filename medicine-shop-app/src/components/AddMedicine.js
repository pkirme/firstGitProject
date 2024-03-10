import React, { useContext, useState } from "react";
import MedicineContext from "../context/MedicineContext";

const AddMedicine = (props) => {
  const medCtx = useContext(MedicineContext);
  const [id, setMedicineId] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newList = {
      id: id,
      medicineName: medicineName,
      description: description,
      quantity: quantity,
      price: price,
    };
    medCtx.addMedicine(newList);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="medId" className="form-label">
          Medicine Id
        </label>
        <input
          type="text"
          className="form-control"
          id="medId"
          value={id}
          onChange={(e) => setMedicineId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="medName" className="form-label">
          Medicine Name
        </label>
        <input
          type="text"
          className="form-control"
          id="medName"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
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
        <label htmlFor="quantity" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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

      <button type="submit" className="btn btn-primary">
        Add Medicine
      </button>
    </form>
  );
};

export default AddMedicine;
