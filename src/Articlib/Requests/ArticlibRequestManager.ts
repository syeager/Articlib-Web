import {
  ApiResult,
  RequestManager as RM,
} from "../../common/ApiRequestSystem/ApiRequestManager";
import { Articlib } from "../../generated/ArticlibClient";

export class ArticlibRequestManager extends RM<Articlib.Client> {}

export class ApiResultsFactory {
  public create(): ApiResult {
    return new Articlib.ApiResponse();
  }

  public createWithData(data: Articlib.ApiResponse): ApiResult {
    return new Articlib.ApiResponse(data);
  }
}
