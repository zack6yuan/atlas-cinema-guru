"use client";
import { useEffect, useState } from "react";
import placeholder from "../../assets/placeholder.svg";
import rain from "public/images/b132955e-1e64-4b08-8954-03971bd05352.webp";
import aurora from "public/images/665cb6f0-0d20-43ae-9a29-cf374c4d3805.webp";
import city from "public/images/7f006109-8d44-4b40-8c08-9fff70adcf89.webp";
import underwater from "public/images/957b5138-70f2-4592-aaf4-f8d9fe526d75.webp";
import haunted from "public/images/e41d543f-b12f-443d-a6dc-784711938ba7.webp";
import ghost from "public/images/d7ed8c07-228b-4a8e-b44a-e2dd99fd28cc.webp";

export default function MovieTiles() {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const displayAlert = () => {
    alert("Added to favorites!");
  };

  if (!movieData) {
    return (
      <div className="grid items-center justify-center lg:mt-5 lg:ml-1">
        <p className="2xl:text-2xl font-bold">Movie data loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto 2xl:ml-40 2xl:mt-5 2xl:w-369 2xl:h-360 xl:w-7xl xl:h-200 xl:ml-30 relative grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 lg:w-250 md:grid-cols-2 md:w-210 md:ml-40 justify-center items-center 2xl:gap-15 xl:gap-10 md:gap-4">
      <div
        className="group cursor-pointer 2xl:-mb-180 lg:mr-10 lg:mb-4 md:mr-10"
        onClick={displayAlert}
      >
        <img
          src={rain.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-177 xl:top-55 lg:top-68 md:top-58 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1">
              After the Rain (2016)
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 font-light">
              Two strangers form a bond as they try to rebuild their lives after
              a devastating flood.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:mt-5 2xl:p-2 2xl:w-14 xl:mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:mt-7 lg:p-2 md:w-13 md:p-2 md:ml-4 md:mt-3 font-light text-xs">
              Drama
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer 2xl:-mb-180 lg:mr-10 lg:mb-4 md:mr-10">
        <img
          src={aurora.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-177 xl:top-55 lg:top-68 md:top-58 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1">
              Aurora's Light (2016)
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 font-light">
              A reclusive lighthouse keeper and a lost traveler form an unlikely
              friendship.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:mt-5 2xl:p-2 2xl:w-14 xl:mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:mt-7 lg:p-2 md:w-13 md:p-2 md:ml-4 md:mt-3 font-light text-xs">
              Drama
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer 2xl:-mb-180 lg:mr-10 lg:mb-4 md:mr-10">
        <img
          src={city.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-177 xl:top-55 lg:top-189 md:top-155 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1">
              Before the Dawn (2021)
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 font-light">
              A couple fights to survive as a pandemic sweeps across the globe.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:mt-5 2xl:p-2 2xl:w-14 xl:mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:mt-7 lg:p-2 md:w-13 md:p-2 md:ml-4 md:mt-3 font-light text-xs">
              Thriller
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer 2xl:-mb-50 xl:-mb-2 xl:-mt-30 lg:mr-10 lg:mb-4 md:mr-10">
        <img
          src={underwater.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-284 xl:top-148 lg:top-189 md:top-155 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1">
              Beneath the Surface (2021)
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 font-light">
              A marine biologist discovers a hidden underwater civilization.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:mt-5 2xl:p-2 2xl:w-14 xl:mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:mt-12 lg:p-2 md:w-13 md:p-2 md:ml-4 md:mt-3 font-light text-xs">
              Thriller
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer 2xl:-mb-50 xl:-mb-2 xl:-mt-30 lg:mr-10 lg:mb-4 md:mr-10">
        <img
          src={haunted.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-284 xl:top-148 lg:top-310 md:top-252 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1">
              Beyond the Mist (2019)
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 font-light">
              A historian uncovers a hidden village lost in time and must decide
              whether to leave.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:mt-5 2xl:p-2 2xl:w-14 xl:mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:mt-7 lg:p-2 md:w-13 md:p-2 md:ml-4 md:mt-3 font-light text-xs">
              Thriller
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer 2xl:-mb-50 xl:-mb-2 xl:-mt-30 lg:mr-10 lg:mb-4 md:mr-10">
        <img
          src={ghost.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 2xl:top-284 xl:top-148 lg:top-310 md:top-252 bg-[#000061] 2xl:w-103 2xl:h-45 xl:w-90 xl:h-45 lg:w-113 lg:h-45 md:w-93 md:h-35 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="2xl:ml-3 2xl:mt-2 font-bold 2xl:text-xl xl:text-xl md:text-lg xl:mt-4 xl:ml-5 lg:text-lg lg:ml-4 lg:mt-4 md:ml-4 md:mt-2 md:mb-1">
              Beyond the Veil (2020)
            </p>
            <p className="2xl:ml-3 2xl:mt-1 2xl:mr-3 2xl:text-lg xl:ml-5 xl:mr-3 xl:mt-3 xl:text-md lg:text-md lg:ml-4 lg:mr-5 lg:mt-5 md:ml-4 md:mr-4 font-light">
              A paranormal investigator enters the afterlife to save his
              brother's soul.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl 2xl:mr-102 2xl:ml-2 2xl:mt-5 2xl:p-2 2xl:w-14 xl:mt-8 xl:p-2 xl:w-14 xl:ml-4 lg:w-13 lg:ml-4 lg:mt-7 lg:p-2 md:w-13 md:p-2 md:ml-4 md:mt-3 font-light text-xs">
              Thriller
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
