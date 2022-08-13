import React from "react";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../.storybook/preview";

export function FilmCard({ film }: any) {
  return (
    <article className="film-card">
      <h4 className="film-title">{film.title}</h4>
      <p>{film.opening_crawl}</p>
    </article>
  );
}

const fetchFilms = async () => {
  //cast type email
  const email = "hungphung2002@gmail.com";
  const docRef = doc(firebaseDB, "users", email);
  return (await getDoc(docRef)).data();
};

function useFetchFilms() {
  const { status, data } = useQuery<any, any, any, any>(["films"], fetchFilms);

  return {
    status,
    films: data,
  };
}

export const Example = () => {
  const { status, films } = useFetchFilms();

  return <div className="films-grid">content</div>;
};
