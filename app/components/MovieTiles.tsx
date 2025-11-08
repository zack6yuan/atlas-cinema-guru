"use client";
import { useEffect, useState } from "react";
import placeholder from "../../assets/placeholder.svg";
import aurora from "public/images/665cb6f0-0d20-43ae-9a29-cf374c4d3805.webp";

export default function MovieTiles() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          "/api/titles?page=1&minYear=2023&maxYear=2024&genres=Sci-Fi,Mystery"
        );
        const data = await response.json();
        setMovieData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieData();
  }, []);

  if (!movieData) {
    return (
      <div className="flex items-center justify-center">
        <p>Movie data loading...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 justify-center w-300 h-90 -ml-225 gap-5">
      <img src={placeholder.src} alt="placeholder image" className="pr-10"/>
      <img src={placeholder.src} alt="placeholder image" className="pr-10"/>
      <img src={placeholder.src} alt="placeholder image" className="pr-10"/>
      <img src={placeholder.src} alt="placeholder image" className="pr-10"/>
      <img src={placeholder.src} alt="placeholder image"className="pr-10"/>
      <img src={placeholder.src} alt="placeholder image" className="pr-10"/>
    </div>
  );
}