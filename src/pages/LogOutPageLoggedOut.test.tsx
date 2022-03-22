import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { LogOutPage } from "./LogOutPage";

const mockState = {
  isLoggedIn: false,
};
const mockNavigate = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockState,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a LogOutPage component", () => {
  describe("When it is rendered and the user is not logged in", () => {
    test("Then it should be redirected to the homepage", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogOutPage />
          </Provider>
        </BrowserRouter>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
