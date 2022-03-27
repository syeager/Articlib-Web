import { Button, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { PostArticleCommand } from "@Articles/Commands";
import { useState } from "react";

type FormValues = {
  url: string;
};

export function ArticlePostForm(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    await PostArticleCommand(data.url);
    setIsLoading(false);
    alert("Article posted!");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Article URL</Form.Label>
        <Form.Control
          placeholder="https://www.someblog.com/articleABC"
          type="url"
          {...register("url")}
        />
      </Form.Group>
      <Button type="submit" variant="primary" disabled={isLoading}>
        Post
      </Button>
    </Form>
  );
}
