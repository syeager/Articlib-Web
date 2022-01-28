import {
  ApiResult,
  RequestManager as RM,
} from "../common/ApiRequestSystem/ApiRequestManager";
import { Articlib } from "../generated/ArticlibClient";

class ArticlibRequestManager extends RM<Articlib.Client> {}

class ApiResultsFactory {
  public create(): ApiResult {
    return new Articlib.ApiResponse();
  }

  public createWithData(data: Articlib.ApiResponse): ApiResult {
    return new Articlib.ApiResponse(data);
  }
}

const client = new Articlib.Client();
const getAccessToken = () => "";

const factory = new ApiResultsFactory();

export const RequestManager = new ArticlibRequestManager(
  client,
  getAccessToken,
  factory
);
