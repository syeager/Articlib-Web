import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { PostArticleCommand } from "@Articles/Commands";

type FormValues = {
  url: string;
};

enum State {
  Input,
  Submitting,
  Complete,
}

export function ArticlePostForm(): JSX.Element {
  const [state, setState] = useState(State.Input);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setState(State.Submitting);
    await PostArticleCommand(data.url);
    alert("Article has been posted! Thanks for sharing 😁");
    setState(State.Complete);
  };

  return state == State.Complete ? (
    <Navigate to="/" />
  ) : (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Article URL</Form.Label>
        <Form.Control
          placeholder="https://www.someblog.com/articleABC"
          type="url"
          {...register("url")}
        />
      </Form.Group>
      <Button
        type="submit"
        variant="primary"
        disabled={state == State.Submitting}
      >
        Post
      </Button>
    </Form>
  );
}
