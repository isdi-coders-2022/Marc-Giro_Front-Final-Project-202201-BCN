import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { MovieCard } from "./MovieCard";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a MovieCard component", () => {
  describe("When it is receives a movie and the user is logged in", () => {
    test("Then it should display the title of the movie and three buttons", () => {
      const movie = {
        Title: "Hello",
        Year: "1999",
        Type: "Movie",
        Poster: "",
        _id: "6228796b92d232f647b99044",
      };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MovieCard isLoggedIn={true} movie={movie} />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: "Hello" });
      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(3);
      expect(title).toBeInTheDocument();
    });
  });
  describe("When it is receives a movie with a title longer than 14 characters and the user is logged in", () => {
    test("Then it should display the first 13 characters of the title followed by ...", () => {
      const movie = {
        Title: "HelloHelloHelloHelloHelloHello",
        Year: "1999",
        Type: "Movie",
        Poster: "",
        _id: "6228796b92d232f647b99044",
      };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MovieCard isLoggedIn={true} movie={movie} />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: "HelloHelloHell...",
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is receives a movie, the user is logged in and the user clicks on an image", () => {
    test("Then it should call the navigate function", () => {
      const movie = {
        Title: "HelloHelloHelloHelloHelloHello",
        Year: "1999",
        Type: "Movie",
        Poster: "",
        _id: "6228796b92d232f647b99044",
      };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MovieCard isLoggedIn={true} movie={movie} />
          </Provider>
        </BrowserRouter>
      );

      const images = screen.getAllByRole("img");
      userEvent.click(images[0]);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it is receives a movie, the user is logged in and clicks on the trash icon", () => {
    test("Then it should call a dispatch function", async () => {
      JSON.parse = jest
        .fn()
        .mockImplementationOnce(() => ({ token: "akljdgdklsaj;" }));
      const movie = {
        Title: "Hello",
        Year: "1999",
        Type: "Movie",
        Poster: "",
        _id: "622cde84023eda26afe3d1fc",
      };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MovieCard isLoggedIn={true} movie={movie} />
          </Provider>
        </BrowserRouter>
      );
      const movieToDelete = await screen.findByText("Hello");
      const trash = await screen.findByTitle("trash");

      userEvent.click(trash);
      let toastr;

      await waitFor(() => {
        expect(movieToDelete).toBeInTheDocument();
        toastr = screen.getByText("Movie deleted");
        expect(toastr).toBeInTheDocument();
      });
    });
  });
});
