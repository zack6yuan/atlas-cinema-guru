import folder from "../../assets/folder.png";
import star from "../../assets/star.png";
import clock from "../../assets/clock.png";

export default function SideBar() {
  return (
    <div className=" bg-teal-500 h-screen md:block sm:w-full sm:h-18 md:w-25 md:h-screen sm:-mt-189 md:hover:w-60 md:mt-30 fixed left-0 mt-30 group z-50">
      <div className="flex sm:justify-around md:block sm:-ml-10 sm:mt-5 md:mt-6 md:ml-9 text-left">
        <div className="sm:w-1/3 md:w-10 text-center md:mb-5 sm:hover:translate-x-5 transition duration-200">
          <a href="/">
            <img src={folder.src} alt="folder-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10 sm:-ml-25 md:ml-10 md:opacity-0 md:group-hover:opacity-100">Home</p>
          </a>
        </div>
        <div className="sm:w-1/3 sm:-ml-40 md:ml-0 md:w-10 md:mb-5 sm:hover:translate-x-5 transition duration-200">
          <a href="/favorites">
            <img src={star.src} alt="star-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10 md:opacity-0 md:group-hover:opacity-100">Favorites</p>
          </a>
        </div>
        <div className="sm:w-1/3 sm:-ml-40 md:ml-0 md:w-10 sm:hover:translate-x-5 transition duration-200 ">
          <a href="/watch-later">
            <img src={clock.src} alt="clock-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10 md:w-100 md:mb-5 md:opacity-0 md:group-hover:opacity-100">Watch Later</p>
          </a>
        </div>
      </div>
      <div className="latest-activities bg-teal-300 text-center sm:hidden md:block h-full pt-3 ml-5 mr-5 rounded-lg opacity-0 group-hover:opacity-100 text-blue-950">
        <p className="pb-3 font-bold">Latest Activities</p>
        <p className="text-left ml-2 mr-2 mb-3">10/2/2020, 5:11:17 PM Added <span className="font-bold">Before the Dawn</span> to Watch Later</p>
        <p className="text-left ml-2 mr-2 mb-3">10/2/2022, 5:15:17 PM Favorited <span className="font-bold">After the Rain</span></p>
        <p className="text-left ml-2 mr-2 mb-3">1/2/2024, 9:20:54 AM Favorited <span className="font-bold">Aurora's Light</span></p>
        <p className="text-left ml-2 mr-2 mb-3">4/2/2025, 2:17:26 AM Added <span className="font-bold">Beyond the Veil</span> to Watch Later</p>
        <p className="text-left ml-2 mr-2 mb-3">18/2/2025, 5:11:22 PM Added <span className="font-bold">Beyond the Mist</span> to Watch Later</p>
      </div>
    </div>
  );
}
