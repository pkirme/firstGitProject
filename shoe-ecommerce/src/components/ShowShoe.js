import { useContext, Fragment } from "react";
import ShoeContext from "../context/ShoeContext";
import CartContext from "../context/CartContext";

const ShowShoe = () => {
  const shoeCtx = useContext(ShoeContext);
  const cartCtx = useContext(CartContext);

  const onDecrementQuantityHandler = (id, size) => {
    shoeCtx.decrementQuantity(id, size);
  };

  const onAddToCartHandler = (item) => {
    const addList = {
      id: item.id,
      name: item.shoeName,
      price: item.price,
      amount: 1,
    };
    cartCtx.addToCart(addList);
  };
  return (
    <>
      <ul>
        {shoeCtx.data.map((shoe) => {
          return (
            <Fragment key={shoe.id}>
              <li>
                {shoe.id}--{shoe.shoeName}--{shoe.description}--{shoe.price}
                {shoe.large === 0 ? (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    disabled
                  >
                    Large({shoe.large})
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      onDecrementQuantityHandler(shoe.id, shoe.large);
                      onAddToCartHandler(shoe);
                    }}
                  >
                    Large({shoe.large})
                  </button>
                )}
                {shoe.medium === 0 ? (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    disabled
                  >
                    Medium({shoe.medium})
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      onDecrementQuantityHandler(shoe.id, shoe.medium);
                      onAddToCartHandler(shoe);
                    }}
                  >
                    Medium({shoe.medium})
                  </button>
                )}
                {shoe.small === 0 ? (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    disabled
                  >
                    Small({shoe.small})
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      onDecrementQuantityHandler(shoe.id, shoe.small);
                      onAddToCartHandler(shoe);
                    }}
                  >
                    Small({shoe.small})
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

export default ShowShoe;
