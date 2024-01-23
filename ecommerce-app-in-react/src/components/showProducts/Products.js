import ProductData from "./ProductData";
const Products = (props) => {
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  //const filterData = props.data.filter((item) => props.category === item.category);

  //filter data according to condition.
  // let ProductContent = <p>Product not found!!!</p>;
  // if (props.data.length > 0) {
  //   ProductContent = props.data.map((item) => (
  //     <ProductData
  //       key={item.id}
  //       id={item.id}
  //       product={item.product}
  //       price={item.price}
  //       onDelete={onDeleteHandler}
  //     ></ProductData>
  //   ));
  // }

  return (
    <>
      {props.data.map((item) => (
        <ProductData
          key={item.id}
          id={item.id}
          product={item.product}
          price={item.price}
          onDelete={onDeleteHandler}
        ></ProductData>
      ))}
    </>
  );
};
export default Products;
