import { Articlib } from "../../generated/ArticlibClient";
import { ApiRequest } from "../../common/ApiRequestSystem/ApiRequest";

export abstract class ArticlibRequest<T> extends ApiRequest<
  T,
  Articlib.Client
> {}
