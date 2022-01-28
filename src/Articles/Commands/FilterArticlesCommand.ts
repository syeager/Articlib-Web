import { Article, createArticle } from "../Models/Article";
import { FilterArticlesRequest } from "../Requests/FilterArticlesRequest";
import { RequestManager } from "../../Articlib/ArticlibRequestManager";
import { Articlib } from "../../generated/ArticlibClient";
import { BatchGetUsersRequest } from "../../Users/Requests/BatchGetUsersRequest";
import { User } from "../../Users/Models/User";

const { ApiResponseOfPageResponseOfArticleDto, ApiResponseOfListOfUserDto } = {
  ...Articlib,
};

export async function FilterArticlesCommand(): Promise<Article[]> {
  const articlesRequest = new FilterArticlesRequest();
  const articlesResponse = await RequestManager.send(articlesRequest);

  if (!(articlesResponse instanceof ApiResponseOfPageResponseOfArticleDto)) {
    throw console.error(articlesResponse?.message);
  }

  const articleDtos = articlesResponse.obj?.results;
  if (!articleDtos) {
    throw console.error("Missing articles");
  }

  const userIds = articleDtos.map((a) => a.posterId);
  const batchUsersRequest = new BatchGetUsersRequest(userIds);
  const userResponse = await RequestManager.send(batchUsersRequest);

  if (!(userResponse instanceof ApiResponseOfListOfUserDto)) {
    throw console.error(userResponse?.message);
  }

  const users: Record<string, User> = {};
  userResponse.obj?.forEach((u) => {
    if (u) {
      users[u.id] = new User(u.id, u.name);
    }
  });

  const articles = articleDtos.map((a) => createArticle(a, users[a.posterId]));
  return articles;
}
