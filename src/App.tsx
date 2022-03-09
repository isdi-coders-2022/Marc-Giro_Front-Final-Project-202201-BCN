import { MovieCard } from "./components/MovieCard/MovieCard";
import { Navbar } from "./components/Navbar/Navbar";
import "@fontsource/roboto";
import "@fontsource/montserrat";

function App() {
  const image =
    "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg";
  return (
    <>
      <Navbar />
      <MovieCard
        movie={{
          Type: "series",
          Poster: image,
          Title: "canallitacanallitacanallita",
          Year: "1999",
        }}
      />
    </>
  );
}

export default App;
