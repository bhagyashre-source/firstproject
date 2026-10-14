import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  return <h2>Welcome, {user}!</h2>;
}