import { Button } from "react-bootstrap";
import { logOut } from "../Account/Stores/AccountStore";

export function LogOutButton(): JSX.Element {
  return (
    <Button onClick={logOut} variant="outline-primary">
      Log Out
    </Button>
  );
}
