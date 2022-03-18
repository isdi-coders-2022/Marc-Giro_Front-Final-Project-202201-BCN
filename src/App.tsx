import "@fontsource/roboto";
import "@fontsource/montserrat";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar/Navbar";
import { CreateMoviePage } from "./pages/CreateMoviePage";
import { RegisterUserPage } from "./pages/RegisterUserPage";
import { LoginUserPage } from "./pages/LoginUserPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginUserPage />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/createmovie" element={<CreateMoviePage />} />
        <Route path="/movie/:id" element={"placeholder <MoviePage />"} />
        <Route path="/watchlist" element={"placeholder <WatchlistPage />"} />
        <Route path="/ratings" element={"placeholder <RatingsPage />"} />
        <Route path="*" element={"placeholder <NotFoundPage />"} />
      </Routes>
    </>
  );
}

export default App;
