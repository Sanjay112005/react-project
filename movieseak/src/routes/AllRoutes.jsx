import { Route, Routes } from "react-router-dom";
import { Moviedetails, Movielist, Pagenotfound, Search } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movielist title="Your guide to great movies" apipath="movie/now_playing" />} />
      <Route path="movies/popular" element={<Movielist title="Popular movies" apipath="movie/popular" />} />
      <Route path="movies/top" element={<Movielist title="Top rated movies" apipath="movie/top_rated" />} />
      <Route path="movies/upcoming" element={<Movielist title="Upcoming movies" apipath="movie/upcoming"/>} />
      <Route path="movie/:id" element={<Moviedetails />} />
      <Route path ="search" element={<Search apipath="search/movie" />}/>
      <Route path="*" element = {<Pagenotfound />} title="page not found " />
    </Routes>
  );
};

export default AllRoutes;
