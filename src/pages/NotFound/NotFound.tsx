import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Ooops, page does not exist</h1>
      <Link to="/">Return home page</Link>
    </>
  );
};
export default NotFound;
