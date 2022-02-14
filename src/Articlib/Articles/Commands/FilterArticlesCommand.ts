import { Article, createArticle } from "../Models/Article";
import { FilterArticlesRequest } from "../Requests/FilterArticlesRequest";
import { RequestManager } from "../../../Articlib/Requests";
import { Articlib } from "../../../generated/ArticlibClient";
import { PagedItems } from "../../../common/Pagination/PagedItems";

const { ApiResponseOfPageResponseOfArticleDto } = {
  ...Articlib,
};

export async function FilterArticlesCommand(): Promise<PagedItems<Article>> {
  const articlesRequest = new FilterArticlesRequest();
  const articlesResponse = await RequestManager.send(articlesRequest);

  if (!(articlesResponse instanceof ApiResponseOfPageResponseOfArticleDto)) {
    throw console.error(articlesResponse?.message);
  }

  const pagedArticles = articlesResponse.obj;
  if (!pagedArticles) {
    throw console.error("Missing articles");
  }

  const articleDtos = pagedArticles.results;
  if (!articleDtos) {
    throw console.error("Missing articles");
  }

  const articles = articleDtos.map((a) => createArticle(a));

  const pagedItems = new PagedItems<Article>(
    pagedArticles.page || 0,
    pagedArticles.totalPages || 0,
    articles
  );
  return pagedItems;
}
