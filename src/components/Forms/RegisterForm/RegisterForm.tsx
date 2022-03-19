import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createUserThunk } from "../../../redux/thunks/usersThunk";
import FormButton from "../../Buttons/FormButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearMessageAction } from "../../../redux/actions/actionsCreators";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterFormStyle = styled.div`
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
      margin-top: 15px;
      margin-bottom: 15px;
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
  name: string;
  username: string;
  password: string;
}

const RegisterForm = ({ message }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof message === "string") {
      if (message.includes("registered!")) {
        toast.success(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 2000,
          theme: "colored",
          hideProgressBar: true,
        });
        navigate("/login");
      } else {
        toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 2000,
          theme: "colored",
          hideProgressBar: true,
        });
      }
      dispatch(clearMessageAction());
    }
  }, [dispatch, message, navigate]);

  const { register, watch, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(createUserThunk(data));
  };
  const watchRequiredFields = watch(["name", "username", "password"]);

  const isInvalid =
    watchRequiredFields[0] === "" ||
    watchRequiredFields[1] === "" ||
    watchRequiredFields[2] === "";

  return (
    <RegisterFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="mario"
            {...register("name", { required: true })}
          />
        </div>

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
          text="Sign Up"
        />
      </form>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
