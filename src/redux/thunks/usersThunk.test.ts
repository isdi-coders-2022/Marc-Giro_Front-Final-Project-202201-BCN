import { createUserThunk, loginUserThunk } from "./usersThunk";

describe("Given a createUserThunk function", () => {
  describe("When it is called with a user info", () => {
    test("Then it should dispatch a function", async () => {
      const user = { name: "marc", username: "marc", password: "1234" };
      const dispatch = jest.fn();

      const innerThunk = await createUserThunk(user);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loginUserThunk function", () => {
  describe("When it is called with a user info", () => {
    test("Then it should dispatch a function", async () => {
      const user = { username: "marc", password: "1234" };
      const dispatch = jest.fn();

      const innerThunk = await loginUserThunk(user);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
