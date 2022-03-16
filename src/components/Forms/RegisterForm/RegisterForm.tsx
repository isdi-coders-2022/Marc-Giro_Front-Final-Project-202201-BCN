import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { addLocalMovieThunk } from "../../../redux/thunks/moviesThunk";
import FormButton from "../../Buttons/FormButton";
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
  name: string;
  username: string;
  password: string;
}

const MovieForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, watch, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // navigate("/user/login");
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
            type="text"
            placeholder="****"
            {...register("password", { required: true })}
          />
        </div>

        {!isInvalid ? <FormButton text="Sign Up" /> : <></>}
      </form>
    </RegisterFormStyle>
  );
};

export default MovieForm;
