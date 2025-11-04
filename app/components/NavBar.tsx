import film from "../../assets/film.png";

export default function NavBar() {
  return (
    <div className="bg-teal-400 font-bold w-full h-15 flex justify-between items-center fixed top-0">
      <div className="flex ml-3">
        <img src={film.src} className="h-6 w-6 mr-2 mt-1" alt="" />
        <h1 className="text-white text-2xl">Cinema Guru</h1>
      </div>
      <div className="flex">
        <p>Welcome zack.yuan@atlasstudents.com</p>
        <a href="../login">
          <p className="ml-5 mr-5">Logout</p>
        </a>
      </div>
    </div>
  );
}
