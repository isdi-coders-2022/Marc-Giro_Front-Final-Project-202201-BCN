import { loadLocalMoviesThunk } from "./moviesThunk";

describe("Given a loadMoviesThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const search = "Hola";
      const dispatch = jest.fn();

      const innerThunk = await loadLocalMoviesThunk(search);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
