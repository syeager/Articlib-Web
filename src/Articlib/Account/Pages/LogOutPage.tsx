import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { logOut } from "../Stores/AccountStore";

export function LogOutPage(): JSX.Element {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    logOut();
    setIsLoggedOut(true);
  }, []);

  return isLoggedOut ? <Navigate to="/" /> : <div>Bye 🙋‍♀️</div>;
}
