import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMYDATA = [
  {
    id: 'p1',
    title: 'First book',
    price: 6,
    description: 'this is my first book',
  },
  {
    id: 'p2',
    title: 'Second book',
    price: 8,
    description: 'this is my second book',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYDATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
