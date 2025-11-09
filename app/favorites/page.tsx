// Favorites Page
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import placeholder from "../../assets/placeholder.svg";
export default function Favorites() {
  return (
    <div className="flex items-center justify-center h-screen">
      <NavBar />
      <SideBar />
      <div className="flex justify-start font-bold text-5xl">
        <div className="relative grid grid-cols-3 w-240 h-90">
          <div className="group cursor-pointer">
            <img
              src={placeholder.src}
              alt="placeholder image"
              className="rounded-2xl border-2 border-teal-500"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-50 bg-[#000061] w-80 h-30 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-teal-500">
              <p className="ml-3 mt-2">After the Rain (2016)</p>
              <p className="ml-3 mt-1 mr-1 text-xs">
                Two strangers form a bond as they try to rebuild their lives
                after a devastating flood.
              </p>
              <p className="bg-teal-500 rounded-4xl mr-63 ml-2 mt-3 p-2 text-xs">
                Drama
              </p>
            </div>
          </div>
          <div className="group cursor-pointer">
            <img
              src={placeholder.src}
              alt="placeholder image"
              className="rounded-2xl border-2 border-teal-500"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-50 bg-[#000061] w-80 h-30 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-teal-500">
              <p className="ml-3 mt-2">After the Rain (2016)</p>
              <p className="ml-3 mt-1 mr-1 text-xs">
                Two strangers form a bond as they try to rebuild their lives
                after a devastating flood.
              </p>
              <p className="bg-teal-500 rounded-4xl mr-63 ml-2 mt-3 p-2 text-xs">
                Drama
              </p>
            </div>
          </div>
          <div className="group cursor-pointer">
            <img
              src={placeholder.src}
              alt="placeholder image"
              className="rounded-2xl border-2 border-teal-500"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 top-50 bg-[#000061] w-80 h-30 rounded-b-2xl text-sm border-l-2 border-r-2 border-b-2 border-teal-500">
              <p className="ml-3 mt-2">After the Rain (2016)</p>
              <p className="ml-3 mt-1 mr-1 text-xs">
                Two strangers form a bond as they try to rebuild their lives
                after a devastating flood.
              </p>
              <p className="bg-teal-500 rounded-4xl mr-63 ml-2 mt-3 p-2 text-xs">
                Drama
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
