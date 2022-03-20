import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateLocalMovieThunk } from "../../../redux/thunks/moviesThunk";
import FormButton from "../../Buttons/FormButton";
import { useNavigate } from "react-router-dom";
import { MovieFormStyle } from "../MovieForm/MovieForm";

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

interface UpdateMovieFormProps {
  movieId: string;
  movieToUpdate: Promise<any>;
}

const UpdateMovieForm = ({ movieId, movieToUpdate }: UpdateMovieFormProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, watch, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.Poster) {
      data.Poster = data.Poster[0];
    }
    dispatch(updateLocalMovieThunk(data, movieId));
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

        {!isInvalid ? <FormButton text="Create your movie" /> : <></>}
      </form>
    </MovieFormStyle>
  );
};

export default UpdateMovieForm;
