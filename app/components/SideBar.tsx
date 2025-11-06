import folder from "../../assets/folder.png";
import star from "../../assets/star.png";
import clock from "../../assets/clock.png";

export default function SideBar() {
  return (
    <div className="bg-teal-500 h-full w-25 hover:w-60 fixed left-0 mt-30 group">
      <div className="mt-5 ml-9 text-left">
        <div className="mb-5">
          <a href="/">
            <img src={folder.src} alt="folder-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10 opacity-0 group-hover:opacity-100">Home</p>
          </a>
        </div>
        <div className="mb-5">
          <a href="/favorites">
            <img src={star.src} alt="star-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10 opacity-0 group-hover:opacity-100">Favorites</p>
          </a>
        </div>
        <div className="mb-5">
          <a href="/watch-later">
            <img src={clock.src} alt="clock-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10 opacity-0 group-hover:opacity-100">Watch Later</p>
          </a>
        </div>
      </div>
      <div className="latest-activities bg-teal-400 text-center h-full pt-3 ml-5 mr-5 rounded-lg opacity-0 group-hover:opacity-100">
        <p className="pb-3">Latest Activities</p>
        <p className="text-left ml-2 mr-2">10/2/1014, 5:11:17 PM Added <span className="font-bold">Before the Dawn</span> to watch later</p>
      </div>
    </div>
  );
}
