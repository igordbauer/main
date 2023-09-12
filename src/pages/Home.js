import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to
        <Link to="products"> product's list</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  );
};
export default Home;
