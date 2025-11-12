// Watch Later Page
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MovieTiles from "../components/MovieTiles";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex lg:flex-row 2xl:flex-row items-center h-screen">
        <NavBar />
        <SideBar />
      </div>
      <div className="flex justify-center w-full 2xl:-mt-215 md:-mt-215">
        <h1 className="font-bold 2xl:text-5xl md:text-4xl">Watch Later</h1>
      </div>
      <div className="2xl:-mt-110 2xl:-ml-5 xl:-mt-80"><MovieTiles /></div>
    </div>
  );
}