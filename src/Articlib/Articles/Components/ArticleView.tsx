import { Card } from "react-bootstrap";
import { Article } from "../Models/Article";
import * as moment from "moment";

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
  const diff = moment.duration(moment.utc().diff(article.postedDate));

  let postedDate = "";
  if (diff.asMinutes() < 60) {
    postedDate = `${diff.minutes()} minute(s) ago`;
  } else if (diff.asHours() < 24) {
    postedDate = `${diff.hours()} hour(s) ago`;
  } else {
    postedDate = `on ${article.postedDate.toLocaleString()}`;
  }

  return (
    <Card.Footer>
      Posted by {article.poster.username} {postedDate}
    </Card.Footer>
  );
}
