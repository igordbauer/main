import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "product 1" },
  { id: "p2", title: "product 2" },
  { id: "p3", title: "product 3" },
];

const Product = () => {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        {PRODUCTS.map((e) => (
          <li key={e.id}>
            <Link to={`${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Product;
