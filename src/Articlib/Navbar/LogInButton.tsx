import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { LogInCommand } from "../Account/Commands/LogInCommand";
import { LogInForm, LogInValues } from "../Account/Components/LogInForm";

export function LogInButton(): JSX.Element {
  const [showingModal, setShowingModal] = useState(false);

  const onClick = () => setShowingModal(!showingModal);

  const onSubmit = async (values: LogInValues): Promise<void> => {
    // TODO: change to loading
    const success = await LogInCommand(values.email, values.password);
    if (success) {
      setShowingModal(false);
    }
  };

  return (
    <>
      <Button onClick={onClick}>Log In</Button>

      <Modal show={showingModal} onHide={() => setShowingModal(false)}>
        <Modal.Header>Log In</Modal.Header>
        <Modal.Body>
          <LogInForm onSubmit={onSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
}
