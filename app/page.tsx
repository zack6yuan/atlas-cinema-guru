// Home Page
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import Genres from "./components/Genres";
import MovieTiles from './components/MovieTiles';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
        <NavBar />
        <SideBar />
        <div className="flex justify-between w-full ml-100 mr-15 -mt-150">
            <Search />
            <Genres />
        </div>
        <div className="-ml-40">
                <MovieTiles />
            {/* <p className="">images for the movie covers are in /public/images</p> */}
        </div>
    </div>
  );
}
