const ProductData = (props) => {
    const deleteItemHandler = () => {
      props.onDelete(props.id);
    };
  
    return (
      <>
        <ul>
          <li>
            {props.product} - RS.{props.price}
            <button onClick={deleteItemHandler}>Cancel Order</button>
          </li>
        </ul>
      </>
    );
  };
  export default ProductData;
  