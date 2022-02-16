import { Container, Navbar as BootStrapNavbar } from "react-bootstrap";
import { LogInButton } from "./LogInButton";

export function Navbar(): JSX.Element {
  return (
    <BootStrapNavbar bg="light">
      <Container>
        <BootStrapNavbar.Brand href="#home">Articlib</BootStrapNavbar.Brand>
        <LogInButton />
      </Container>
    </BootStrapNavbar>
  );
}
