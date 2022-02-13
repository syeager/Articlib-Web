import { ArticlibRequest } from "../../../Articlib/Requests";
import { Articlib } from "../../../generated/ArticlibClient";

abstract class LikeArticleRequest extends ArticlibRequest<Articlib.ApiResponseOfArticleDto> {
  private readonly articleId: string;
  private readonly userId: string;

  constructor(articleId: string, userId: string) {
    super();
    this.articleId = articleId;
    this.userId = userId;
  }

  protected abstract sendRequest(
    client: Articlib.Client,
    request: Articlib.VoteRequest
  ): Promise<Articlib.ApiResponseOfArticleDto>;

  protected executeInternal(
    client: Articlib.Client
  ): Promise<Articlib.ApiResponseOfArticleDto> {
    const request = new Articlib.VoteRequest({
      articleId: this.articleId,
      userId: this.userId,
    });

    return this.sendRequest(client, request);
  }
}

export class AddLikeArticleRequest extends LikeArticleRequest {
  protected sendRequest(
    client: Articlib.Client,
    request: Articlib.VoteRequest
  ): Promise<Articlib.ApiResponseOfArticleDto> {
    return client.addVote_AddVote(request);
  }
}

export class RemoveLikeArticleRequest extends LikeArticleRequest {
  protected sendRequest(
    client: Articlib.Client,
    request: Articlib.VoteRequest
  ): Promise<Articlib.ApiResponseOfArticleDto> {
    return client.removeVote_RemoveVote(request);
  }
}
