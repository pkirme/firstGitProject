import { useContext, Fragment} from "react";
import ShoeContext from "../context/ShoeContext";
import CartContext from "../context/CartContext";

const ShowShoe = () => {
  // const [large, setLarge] = useState(0);
  // const [medium, setMedium] = useState(0);
  // const [small, setSmall] = useState(0);

  const shoeCtx = useContext(ShoeContext);
  const cartCtx = useContext(CartContext);

  const onDecrementQuantityHandler = (id, size) => {
    shoeCtx.decrementQuantity(id, size);
  };

  const onAddToCartHandler = (item, size) => {
    console.log(size);
    let large = 0;
    let medium = 0;
    let small = 0;
    if (size === "large") {
      large = 1;
    }
    if (size === "medium") {
      medium = 1;
    }
    if (size === "small") {
      small = 1;
    }
    const addList = {
      id: item.id,
      name: item.shoeName,
      price: item.price,
      large: large,
      medium: medium,
      small: small,
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
                <strong>Name :</strong>
                {shoe.shoeName}||
                <strong>Description :</strong>
                {shoe.description}||
                <strong>Price :</strong>
                {shoe.price}
                {shoe.large === 0 ? (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    disabled
                  >
                    Out of stock
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      onDecrementQuantityHandler(shoe.id, "large");
                      onAddToCartHandler(shoe, "large");
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
                    Out of stock
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      onDecrementQuantityHandler(shoe.id, "medium");
                      onAddToCartHandler(shoe, "medium");
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
                    Out of stock
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      onDecrementQuantityHandler(shoe.id, "small");
                      onAddToCartHandler(shoe, "small");
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
