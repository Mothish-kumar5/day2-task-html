import { useMemo } from "react";

export default function UsersStats({ users }) {
  const averageId = useMemo(() => {
    console.log("Calculating expensive value...");

    if (!users.length) return 0;

    const total = users.reduce((sum, u) => sum + u.id, 0);
    return total / users.length;
  }, [users]);

  return <h3>Average User ID: {averageId}</h3>;
}