import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { MovieDetailPage } from "./MovieDetailPage";

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useParams: () => ({ id: "1" }),
// }));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => state[0],
}));

const state = [
  {
    Title: "Kingsman",
    Year: "2014",
    Runtime: 130,
    Genre: "Action, Adventure, Comedy",
    Type: "Movie",
    Director: "Jane Goldman",
    Writer: "Colin Firth, Taron Egerton, Samuel L Jackson",
    Actors: "Colin Firth, Taron Egerton, Samuel L Jackson",
    Plot: "A spy organisation recruits a promising street kid into the agency's training program, while a global threat emerges from a twisted tech genius.",
    Poster:
      "https://firebasestorage.googleapis.com/v0/b/marcgiro-movieapi.appspot.com/o/Kingsman?alt=media&token=37ceef0c-09b0-4116-a779-3ab9b1f8cf1e",
  },
  {},
];

describe("Given a MovieDetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a heading", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MovieDetailPage />
          </Provider>
        </BrowserRouter>
      );
      const title = screen.getByRole("heading", { name: "Kingsman (2014)" });
      const image = screen.getByRole("img", { name: "Kingsman" });

      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
  });
});
