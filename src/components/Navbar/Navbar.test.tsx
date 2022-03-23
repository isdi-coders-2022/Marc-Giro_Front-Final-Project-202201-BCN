import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { Navbar } from "./Navbar";

const mockState2 = {
  isLoggedIn: true,
  user: null,
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockState2,
}));
describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 5 anchors", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(5);
    });
  });
});
