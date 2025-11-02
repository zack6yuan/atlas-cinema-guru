import folder from "../../assets/folder.png";
import star from "../../assets/star.png";
import clock from "../../assets/clock.png";

export default function SideBar() {
  return (
    <div className="bg-teal-500 h-full w-60 fixed left-0 mt-30">
      <div className="mt-5 ml-9 text-left">
        <div className="mb-5">
          <a href="">
            <img src={folder.src} alt="folder-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10">Home</p>
          </a>
        </div>
        <div className="mb-5">
          <a href="">
            <img src={star.src} alt="star-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10">Favorites</p>
          </a>
        </div>
        <div className="mb-5">
          <a href="">
            <img src={clock.src} alt="clock-icon" className="w-6 h-6" />
            <p className="-mt-6 ml-10">Watch Later</p>
          </a>
        </div>
      </div>
    </div>
  );
}
