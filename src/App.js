import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";

function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=af1afe1246691b60cd21cf54daa02c05&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
  };

  return (
    <div className="App">
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
