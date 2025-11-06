// Home Page
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import Genres from "./components/Genres";
import MovieTile from './components/MovieTile';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
        <NavBar />
        <SideBar />
        <div className="flex justify-between w-full ml-40 mr-15 -mt-150">
            <Search />
            <Genres />
        </div>
        <div className="">
            <MovieTile />
        </div>
    </div>
  );
}
