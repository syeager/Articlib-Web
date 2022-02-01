import { User } from "../../../Articlib/Users/Models/User";
import { RequestManager } from "../../../Articlib/Requests";
import { Articlib } from "../../../generated/ArticlibClient";
import { Article, createArticle } from "../Models/Article";
import {
  AddLikeArticleRequest,
  RemoveLikeArticleRequest,
} from "../Requests/LikeArticleRequest";

export enum Direction {
  Add = "Add",
  Remove = "Remove",
}

export async function LikeArticleCommand(
  article: Article,
  direction: Direction
): Promise<Article> {
  const userId = "99999999-9999-9999-9999-999999999999";
  const likeRequest =
    direction == Direction.Add
      ? new AddLikeArticleRequest(article.id, userId)
      : new RemoveLikeArticleRequest(article.id, userId);

  const response = await RequestManager.send(likeRequest);
  if (
    !(response instanceof Articlib.ApiResponseOfArticleDto) ||
    !response.obj
  ) {
    throw console.error(`Could not ${direction.toString()} like`);
  }

  // TODO: load user
  const user = new User(userId, "Test User");
  article = createArticle(response.obj, user);
  return article;
}
