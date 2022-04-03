import { RequestManager } from "../../../Articlib/Requests";
import { Articlib } from "@Api";
import { Article, createArticle } from "../Models/Article";
import {
  AddLikeArticleRequest,
  RemoveLikeArticleRequest,
} from "../Requests/LikeArticleRequest";
import { getUserRequired } from "../../Account/Stores/AccountStore";

export enum Direction {
  Add = "Add",
  Remove = "Remove",
}

export async function LikeArticleCommand(
  article: Article,
  direction: Direction
): Promise<Article> {
  const user = getUserRequired();

  const likeRequest =
    direction == Direction.Add
      ? new AddLikeArticleRequest(article.id, user.id)
      : new RemoveLikeArticleRequest(article.id, user.id);

  const response = await RequestManager.send(likeRequest);
  if (
    !(response instanceof Articlib.ApiResponseOfArticleDto) ||
    !response.obj
  ) {
    throw console.error(`Could not ${direction.toString()} like`);
  }

  article = createArticle(response.obj);
  return article;
}
