import React from "react";
import { useQuery } from "@tanstack/react-query";

export function FilmCard({ film }: any) {
  return (
    <article className="film-card">
      <h4 className="film-title">{film.title}</h4>
      <p>{film.opening_crawl}</p>
    </article>
  );
}

function fetchFilms() {
  return fetch("https://swapi.dev/api/films/")
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res;
    })
    .then((res) => res.json())
    .then((data) => data.results);
}

function useFetchFilms() {
  const { status, data } = useQuery<any, any, any, any>(["films"], fetchFilms);

  return {
    status,
    films: data,
  };
}

export const Example = () => {
  const { status, films } = useFetchFilms();

  if (status === "loading") {
    return <p>Fetching Star Wars data...</p>;
  }

  if (status === "error") {
    return <p>Could not fetch Star Wars data</p>;
  }

  return (
    <div className="films-grid">
      {films.map((film: any) => (
        <FilmCard key={film.episode_id} film={film} />
      ))}
    </div>
  );
};
