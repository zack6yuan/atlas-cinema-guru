"use client"
import { useEffect } from "react";
import { FlashList } from "@shopify/flash-list";

export default function MovieTile() {
    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch("/api/titles?page=1&minYear=2023&maxYear=2024&genres=Sci-Fi,Mystery");
                const data = await response.json();
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchMovieData();
    }, [])
    return (
        <FlashList></FlashList>
    )
}