import star from "../../assets/star.png";
import clock from "../../assets/clock.png";

const displayFavoritedAlert = () => {
  alert("Added to Favorites!");
};

const displayWatchLaterAlert = () => {
  alert("Added to Watch Later!");
};

export default function ButtonOptions() {
  return (
    <div className="absolute sm:top-5 sm:left-145 flex-row h-10 w-20">
      <button
        onClick={displayFavoritedAlert}
        className="hover:scale-130 transition duration-300"
      >
        <img src={star.src} alt="star-icon" className="mr-2 cursor-pointer" />
      </button>
      <button
        onClick={displayWatchLaterAlert}
        className="hover:scale-130 transition duration-300"
      >
        <img src={clock.src} alt="clock-icon" className="cursor-pointer" />
      </button>
    </div>
  );
}
