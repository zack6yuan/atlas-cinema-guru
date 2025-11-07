"use client"
import { useEffect, useState } from "react";

export default function Genres() {

    const [backgroundColor, setBackgroundColor] = useState('transparent')

    const changeBackgroundColor = () => {
        if (backgroundColor === 'transparent') {
            setBackgroundColor('teal');
        } else {
            setBackgroundColor('transparent');
        }
    }

  return (
    <div className="">
      <div className="row">
        <p className="mb-2">Genres</p>
      </div>
      <div className="">
        <div className="flex mb-4">
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor }} onClick={changeBackgroundColor}>
            <p>Romance</p>
          </button>
          <button className="flex items-center cursor-pointer h-10  mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Horror</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Drama</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Action</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 p-3 border-2 rounded-full border-teal-400">
            <p>Mystery</p>
          </button>
        </div>
        <div className="flex">
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Fantasy</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Thriller</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Western</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Sci-Fi</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 p-3 border-2 rounded-full border-teal-400">
            <p>Adventure</p>
          </button>
        </div>
      </div>
    </div>
  );
}
