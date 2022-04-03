import { Articlib } from "@Api";
import { getUserRequired } from "@/Articlib/Account/Stores/AccountStore";
import { RequestManager } from "@/Articlib/Requests";
import { PostArticleRequest } from "../Requests/PostArticleRequest";
import { Article, createArticle } from "../Models/Article";

export async function PostArticleCommand(url: string): Promise<Article> {
  const user = getUserRequired();

  const request = new PostArticleRequest(user.id, url);
  const response = await RequestManager.send(request);

  if (
    !(response instanceof Articlib.ApiResponseOfArticleDto) ||
    !response.obj
  ) {
    throw console.error("Could not post article");
  }

  const article = createArticle(response.obj);
  return article;
}
