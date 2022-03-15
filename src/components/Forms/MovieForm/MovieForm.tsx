import { useForm, SubmitHandler } from "react-hook-form";

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
  Poster: string;
}

const MovieForm = () => {
  const { register, watch, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {};
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
    watchRequiredFields[1] === "" ||
    watchRequiredFields[2] === "" ||
    watchRequiredFields[4] === "" ||
    watchRequiredFields[5] === "" ||
    watchRequiredFields[6] === "" ||
    watchRequiredFields[7] === "";

  console.log(watchRequiredFields);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input
        type="text"
        placeholder="Drive"
        {...register("Title", { required: true })}
      />

      <label>Runtime</label>
      <input
        type="number"
        placeholder="100"
        {...register("Runtime", { required: true })}
      />

      <label>Year</label>
      <input
        type="text"
        placeholder="2011"
        {...register("Year", { required: true })}
      />

      <label>Type</label>
      <select {...register("Type", { required: true })}>
        <option defaultValue="Movie">Movie</option>
        <option value="Series">Series</option>
      </select>

      <label>Genre</label>
      <input type="text" placeholder="Action, Drama" {...register("Genre")} />

      <label>Director</label>
      <input
        type="text"
        placeholder="Nicolas Winding Refn"
        {...register("Director", { required: true })}
      />

      <label>Writer</label>
      <input
        type="text"
        placeholder="Hossein Amini, James Sallis"
        {...register("Writer", { required: true })}
      />

      <label>Actors</label>
      <input
        type="text"
        placeholder="Ryan Gosling, Carey Mulligan, Bryan Cranston"
        {...register("Actors", { required: true })}
      />

      <label>Plot</label>
      <input
        type="text"
        placeholder="An action drama about a mysterious Hollywood stuntman and mechanic who moonlights as a getaway driver, and finds himself in trouble when he helps out his neighbor."
        {...register("Plot", { required: true })}
      />

      <label>Image</label>
      <input type="file" {...register("Poster")} />

      {!isInvalid ? <button type="submit">Create a Movie</button> : <></>}
    </form>
  );
};

export default MovieForm;
