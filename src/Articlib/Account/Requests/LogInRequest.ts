import { ArticlibRequest } from "@/Articlib/Requests";
import { Articlib } from "@/generated/ArticlibClient";

export class LogInRequest extends ArticlibRequest<Articlib.ApiResponseOfLogInResponse> {
  private readonly email: string;
  private readonly password: string;

  constructor(email: string, password: string) {
    super();

    this.email = email;
    this.password = password;
  }

  protected async executeInternal(
    client: Articlib.Client
  ): Promise<Articlib.ApiResponseOfLogInResponse> {
    const request = new Articlib.LogInRequest({
      email: this.email,
      password: this.password,
    });

    return await client.logIn_LogIn(request);
  }
}
