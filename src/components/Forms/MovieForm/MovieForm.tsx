import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import FormButton from "../../Buttons/FormButton";
import { useNavigate, useParams } from "react-router-dom";
import { CreatedMovie, MovieDetails } from "../../../interfaces/Movie";

export const MovieFormStyle = styled.div`
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
      display: flex;
      flex-direction: column;
      @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
      }

      & div {
        @media (min-width: 800px) {
          display: flex;
          flex-direction: column;
        }
      }
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
      border: none;
      border-radius: 10px;
      background-color: #83c5be25;
      @media (min-width: 800px) {
        margin-left: 40px;
        margin-right: 40px;
        width: 300px;
        height: 20px;
      }
    }
    & textarea {
      border-radius: 10px;
      border: none;
      background-color: #83c5be25;
      @media (min-width: 800px) {
        margin-left: 40px;
        margin-right: 40px;
        width: 300px;
      }
    }
    & select {
      border: none;
      background-color: #83c5be25;
      border-radius: 10px;
      @media (min-width: 800px) {
        margin-left: 40px;
        margin-right: 40px;
        width: 300px;
      }
    }
  }
`;

enum TypeOptions {
  Movie = "Movie",
  Series = "Series",
}

interface IFormInput {
  Title: string;
  Runtime: string;
  Year: string;
  Type: TypeOptions;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster?: any;
}

interface MovieFormProps {
  thunk: (movie: CreatedMovie, id?: string) => any;
  movieToUpdate?: MovieDetails;
}

const MovieForm = ({ thunk, movieToUpdate }: MovieFormProps): JSX.Element => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blankfields = movieToUpdate ?? {};
  const text = movieToUpdate ? "Update" : "Create";

  const { register, watch, handleSubmit } = useForm<IFormInput>({
    defaultValues: blankfields,
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.Poster) {
      data.Poster = data.Poster[0];
    }
    movieToUpdate ? dispatch(thunk(data, movieId)) : dispatch(thunk(data));

    navigate("/");
  };
  const watchRequiredFields = watch([
    "Title",
    "Runtime",
    "Year",
    "Type",
    "Director",
    "Writer",
    "Actors",
    "Plot",
  ]);

  const isInvalid =
    watchRequiredFields[0] === "" ||
    watchRequiredFields[1] === null ||
    watchRequiredFields[2] === "" ||
    watchRequiredFields[4] === "" ||
    watchRequiredFields[5] === "" ||
    watchRequiredFields[6] === "" ||
    watchRequiredFields[7] === "";

  return (
    <MovieFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Drive"
              {...register("Title", { required: true })}
            />
          </div>

          <div>
            <label>Runtime</label>
            <input
              type="number"
              placeholder="100"
              {...register("Runtime", { required: true })}
            />
          </div>
        </div>

        <div>
          <div>
            <label>Year</label>
            <input
              type="text"
              placeholder="2011"
              {...register("Year", { required: true })}
            />
          </div>
          <div>
            <label>Type</label>
            <select {...register("Type", { required: true })}>
              <option defaultValue="Movie">Movie</option>
              <option value="Series">Series</option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <label>Genre</label>
            <input
              type="text"
              placeholder="Action, Drama"
              {...register("Genre")}
            />
          </div>

          <div>
            <label>Director</label>
            <input
              type="text"
              placeholder="Nicolas Winding Refn"
              {...register("Director", { required: true })}
            />
          </div>
        </div>

        <div>
          <div>
            <label>Writer</label>
            <input
              type="text"
              placeholder="Hossein Amini, James Sallis"
              {...register("Writer", { required: true })}
            />
          </div>
          <div>
            <label>Actors</label>
            <textarea
              rows={2}
              placeholder="Ryan Gosling, Carey Mulligan, Bryan Cranston"
              {...register("Actors", { required: true })}
            ></textarea>
          </div>
        </div>

        <div>
          <div>
            <label>Plot</label>
            <textarea
              rows={6}
              placeholder="An action drama about a mysterious Hollywood stuntman and mechanic who moonlights as a getaway driver, and finds himself in trouble when he helps out his neighbor."
              {...register("Plot", { required: true })}
            ></textarea>
          </div>
          <div>
            <label>Image</label>
            <input
              className="image-input"
              type="file"
              {...register("Poster")}
            />
          </div>
        </div>

        {!isInvalid ? <FormButton text={text} /> : <></>}
      </form>
    </MovieFormStyle>
  );
};

export default MovieForm;
