import { actionsTypes } from "../actions/actionsTypes";
import usersReducer from "./usersReducer";

describe("Given a usersReducer function", () => {
  describe("When it is called with a registerSuccess action", () => {
    test.only("then it should return an state indicating the user is not logged in", () => {
      const user = false;
      const state = user
        ? { isLoggedIn: true, user }
        : { isLoggedIn: false, user: null };
      const action = {
        type: actionsTypes.registerSuccess,
      };

      const newState = usersReducer(state, action);

      expect(newState).toEqual({ isLoggedIn: false, user: null });
    });
  });

  describe("When it is called with a registerFail action", () => {
    test.only("then it should return an state indicating the user is not logged in", () => {
      const user = false;
      const state = user
        ? { isLoggedIn: true, user }
        : { isLoggedIn: false, user: null };
      const action = {
        type: actionsTypes.registerFail,
      };

      const newState = usersReducer(state, action);

      expect(newState).toEqual({ isLoggedIn: false, user: null });
    });
  });

  describe("When it is called with a loginSuccess action and the userLoginData", () => {
    test.only("then it should return an state indicating the user is logged in and the data", () => {
      const userLoginData = { id: "8907", username: "user", password: "1234" };
      const user = true;
      const state = user
        ? { isLoggedIn: true, user }
        : { isLoggedIn: false, user: null };
      const action = {
        type: actionsTypes.loginSuccess,
        userLoginData,
      };

      const newState = usersReducer(state, action);

      expect(newState).toEqual({ isLoggedIn: true, user: userLoginData });
    });
  });

  describe("When it is called with a loginFail action", () => {
    test.only("then it should return an state indicating the user is not logged in", () => {
      const user = false;
      const state = user
        ? { isLoggedIn: true, user }
        : { isLoggedIn: false, user: null };
      const action = {
        type: actionsTypes.loginFail,
      };

      const newState = usersReducer(state, action);

      expect(newState).toEqual({ isLoggedIn: false, user: null });
    });
  });

  describe("When it is called with a logout action", () => {
    test.only("then it should return an state indicating the user is not logged in", () => {
      const user = false;
      const state = user
        ? { isLoggedIn: true, user }
        : { isLoggedIn: false, user: null };
      const action = {
        type: actionsTypes.logout,
      };

      const newState = usersReducer(state, action);

      expect(newState).toEqual({ isLoggedIn: false, user: null });
    });
  });
});
