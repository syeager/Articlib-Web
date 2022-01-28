import { Articlib } from "@/generated/ArticlibClient";
import { User } from "@/Users/Models/User";
import { Moment } from "moment";

export class Article {
  public readonly id: string;
  public readonly url: string;
  public readonly poster: User;
  public readonly voteCount: number;
  public readonly postedDate: Moment;

  constructor(
    id: string,
    url: string,
    poster: User,
    voteCount: number,
    postedDate: Moment
  ) {
    this.id = id;
    this.url = url;
    this.poster = poster;
    this.voteCount = voteCount;
    this.postedDate = postedDate;
  }
}

export function createArticle(dto: Articlib.ArticleDto, user: User): Article {
  const article = new Article(
    dto.id,
    dto.url,
    user,
    dto.voteCount,
    dto.postedDate
  );
  return article;
}
