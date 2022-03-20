import { useParams } from "react-router-dom";
import UpdateMovieForm from "../components/Forms/UpdateMovieForm/UpdateMovieForm";
import { url } from "../redux/thunks/moviesThunk";

const UpdateMovie = () => {
  const { movieId } = useParams();

  const movie = async () => {
    const response = await fetch(`${url}movies/${movieId}`);
    const movieToUpdate = await response.json();
    return movieToUpdate;
  };
  const movieToUpdate = movie();

  return (
    <UpdateMovieForm
      movieId={movieId as string}
      movieToUpdate={movieToUpdate as Promise<any>}
    />
  );
};

export default UpdateMovie;
