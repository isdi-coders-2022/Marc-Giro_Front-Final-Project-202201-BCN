import { useDispatch } from "react-redux";
import LogOutButton from "../components/Buttons/LogOutButton";
import {
  clearMessageAction,
  logoutAction,
} from "../redux/actions/actionsCreators";

export const LogOutPage = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch(clearMessageAction());
    dispatch(logoutAction());
  };
  return <LogOutButton actionOnClick={logOut} text="Log Out" />;
};
