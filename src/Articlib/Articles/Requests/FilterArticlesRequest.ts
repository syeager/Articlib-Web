import { ArticlibRequest } from "@/Articlib/Requests";
import { Articlib } from "@/generated/ArticlibClient";

export class FilterArticlesRequest extends ArticlibRequest<Articlib.ApiResponseOfPageResponseOfArticleDto> {
  protected async executeInternal(
    client: Articlib.Client
  ): Promise<Articlib.ApiResponseOfPageResponseOfArticleDto> {
    return await client.filterArticles_Filter(undefined, undefined);
  }
}
