import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to
        <Link to="/products"> product's list</Link>
      </p>
    </div>
  );
};
export default Home;
