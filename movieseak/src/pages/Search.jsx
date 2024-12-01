import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export  const Search = ({apipath}) => {
  const [SearchParams] = useSearchParams();
  const queryterm = SearchParams.get("q");
  const {data:movies} = useFetch(apipath,queryterm)
  useEffect(()=>{
    document.title = `search result for ${queryterm}`
  })
  
  return <main className="container">
    <h5 className="text-danger py-2 border-bottom">{movies.length ==0? `no result found for ${queryterm}` :`result for ${queryterm}`} </h5>
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

  
}


