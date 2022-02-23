import { RequestManager } from "@/Articlib/Requests";
import { Articlib } from "@/generated/ArticlibClient";
import { LogInRequest } from "../Requests/LogInRequest";
import { logIn } from "../Stores/AccountStore";
import { User } from "@Users/Models/User";

export async function LogInCommand(
  email: string,
  password: string
): Promise<boolean> {
  const request = new LogInRequest(email, password);
  const response = await RequestManager.send(request);

  if (!(response instanceof Articlib.ApiResponseOfLogInResponse)) {
    throw console.error("Failure with log in attempt");
  }

  if (response.isError) {
    return false;
  }

  // TODO: Error checking.
  const user = new User(response.obj!.user!.id, response.obj!.user!.name);
  logIn(response.obj!.accessToken!, user);

  return true;
}
