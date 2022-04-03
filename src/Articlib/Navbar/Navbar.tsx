import {
  Container,
  Nav,
  Navbar as BootStrapNavbar,
  NavDropdown,
} from "react-bootstrap";
import { getUser } from "../Account/Stores/AccountStore";
import { User } from "@Users/Models/User";
import { LogInButton } from "./LogInButton";
import { LinkContainer } from "react-router-bootstrap";

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
      <LinkContainer to="/article/post">
        <Nav.Link>Post Article</Nav.Link>
      </LinkContainer>
      <NavDropdown title={user.username}>
        <NavDropdown.Item href="#">Account</NavDropdown.Item>
        <NavDropdown.Divider />
        <LinkContainer to="/logOut">
          <NavDropdown.Item>Log Out</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
    </>
  );
}
