import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyData = [
  {
    id: "1",
    title: "product1",
    price: 100,
    description: "This is a first product - amazing!",
  },
  {
    id: "2",
    title: "product2",
    price: 200,
    description: "This is a second product - amazing!",
  },
  {
    id: "3",
    title: "product3",
    price: 300,
    description: "This is a third product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
