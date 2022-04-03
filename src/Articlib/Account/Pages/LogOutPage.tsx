import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { logOut } from "../Stores/AccountStore";

export function LogOutPage(): JSX.Element {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    logOut();
    setIsLoggedOut(true);
  }, []);

  if (isLoggedOut) {
    alert("You have been successfully logged out. Bye 🙋‍♀️");
    return <Navigate to="/" />;
  }

  return <div>Logging you out...</div>;
}
