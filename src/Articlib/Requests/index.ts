import { Articlib } from "../../generated/ArticlibClient";
export { ArticlibRequest } from "./ArticlibRequest";
import {
  ApiResultsFactory,
  ArticlibRequestManager,
} from "./ArticlibRequestManager";

const client = new Articlib.Client();
const getAccessToken = () => "";

const factory = new ApiResultsFactory();

export const RequestManager = new ArticlibRequestManager(
  client,
  getAccessToken,
  factory
);
