import ProductForm from "./ProductForm";


const NewProduct = (props) => {
  const onSaveProductHandler = (data) => {
    
    const addNewProduct= {...data };
    localStorage.setItem(addNewProduct.id,JSON.stringify(addNewProduct));
    props.onAddProduct(addNewProduct);
  };
  return (
    <>
      <ProductForm onSaveProduct={onSaveProductHandler}/>
    </>
  );
};
export default NewProduct;
