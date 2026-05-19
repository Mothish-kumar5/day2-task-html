import { useState } from "react"; 
//import UsersList from "./UsersList";
//import UsersRefresh from "./UsersRefresh";
//import FilteredUsers from "./FilteredUsers";
//import UsersWithAbort from "./UsersWithAbort";


 
/*function App() {
  return (
    <div>
      <h1>Users</h1>
      <UsersList />
    </div>
  );
} */  

   /*function App() {
  return (
    <div>
      <h1>Users</h1>
      <UsersRefresh />
    </div>
  );
} */ 



/*function App() {
  return <FilteredUsers />;
}
export default App;*/




/*function App() {
  return <UsersWithAbort />;
}
export default App;*/








/*import { useEffect, useState,  useMemo  } from "react";
import UsersStats from "./UsersStats";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return <UsersStats users={users} />;
}

export default App;*/


import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;



 
