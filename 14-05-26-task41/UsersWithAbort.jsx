import { useEffect, useState } from "react";

 function UsersWithAbort() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted (cleanup ran)");
        }
      }
    };

    fetchUsers();

    return () => {
      controller.abort(); // cleanup runs on unmount / re-render
    };
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default UsersWithAbort;