import { User } from "../Models/User";

const key = "user.active";
let user: User | null;

export function loadUser(): User | null {
  if (!user) {
    let userData = localStorage.getItem(key);
    if (!userData) {
      // return null; // TODO: maybe throw exception?
      userData =
        '{"id": "99999999-9999-9999-9999-999999999999", "username": "Test User"}';
    }

    user = JSON.parse(userData);
  }

  return user;
}
