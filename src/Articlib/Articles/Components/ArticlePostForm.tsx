import { Button, Form } from "react-bootstrap";

export function ArticlePostForm(): JSX.Element {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Article URL</Form.Label>
        <Form.Control
          placeholder="https://www.someblog.com/articleABC"
          type="url"
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Post
      </Button>
    </Form>
  );
}
