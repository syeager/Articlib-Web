import { User } from "@Users/Models/User";

const accessTokenKey = "account.accessToken";
const userKey = "account.user";

let activeUser: User | null;
let activeAccessToken = "";

export function logIn(accessToken: string, user: User): void {
  localStorage.setItem(accessTokenKey, accessToken);
  activeAccessToken = accessToken;
  localStorage.setItem(userKey, JSON.stringify(user));
  activeUser = user;
}

export function logOut(): void {
  localStorage.removeItem(accessTokenKey);
  localStorage.removeItem(userKey);
}

export function getUser(): User | null {
  if (!activeUser) {
    const userData = localStorage.getItem(userKey);
    if (!userData) {
      console.log("no user logged in");
      return null;
    }

    activeUser = JSON.parse(userData);
  }

  return activeUser;
}

export function getUserRequired(): User {
  const user = getUser();
  if (!user) {
    throw new NotAuthenticatedError();
  }
  return user;
}

export function getAccessToken(): string {
  if (!activeAccessToken) {
    activeAccessToken = localStorage.getItem(accessTokenKey) || "";
  }

  return activeAccessToken;
}

export class NotAuthenticatedError extends Error {}
