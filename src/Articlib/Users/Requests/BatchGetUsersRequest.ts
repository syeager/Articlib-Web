import { ArticlibRequest } from "../../Requests/ArticlibRequest";
import { Articlib } from "../../../generated/ArticlibClient";

export class BatchGetUsersRequest extends ArticlibRequest<Articlib.ApiResponseOfListOfUserDto> {
  readonly ids: string[];

  constructor(ids: string[]) {
    super();
    this.ids = [...new Set(ids)];
  }

  protected async executeInternal(
    client: Articlib.Client
  ): Promise<Articlib.ApiResponseOfListOfUserDto> {
    return await client.batchGetByIdUser_Get(this.ids);
  }
}
