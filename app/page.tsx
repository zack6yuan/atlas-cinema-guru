// Home Page
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import Genres from "./components/Genres";
import MovieTiles from "./components/MovieTiles";
import PaginationButtons from './components/PaginationButtons';

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex lg:flex-row 2xl:flex-row items-center justify-center h-screen">
        <NavBar />
        <SideBar />
        <div className="flex flex-col sm:ml-40 sm:mr-37 sm:-mt-90 md:flex-row justify-between w-full xl:ml-35 xl:mr-10 xl:-mt-185 lg:-mt-185 md:scale-95 md:-mt-155">
          <div className="2xl:mt-35 xl:mt-35 xl:ml-0 lg:mt-35 lg:ml-35 md:ml-35 md:mr-5">
            <Search />
          </div>
          <div className="2xl:mt-35 2xl:mr-0 xl:mt-35 xl:mr-1 lg:mt-35 lg:mr-10">
            <Genres />
          </div>
        </div>
      </div>
      <div className="grid 2xl:-mt-295 2xl:ml-5 xl:-mt-60 xl:ml-12 lg:ml-0 md:-mt-50">
        <MovieTiles />
      </div>
      <div className="flex items-center justify-center sm:mt-15 sm:-ml-10 sm:mb-15 md:ml-20 lg:-ml-5 xl:ml-8 2xl:ml-20">
        <PaginationButtons />
      </div>
    </div>
  );
}
