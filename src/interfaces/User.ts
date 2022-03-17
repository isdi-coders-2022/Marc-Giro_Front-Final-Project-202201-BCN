import { SomeActionInterface } from "./Movie";

export interface userLoginDataInterface {
  id: string;
  username: string;
  token: string;
}
export interface setMessageActionInterface extends SomeActionInterface {
  message: string;
}

export interface loginActionInterface extends SomeActionInterface {
  userLoginData: userLoginDataInterface;
}
