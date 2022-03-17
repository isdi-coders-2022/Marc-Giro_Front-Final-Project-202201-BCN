import { Movie } from "../../interfaces/Movie";
import {
  addLocalMovieAction,
  clearMessageAction,
  deleteLocalMovieAction,
  loadLocalMoviesAction,
  loginFailAction,
  loginSuccessAction,
  registerFailAction,
  registerSuccessAction,
  setMessageAction,
} from "./actionsCreators";

describe("Given a load local movies action", () => {
  describe("When it receives movies", () => {
    test("Then it should return the action and the movies", () => {
      const movies: Movie[] = [
        {
          Title: "The Leftovers",
          Year: "2014–2017",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg",
        },
      ];
      const expectedAction = {
        type: "load-local-movies",
        movies,
      };

      const action = loadLocalMoviesAction(movies);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a delete local movie action", () => {
  describe("When it receives a movieId", () => {
    test("Then it should return the action and the movieId", () => {
      const movieId: string = "jk;agd14";
      const expectedAction = {
        type: "delete-local-movie",
        movieId,
      };

      const action = deleteLocalMovieAction(movieId);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an add local movie action", () => {
  describe("When it receives a movie", () => {
    test("Then it should return the action and the movie", () => {
      const movie: Movie = {
        Title: "The Leftovers",
        Year: "2014–2017",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg",
      };
      const expectedAction = {
        type: "add-local-movie",
        movie,
      };

      const action = addLocalMovieAction(movie);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given set message action", () => {
  describe("When it receives a message", () => {
    test("Then it should return the action and the message", () => {
      const message: string = "message";
      const expectedAction = {
        type: "set-message",
        message,
      };

      const action = setMessageAction(message);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a clear message action", () => {
  describe("When it is invoked", () => {
    test("Then it should return the action", () => {
      const expectedAction = {
        type: "clear-message",
      };

      const action = clearMessageAction();

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given register success action", () => {
  describe("When it is invoked", () => {
    test("Then it should return the action", () => {
      const expectedAction = {
        type: "register-success",
      };

      const action = registerSuccessAction();

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given register fail action", () => {
  describe("When it is invoked", () => {
    test("Then it should return the action", () => {
      const expectedAction = {
        type: "register-fail",
      };

      const action = registerFailAction();

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given login success action", () => {
  describe("When it is invoked and passed userLoginData", () => {
    test("Then it should return the action and the data", () => {
      const userLoginData = {
        id: "--0345",
        username: "hola",
        token: "890256ajkl;gf",
      };
      const expectedAction = {
        type: "login-success",
        userLoginData,
      };

      const action = loginSuccessAction(userLoginData);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given login fail action", () => {
  describe("When it is invoked", () => {
    test("Then it should return the action", () => {
      const userLoginData = {
        id: "--0345",
        username: "hola",
        token: "890256ajkl;gf",
      };
      const expectedAction = {
        type: "login-fail",
        userLoginData,
      };

      const action = loginFailAction(userLoginData);

      expect(action).toEqual(expectedAction);
    });
  });
});
