import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import FormButton from "../../Buttons/FormButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearMessageAction } from "../../../redux/actions/actionsCreators";
import { loginUserThunk } from "../../../redux/thunks/usersThunk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginFormStyle = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  & form {
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
      align-items: center;
    }

    & .disabled {
      background-color: #c9c6c5;
      cursor: default;
    }

    & div {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }
    & label {
      margin-top: 20px;
      margin-bottom: 4px;
      @media (min-width: 800px) {
        margin-left: 40px;
        margin-right: 40px;
      }
    }
    & input {
      margin-top: 10px;
      height: 30px;
      border: none;
      border-radius: 10px;
      background-color: #83c5be25;
      @media (min-width: 800px) {
        margin-left: 40px;
        margin-right: 40px;
        width: 300px;
      }
    }
  }
`;

interface IFormInput {
  username: string;
  password: string;
}

const LoginForm = ({ message }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof message === "string") {
      dispatch(clearMessageAction());
      if (message.includes("successful")) {
        toast.success(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 2000,
          theme: "colored",
          hideProgressBar: true,
        });
        navigate("/");
      } else {
        toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 2000,
          theme: "colored",
          hideProgressBar: true,
        });
      }
    }
  }, [dispatch, message, navigate]);

  const { register, watch, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(loginUserThunk(data));
    dispatch(clearMessageAction());
  };
  const watchRequiredFields = watch(["username", "password"]);

  const isInvalid =
    watchRequiredFields[0] === "" || watchRequiredFields[1] === "";

  return (
    <LoginFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="mariogl"
            {...register("username", { required: true })}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            {...register("password", { required: true })}
          />
        </div>

        <FormButton
          className={!isInvalid ? "" : "disabled"}
          disabled={isInvalid}
          text="Login"
        />
      </form>
    </LoginFormStyle>
  );
};

export default LoginForm;
