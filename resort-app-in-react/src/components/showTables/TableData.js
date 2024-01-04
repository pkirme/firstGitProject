const TableData = (props) => {
  const deleteItemHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <>
      <ul>
        <li>
          {props.dish} - RS.{props.price}
          <button onClick={deleteItemHandler}>Cancel Order</button>
        </li>
      </ul>
    </>
  );
};
export default TableData;
