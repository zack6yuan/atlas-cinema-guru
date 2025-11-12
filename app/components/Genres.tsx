"use client";
import { useEffect, useState } from "react";


export default function Genres() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeBackgroundColor = () => {
    if (backgroundColor === "transparent") {
      setBackgroundColor("#00d5be");
    } else {
      setBackgroundColor("transparent");
    }
  };

  const changeTextColor =  () => {
    if (textColor === "white") {
      setTextColor("#000061");
    } else {
      setTextColor("white");
    }
  };

  const updateButton = () => {
    changeBackgroundColor();
    changeTextColor();
  };

  // const fetchGenres = async () => {
  //     const response = await fetch('/api/genres');
  //     const data = await response.json();
  //     console.log(data);
  // }
  // fetchGenres();

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch("api/genres");
      if (!response) {
        console.error('Error fetching Genres...')
      } else {
        const data = await response.json();
        console.log(data);
        setCategory(data)
      }
    };
    fetchGenres();
  }, []);

  

  return (
    <div className="">
      <div className="row">
        <p className="mb-2"></p>
      </div>
      <div className="">
        <h1 className="2xl:mb-2">Genres</h1>
        <div className="flex mb-4">
          <button
            className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[0]}</p>
          </button>
          <button
            className="flex items-center cursor-pointer h-10  mr-2 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[1]}</p>
          </button>
          <button
            className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[2]}</p>
          </button>
          <button
            className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[3]}</p>
          </button>
          <button
            className="flex items-center cursor-pointer h-10 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[4]}</p>
          </button>
        </div>
        <div className="flex">
          <button
            className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[5]}</p>
          </button>
          <button
            className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[6]}</p>
          </button>
          <button
            className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[7]}</p>
          </button>
          <button
            className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400 whitespace-nowrap"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[8]}</p>
          </button>
          <button
            className="flex items-center cursor-pointer h-10 p-3 border-2 rounded-full border-teal-400"
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={updateButton}
          >
            <p>{category?.genres?.[9]}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
