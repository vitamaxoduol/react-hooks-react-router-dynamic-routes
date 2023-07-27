import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {

  const match = useRouteMatch();
  console.log(match)

  return (
    <div>
      <MoviesList movies={movies} />
      {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/movies/:movieId"
      */}
      <Route path={`${match.url}/:movieId`}>
      <h3>Choose a movie from the list above</h3>
        <MovieShow movies={movies}/>
      </Route>

    </div>
  );
}
export default MoviesPage;
