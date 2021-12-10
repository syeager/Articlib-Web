class BaseApi {
  accessToken: string | undefined;

  protected transformOptions(options: any): Promise<RequestInit> {
    try {
      options.headers.Authorization = `Bearer ${this.accessToken}`;
    } catch (e) {
      console.error(e);
    }

    return Promise.resolve(options);
  }
}