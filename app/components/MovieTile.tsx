"use client"
import { useEffect, useState } from "react";
import placeholder from "../../assets/placeholder.svg";

export default function MovieTile() {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch("/api/titles?page=1&minYear=2023&maxYear=2024&genres=Sci-Fi,Mystery");
                const data = await response.json();
                setMovieData(data);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchMovieData();
    }, [])

    if (!movieData) {
        return (
            <div className="">
                <p>Movie data loading...</p>
            </div>
        )
    }

    return (
        <div className="w-80 h-80 -ml-135">
            <img
                src={placeholder}
                alt="placeholder"
            />
        </div>
    )
}