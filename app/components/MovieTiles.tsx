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

  if (!movieData) {
    return (
      <div className="flex items-center justify-center">
        <p className="2xl:text-2xl font-bold">Movie data loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto 2xl:ml-40 2xl:mt-5 w-420 h-400 relative grid grid-cols-3 justify-center items-center gap-30">
      <div className="group cursor-pointer -mb-205">
        <img
          src={rain.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-186 bg-[#000061] w-120 h-45 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="ml-3 mt-2 font-bold 2xl:text-xl">
              After the Rain (2016)
            </p>
            <p className="ml-3 mt-1 mr-1 2xl:text-lg font-light">
              Two strangers form a bond as they try to rebuild their lives after
              a devastating flood.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl mr-102 ml-2 mt-3 p-2 font-light text-xs">
              Drama
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer -mb-205">
        <img
          src={aurora.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-186 bg-[#000061] w-120 h-45 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="ml-3 mt-2 font-bold 2xl:text-xl">
              Aurora's Light (2016)
            </p>
            <p className="ml-3 mt-1 mr-1 2xl:text-lg font-light">
              A reclusive lighthouse keeper and a lost traveler form an unlikely
              friendship.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl mr-102 ml-2 mt-3 p-2 font-light text-xs">
              Drama
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer -mb-205">
        <img
          src={city.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-186 bg-[#000061] w-120 h-45 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="ml-3 mt-2 font-bold 2xl:text-xl">Before the Dawn (2021)</p>
            <p className="ml-3 mt-1 mr-1 2xl:text-lg font-light">
              A couple fights to survive as a pandemic sweeps across the globe.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl mr-102 ml-2 mt-3 p-2 font-light text-xs">
              Thriller
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer -mb-25">
        <img
          src={underwater.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-311 bg-[#000061] w-120 h-45 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="ml-3 mt-2 font-bold 2xl:text-xl">Beneath the Surface (2021)</p>
            <p className="ml-3 mt-1 mr-1 2xl:text-lg font-light">
              A marine biologist discovers a hidden underwater civilization.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl mr-102 ml-2 mt-3 p-2 font-light text-xs">
              Thriller
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer -mb-25">
        <img
          src={haunted.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-311 bg-[#000061] w-120 h-45 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="ml-3 mt-2 font-bold 2xl:text-xl">Beyond the Mist (2019)</p>
            <p className="ml-3 mt-1 mr-1 2xl:text-lg font-light">
              A historian uncovers a hidden village lost in time and must decide whether to leave.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl mr-102 ml-2 mt-3 p-2 font-light text-xs">
              Thriller
            </p>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer -mb-25">
        <img
          src={ghost.src}
          alt="placeholder image"
          className="rounded-2xl border-2 border-[#1dd2af]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-311 bg-[#000061] w-120 h-45 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-[#1dd2af]">
          <div className="2xl:mt-5 2xl:ml-2">
            <p className="ml-3 mt-2 font-bold 2xl:text-xl">Beyond the Veil (2020)</p>
            <p className="ml-3 mt-1 mr-1 2xl:text-lg font-light">
              A paranormal investigator enters the afterlife to save his brother's soul.
            </p>
            <p className="bg-[#1dd2af] rounded-4xl mr-102 ml-2 mt-3 p-2 font-light text-xs">
              Thriller
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
