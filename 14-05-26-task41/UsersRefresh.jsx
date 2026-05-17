import { useCallback, useEffect, useState } from "react";

export default function UsersRefresh() {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <button onClick={fetchUsers}>Refresh</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}