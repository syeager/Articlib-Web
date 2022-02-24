import { Container, Nav, Navbar as BootStrapNavbar } from "react-bootstrap";
import { getUser } from "../Account/Stores/AccountStore";
import { User } from "@Users/Models/User";
import { LogInButton } from "./LogInButton";
import { LogOutButton } from "./LogOutButton";

export function Navbar(): JSX.Element {
  const user = getUser();
  const profileArea = user ? drawUser(user) : <LogInButton />;

  return (
    <BootStrapNavbar bg="light">
      <Container>
        <BootStrapNavbar.Brand href="/">Articlib</BootStrapNavbar.Brand>
        {profileArea}
      </Container>
    </BootStrapNavbar>
  );
}

function drawUser(user: User): JSX.Element {
  return (
    <>
      <Nav.Link href="#">{user.username}</Nav.Link>
      <LogOutButton />
    </>
  );
}
