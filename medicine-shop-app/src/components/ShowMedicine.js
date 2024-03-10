import React, { Fragment, useContext } from "react";
import MedicineContext from "../context/MedicineContext";
import CartContext from "../context/CartContext";

const ShowMedicine = () => {
  const medCtx = useContext(MedicineContext);
  const cartCtx = useContext(CartContext);
  const onDecrementQuantityHandler = (id) => {
    medCtx.decrementQuantity(id);
    // console.log(medCtx.data);
  };

  const onAddToCartHandler = (cartItem) => {
    const item = {
      id: cartItem.id,
      name: cartItem.medicineName,
      price: cartItem.price,
      amount: 1,
    };
    cartCtx.addToCart(item);
  };

  return (
    <>
      <ul>
        {medCtx.data.map((medicine) => {
          return (
            <Fragment key={medicine.id}>
              <li>
                {medicine.id}--{medicine.medicineName}--{medicine.description}--
                {medicine.quantity}--{medicine.price}
                {medicine.quantity === 0 ? (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    disabled
                  >
                    Add
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      onDecrementQuantityHandler(medicine.id);
                      onAddToCartHandler(medicine);
                    }}
                  >
                    Add
                  </button>
                )}
              </li>
              <br />
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default ShowMedicine;
