import { ArticlibRequest } from "@/Articlib/Requests";
import { Articlib } from "@Api";

export class PostArticleRequest extends ArticlibRequest<Articlib.ApiResponseOfArticleDto> {
  readonly userId: string;
  readonly url: string;

  constructor(userId: string, url: string) {
    super();
    this.userId = userId;
    this.url = url;
  }

  protected executeInternal(
    client: Articlib.Client
  ): Promise<Articlib.ApiResponseOfArticleDto> {
    const request = new Articlib.ArticleCreateRequest({
      posterId: this.userId,
      url: this.url,
    });
    return client.postArticle_Create(request);
  }
}
