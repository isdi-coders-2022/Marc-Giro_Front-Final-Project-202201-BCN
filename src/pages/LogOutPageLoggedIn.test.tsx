import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { LogOutPage } from "./LogOutPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockState2,
}));

const mockState2 = {
  isLoggedIn: true,
  user: null,
};

describe("Given a LogOutPage component", () => {
  describe("When the user is logged in", () => {
    test.only("Then a navigate must be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogOutPage />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button", { name: "Log Out" });
      expect(button).toBeInTheDocument();
      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
