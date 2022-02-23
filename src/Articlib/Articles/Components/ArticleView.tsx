import { Badge, Button, Card } from "react-bootstrap";
import { Article } from "@Articles/Models/Article";
import moment from "moment";
import { LikeButton } from "@/Articlib/Components/LikeButton";
import {
  Direction,
  LikeArticleCommand,
} from "@Articles/Commands/LikeArticleCommand";
import { useState } from "react";
import { EyeFill, HandThumbsUpFill, Mailbox } from "react-bootstrap-icons";
import "./ArticleView.css";

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
    <div className="article">
      <div className="article-header">
        <span>Some title goes here</span>
        <div className="article-header-stats">
          <div>
            <span>76</span>
            <EyeFill />
          </div>
          <div>
            <span>44</span>
            <Button>
              <HandThumbsUpFill />
            </Button>
          </div>
        </div>
      </div>
      <div className="article-body">
        <div className="article-body-tags">
          <Badge>dotnet (12)</Badge>
          <Badge>security (10)</Badge>
          <Badge>linux (8)</Badge>
        </div>
        <div
          className="article-body-image"
          style={{
            backgroundImage:
              "url(https://static.heroesofthestorm.com/images/global/fb-share-1fcc54becc.jpg)",
          }}
        />
      </div>
      <div className="article-footer">
        <span>somecoderblog</span>
        <div className="article-footer-stats">
          <span>{postedDate}</span>
          <span>
            3<Mailbox />
          </span>
        </div>
      </div>
    </div>
  );
}

function calculatePostedDate(article: Article): string {
  const diff = moment.duration(article.lastPostedDate.diff(moment.utc()));

  let postedDate = "";
  if (diff.asMinutes() < 60) {
    postedDate = `${diff.minutes()} minute(s) ago`;
  } else if (diff.asHours() < 24) {
    postedDate = `${diff.hours()} hour(s) ago`;
  } else {
    postedDate = `on ${article.lastPostedDate.toLocaleString()}`;
  }

  return postedDate;
}
