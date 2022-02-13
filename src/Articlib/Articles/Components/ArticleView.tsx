import { Card } from "react-bootstrap";
import { Article } from "../Models/Article";
import moment from "moment";
import { LikeButton } from "../../Components/LikeButton";
import { Direction, LikeArticleCommand } from "../Commands/LikeArticleCommand";
import { useState } from "react";

type Props = {
  article: Article;
};

export function ArticleView(props: Props): JSX.Element {
  const article = props.article;

  const [voteCount, setVoteCount] = useState(article.voteCount);

  const vote = async (isLiked: boolean) => {
    const direction = isLiked ? Direction.Remove : Direction.Add;
    const updatedArticle = await LikeArticleCommand(article, direction);
    setVoteCount(updatedArticle.voteCount);
  };

  const postedDate = calculatePostedDate(article);

  return (
    <Card>
      <Card.Header>
        <LikeButton isLiked={false} likeCount={voteCount} onClick={vote} />
      </Card.Header>
      <Card.Body>
        {article.id}
        <a href={article.url} className="btn btn-info" role="button">
          Read
        </a>
      </Card.Body>
      <Card.Footer>
        Posted by {article.poster.username} {postedDate}
      </Card.Footer>
    </Card>
  );
}

function calculatePostedDate(article: Article): string {
  const diff = moment.duration(moment.utc().diff(article.postedDate));

  let postedDate = "";
  if (diff.asMinutes() < 60) {
    postedDate = `${diff.minutes()} minute(s) ago`;
  } else if (diff.asHours() < 24) {
    postedDate = `${diff.hours()} hour(s) ago`;
  } else {
    postedDate = `on ${article.postedDate.toLocaleString()}`;
  }

  return postedDate;
}
