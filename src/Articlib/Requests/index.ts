import { Articlib } from "@Api";
export { ArticlibRequest } from "./ArticlibRequest";
import {
  ApiResultsFactory,
  ArticlibRequestManager,
} from "./ArticlibRequestManager";
import { getAccessToken } from "../Account/Stores/AccountStore";

const client = new Articlib.Client();

const factory = new ApiResultsFactory();

export const RequestManager = new ArticlibRequestManager(
  client,
  getAccessToken,
  factory
);
