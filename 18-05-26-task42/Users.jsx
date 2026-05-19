import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h1>Users Page</h1>

      <Link to="/users/1">Alice</Link>
      <br />

      <Link to="/users/2">Bob</Link>
    </div>
  );
}

export default Users;