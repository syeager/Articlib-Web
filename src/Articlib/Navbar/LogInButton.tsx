import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { LogInForm } from "../Account/Components/LogInForm";

export function LogInButton(): JSX.Element {
  const [showingModal, setShowingModal] = useState(false);

  const onClick = () => {
    setShowingModal(!showingModal);
  };

  return (
    <>
      <Button onClick={onClick}>Log In</Button>

      <Modal show={showingModal} onHide={() => setShowingModal(false)}>
        <Modal.Header>Log In</Modal.Header>
        <Modal.Body>
          <LogInForm onSubmit={(v) => console.log(v)} />
        </Modal.Body>
      </Modal>
    </>
  );
}
