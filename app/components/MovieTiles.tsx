"use client";
import { useEffect, useState } from "react";
import ButtonOptions from "./ButtonOptions";

type MovieData = {
  title: string;
  image: string;
  released: string;
  synposis: string;
};

export default function MovieTiles() {
  const [movieData, setMovieData] = useState<MovieData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("api/titles");
      if (!response) {
        console.error("Error fetching movies...");
      } else {
        const data = await response.json();
        console.log(data);
        setMovieData(data);
      }
    };
    fetchMovies();
  }, []);

  if (!movieData) {
    return (
      <div className="grid items-center justify-center lg:-mt-100 lg:ml-1 xl:-mt-100 md:-mt-100 sm:-mt-120">
        <p className="2xl:text-2xl font-bold">Movie data loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto 2xl:ml-40 2xl:mt-5 2xl:w-369 2xl:h-360 xl:w-7xl xl:h-200 xl:ml-30 relative grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 lg:w-250 md:grid-cols-2 md:w-210 md:ml-40 justify-center items-center 2xl:gap-15 xl:gap-10 md:gap-4 sm:grid-cols-1 sm:w-170 sm:-mt-120">
      <div className="group 2xl:-mb-180 lg:mr-10 lg:mb-4 md:mr-10 sm:mb-5 shadow-teal-500 shadow-md rounded-2xl">
        <img
          src={movieData?.title?.[0]?.image}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 sm:top-1 md:-left-75 md:-top-1 lg:-left-55 xl:-left-77 xl:top-8 2xl:top-120 2xl:-left-65">
          <ButtonOptions />
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-177 xl:top-55 lg:top-68 md:top-58 sm:top-105 sm:w-170 sm:h-65 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2 sm:ml-5 sm:mt-2 md:ml-0.5">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1 sm:text-2xl sm:mb-10 sm:mt-3">
              {movieData?.title?.[0]?.title} ({movieData?.title?.[0]?.released})
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 md:text-sm font-light sm:text-xl sm:mr-5 sm:mb-16">
              {movieData?.title?.[0]?.synopsis}
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:-mt-11 2xl:p-2 2xl:w-14 xl:-mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:-mt-10 lg:p-2 md:w-13 md:p-2 md:ml-4 md:-mt-13 sm:p-2 sm:w-13 font-light text-xs">
              {movieData?.title?.[0]?.genre}
            </p>
          </div>
        </div>
      </div>
      <div className="group 2xl:-mb-180 lg:mr-10 lg:mb-4 md:mr-10 sm:mb-5 shadow-teal-500 shadow-md rounded-2xl">
        <img
          src={movieData?.title?.[1]?.image}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 sm:top-176 md:left-33 md:-top-1 lg:left-72 xl:top-8 xl:left-33 2xl:left-63 2xl:top-120">
          <ButtonOptions />
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-177 2xl:left-128 xl:top-55 xl:left-110 lg:top-68 lg:left-127 md:top-58 sm:top-280 sm:w-170 sm:h-65 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2 sm:ml-5 sm:mt-2 md:ml-0.5">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1 sm:text-2xl sm:mb-10 sm:mt-3">
              {movieData?.title?.[1]?.title} ({movieData?.title?.[1]?.released})
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 md:text-sm font-light sm:text-xl sm:mr-5 sm:mb-16">
              {movieData?.title?.[1]?.synopsis}
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:-mt-11 2xl:p-2 2xl:w-14 xl:-mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:-mt-10 lg:p-2 md:w-13 md:p-2 md:ml-4 md:-mt-13 sm:p-2 sm:w-13 font-light text-xs">
              {movieData?.title?.[1]?.genre}
            </p>
          </div>
        </div>
      </div>
      <div className="group 2xl:-mb-180 lg:mr-10 lg:mb-4 md:mr-10 sm:mb-5 shadow-teal-500 shadow-md rounded-2xl">
        <img
          src={movieData?.title?.[2]?.image}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 sm:top-351 md:-left-75 md:top-101 lg:-left-55 lg:top-120 xl:top-8 xl:left-143 2xl:left-190 2xl:top-120">
          <ButtonOptions />
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-177 xl:top-55 lg:top-189 md:top-160 sm:top-455 sm:w-170 sm:h-65 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2 sm:ml-5 sm:mt-2 md:ml-0.5">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1 sm:text-2xl sm:mb-17 sm:mt-3">
              {movieData?.title?.[2]?.title} ({movieData?.title?.[2]?.released})
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 md:text-sm font-light sm:text-xl sm:mr-5 sm:mb-16">
              {movieData?.title?.[2]?.synopsis}
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:-mt-11 2xl:w-14 xl:-mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:-mt-10 lg:p-2 md:w-13 md:p-2 md:ml-4 md:-mt-13 sm:p-2 sm:w-13 font-light text-xs">
              {movieData?.title?.[2]?.genre}
            </p>
          </div>
        </div>
      </div>
      <div className="group 2xl:-mb-50 xl:-mb-2 xl:-mt-30 lg:mr-10 lg:mb-4 md:mr-10 sm:mb-5 shadow-teal-500 shadow-md rounded-2xl">
        <img
          src={movieData?.title?.[3]?.image}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 sm:top-526 md:top-101 md:left-33 lg:left-72 lg:top-120 xl:top-100 xl:-ml-150 2xl:left-85 2xl:top-225">
          <ButtonOptions />
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-284 xl:top-148 lg:top-189 md:top-160 sm:top-630 sm:w-170 sm:h-65 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2 sm:ml-5 sm:mt-2 md:ml-0.5">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1 sm:text-2xl sm:mb-17 sm:mt-3">
              {movieData?.title?.[3]?.title} ({movieData?.title?.[3]?.released})
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 md:text-sm font-light sm:text-xl sm:mr-5 sm:mb-16">
              {movieData?.title?.[3]?.synopsis}
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:-mt-11 2xl:p-2 2xl:w-14 xl:-mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:-mt-6 lg:p-2 md:w-13 md:p-2 md:ml-4 md:-mt-13 sm:p-2 sm:w-13 font-light text-xs">
              {movieData?.title?.[3]?.genre}
            </p>
          </div>
        </div>
      </div>
      <div className="group 2xl:-mb-50 xl:-mb-2 xl:-mt-30 lg:mr-10 lg:mb-4 md:mr-10 sm:mb-5 shadow-teal-500 shadow-md rounded-2xl">
        <img
          src={movieData?.title?.[4]?.image}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="group absolute opacity-0 group-hover:opacity-100 transition duration-300 sm:top-701 md:-left-75 md:top-204 lg:-left-55 lg:top-242 xl:top-100 xl:left-33 2xl:left-65 2xl:top-225">
          <ButtonOptions />
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-284 xl:top-148 lg:top-310 md:top-262 sm:top-805 sm:w-170 sm:h-65 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2 sm:ml-5 sm:mt-2 md:ml-0.5">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1 sm:text-2xl sm:mb-10 sm:mt-3">
              {movieData?.title?.[4]?.title} ({movieData?.title?.[4]?.released})
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 md:text-sm font-light sm:text-xl sm:mr-5 sm:mb-16">
              {movieData?.title?.[4]?.synopsis}
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:-mt-11 2xl:p-2 2xl:w-15 xl:-mt-8 xl:p-2 xl:w-15 xl:ml-4 lg:w-15 lg:ml-4 lg:-mt-10 lg:p-2 md:w-15 md:p-2 md:ml-4 md:-mt-13 sm:p-2 sm:w-15 font-light text-xs">
              {movieData?.title?.[4]?.genre}
            </p>
          </div>
        </div>
      </div>
      <div className="group 2xl:-mb-50 xl:-mb-2 xl:-mt-30 lg:mr-10 lg:mb-4 md:mr-10 sm:mb-5 shadow-teal-500 shadow-md rounded-2xl">
        <img
          src={movieData?.title?.[5]?.image}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="group absolute opacity-0 group-hover:opacity-100 transition duration-300 sm:top-876 md:left-33 md:top-204 lg:left-72 lg:top-242 xl:top-100 xl:left-145 2xl:left-190 2xl:top-225">
          <ButtonOptions />
        </div>
        <div className="group opacity-0 group-hover:opacity-100 transition duration-300"></div>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-284 xl:top-148 lg:top-310 md:top-262 sm:top-980 sm:w-170 sm:h-65 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2 sm:ml-5 sm:mt-2 md:ml-0.5">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1 sm:text-2xl sm:mb-17 sm:mt-3">
              {movieData?.title?.[5]?.title} ({movieData?.title?.[5]?.released})
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 md:text-sm font-light sm:text-xl sm:mr-5 sm:mb-16">
              {movieData?.title?.[5]?.synopsis}
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:-mt-11 2xl:p-2 2xl:w-14 xl:-mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:-mt-10 lg:p-2 md:w-13 md:p-2 md:ml-4 md:-mt-13 sm:p-2 sm:w-13 font-light text-xs">
              {movieData?.title?.[5]?.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
