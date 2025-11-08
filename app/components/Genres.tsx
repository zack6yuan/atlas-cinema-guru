"use client"
import { useEffect, useState } from "react";

export default function Genres() {

    const [backgroundColor, setBackgroundColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const changeBackgroundColor = () => {
        if (backgroundColor === 'transparent') {
            setBackgroundColor('#00d5be');
        } else {
            setBackgroundColor('transparent');
        }
    }

    const changeTextColor = () => {
        if (textColor === 'white') {
            setTextColor('#000061');
        } else {
            setTextColor('white');
        }
    }

    const updateButton = () => {
        changeBackgroundColor();
        changeTextColor();
    }

  return (
    <div className="">
      <div className="row">
        <p className="mb-2">Genres</p>
      </div>
      <div className="">
        <div className="flex mb-4">
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Romance</p>
          </button>
          <button className="flex items-center cursor-pointer h-10  mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Horror</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Drama</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Action</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Mystery</p>
          </button>
        </div>
        <div className="flex">
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Fantasy</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Thriller</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Western</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 mr-2 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Sci-Fi</p>
          </button>
          <button className="flex items-center cursor-pointer h-10 p-3 border-2 rounded-full border-teal-400" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={updateButton}>
            <p>Adventure</p>
          </button>
        </div>
      </div>
    </div>
  );
}
