// Home Page
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import Genres from "./components/Genres";
import MovieTiles from "./components/MovieTiles";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center h-screen">
      <NavBar />
      <SideBar />
      <div className="flex justify-between w-full xl:ml-35 xl:mr-10 xl:-mt-185 lg:ml-100 lg:mr-75 lg:-mt-185">
        <div className="2xl:mt-30 lg:mt-30">
            <Search />
        </div> 
        <div className="2xl:mt-30 lg:mt-30">
            <Genres />
        </div>  
      </div>
      <div className="">{/* <MovieTiles /> */}</div>
    </div>
  );
}
