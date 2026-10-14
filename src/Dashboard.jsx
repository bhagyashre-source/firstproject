import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Current User: {user}</p>

      <button onClick={() => setUser("rohan")}>
        Change User
      </button>

      <button onClick={() => setUser("shantanu")}>
        Reset User
      </button>
    </div>
  );
}