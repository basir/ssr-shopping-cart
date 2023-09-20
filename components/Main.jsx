import Product from './Product';

export default function Main(props) {
  const { cartItems, products, onAdd, onRemove } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            item={cartItems.find((x) => x.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Product>
        ))}
      </div>
    </div>
  );
}
