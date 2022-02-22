import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type Props = {
  onSubmit: (values: LogInValues) => void;
};

export type LogInValues = {
  email: string;
  password: string;
};

export function LogInForm(props: Props): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.MouseEvent): void => {
    e.stopPropagation();
    props.onSubmit({ email, password });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="coolcoder@hacker.net"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="G00dPA$$w0rd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button onClick={onSubmit} type="submit" variant="primary">
        Log In
      </Button>
    </Form>
  );
}
