import { MovieCard } from "./components/MovieCard/MovieCard";
import { Navbar } from "./components/Navbar/Navbar";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  // const image =
  //   "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg";
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={"placeholder <LoginPage>"} />
      <Route path="/register" element={"placeholder <RegisterPage>"} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/movie/:id" element={"placeholder <MoviePage />"} />
      <Route path="/watchlist" element={"placeholder <WatchlistPage />"} />
      <Route path="/ratings" element={"placeholder <RatingsPage />"} />
      <Route path="*" element={"placeholder <NotFoundPage />"} />
    </Routes>

    // <>
    //   <Navbar />
    //   <MovieCard
    //     movie={{
    //       Type: "series",
    //       Poster: image,
    //       Title: "canallitacanallitacanallita",
    //       Year: "1999",
    //     }}
    //   />
    // </>
  );
}

export default App;
