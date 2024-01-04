
import ProductData from "./ProductData";
const Products = (props) => {
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  const filterData = props.data.filter((item) => props.id === item.category);

  //filter data according to condition.
  let ProductContent=<p>Product not found!!!</p>
  if(filterData.length>0){
    ProductContent=filterData.map((item) => (
      <ProductData
        key={item.id}
        id={item.id}
        product={item.product}
        price={item.price}
        onDelete={onDeleteHandler}
      ></ProductData>
    ))
  }

  return (
    <>
      {ProductContent}
    </>
  );
};
export default Products;
