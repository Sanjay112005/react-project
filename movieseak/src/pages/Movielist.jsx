import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Movielist = ({ title, apipath }) => {
  const { data: movies = [] } = useFetch(apipath); // Ensure movies defaults to an empty array
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <main className="container">
        {title === "Your guide to great movies" && (
          <div className="bg-body-tertiary p-4 border mb-5 mt-1">
            <h5 className="text-primary">Welcome to Movieseak</h5>
            <p>
              Discover your next favorite movie with us. From the latest
              blockbusters to timeless classics, Movieseak is your ultimate
              guide to great cinema.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/movies/upcoming");
              }}
            >
              Explore Now
            </button>
          </div>
        )}
        <h5 className="text-danger py-2 border-bottom">{title}</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </main>
    </div>
  );
};
