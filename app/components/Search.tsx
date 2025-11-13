"use client"
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput)
  }

  return (
    <div className="lg:mr-5">
      <div className="search-container">
        <p>Search</p>
        <input
          type="text"
          value={search}
          placeholder="Search Movies..."
          className="border-2 rounded-3xl h-10 border-teal-400 bg-[#000061] pl-3 mt-2 mb-2 w-100"
          onChange={handleSearchChange}
        />
      </div>
      <div className="year-input flex justify-between">
        <div>
          <p>Min year</p>
          <input
            type="text"
            placeholder="Enter Year..."
            className="border-2 rounded-3xl h-10 border-teal-400 bg-[#000061] pl-3 mt-2"
          />
        </div>
        <div className="year-input ml-4">
          <p>Max year</p>
          <input
            type="text"
            placeholder="Enter Year..."
            className="border-2 rounded-3xl h-10 border-teal-400 bg-[#000061] pl-3 mt-2"
          />
        </div>
      </div>
    </div>
  );
}
