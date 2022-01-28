import { Card } from "react-bootstrap";
import { Article } from "../Models/Article";

type Props = {
  article: Article;
};

export function ArticleView(props: Props): JSX.Element {
  const article = props.article;

  return (
    <Card>
      <Card.Header>{article.id}</Card.Header>
      <Card.Body>
        <a href={article.url} className="btn btn-info" role="button">
          Read
        </a>
      </Card.Body>
      {renderFooter(article)}
    </Card>
  );
}

function renderFooter(article: Article): JSX.Element {
  return (
    <Card.Footer>
      Posted by {article.poster.username} on{" "}
      {article.postedDate.toLocaleString()}
    </Card.Footer>
  );
}
