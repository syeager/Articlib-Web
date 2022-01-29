import { Card } from "react-bootstrap";
import { Article } from "../Models/Article";

type Props = {
  article: Article;
};

export function ArticleView(props: Props): JSX.Element {
  const article = props.article;

  return (
    <Card>
      {renderHeader(article)}
      {renderBody(article)}
      {renderFooter(article)}
    </Card>
  );
}

function renderHeader(article: Article): JSX.Element {
  return <Card.Header>Likes: {article.voteCount}</Card.Header>;
}

function renderBody(article: Article): JSX.Element {
  return (
    <Card.Body>
      {article.id}
      <a href={article.url} className="btn btn-info" role="button">
        Read
      </a>
    </Card.Body>
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
