// Favorites Page
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MovieTiles from "../components/MovieTiles";
import PaginationButtons from "../components/PaginationButtons";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex lg:flex-row 2xl:flex-row items-center h-screen">
        <NavBar />
        <SideBar />
      </div>
      <div className="flex justify-center w-full 2xl:-mt-215 md:-mt-20">
        <h1 className="font-bold 2xl:text-5xl md:text-4xl md:ml-25 lg:-ml-1 xl:-ml-10 sm:text-4xl sm:-mt-195 2xl:mt-5 2xl:ml-1">
          Favorites
        </h1>
      </div>
      <div className="2xl:-mt-110 2xl:-ml-5 md:-mt-55 sm:-mt-55 xl:-mt-65">
        <MovieTiles />
      </div>
      <div className="flex items-center justify-center sm:mt-15 sm:mb-15 md:ml-10">
        <PaginationButtons />
      </div>
    </div>
  );
}
