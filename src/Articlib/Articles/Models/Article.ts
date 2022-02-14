import { Articlib } from "@/generated/ArticlibClient";
import { Moment } from "moment";

export class Article {
  public readonly id: string;
  public readonly url: string;
  public readonly voteCount: number;
  public readonly postedCount: number;
  public readonly lastPostedDate: Moment;

  constructor(
    id: string,
    url: string,
    voteCount: number,
    postedCount: number,
    lastPostedDate: Moment
  ) {
    this.id = id;
    this.url = url;
    this.voteCount = voteCount;
    this.postedCount = postedCount;
    this.lastPostedDate = lastPostedDate;
  }
}

export function createArticle(dto: Articlib.ArticleDto): Article {
  const article = new Article(
    dto.id,
    dto.url,
    dto.voteCount,
    dto.postedCount,
    dto.lastPostedDate
  );
  return article;
}
