// Home Page
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import Genres from "./components/Genres";
import MovieTiles from "./components/MovieTiles";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
        <div className="flex lg:flex-row 2xl:flex-row items-center justify-center h-screen">
      <NavBar />
      <SideBar />
      <div className="flex justify-between w-full xl:ml-35 xl:mr-10 xl:-mt-185 lg:-mt-185">
        <div className="2xl:mt-30 xl:ml-0 lg:mt-30 lg:ml-35">
            <Search />
        </div> 
        <div className="2xl:mt-30 2xl:mr-0 xl:-mr-25 lg:mt-30 lg:-mr-20">
            <Genres />
        </div>  
      </div>
      {/* <div className=""><MovieTiles /></div> */}
    </div>
    </div>
  );
}
