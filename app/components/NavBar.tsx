import { auth } from "@/auth";
import film from "../../assets/film.png";
import signOut from "../../assets/signOut.png";

export default async function NavBar() {
  const session = await auth();
  if (!session?.user) return null;
  if (!session.user.email) return null;
  return (
    <div className="bg-teal-400 text-blue-950 w-full h-15 flex justify-between items-center fixed top-0 z-50">
      <div className="flex ml-3">
        <a href="/">
          <div className="flex md:w-50">
            <img
              src={film.src}
              className="2xl:h-6 2xl:w-6 2xl:mr-2 2xl:mt-1 xl:h-6 xl:w-6 xl:mt-1 xl:mr-2 lg:h-6 lg:w-6 lg:mt-1 lg:mr-2 md:w-6 md:h-6 md:mt-1 md:mr-2 sm:w-6 sm:h-6 sm:mr-2 sm:mt-1 w-6 h-6 mr-2 mt-0.5"
              alt=""
            />
            <h1 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl sm:w-37 font-bold xs:scale-200">
              Cinema Guru
            </h1>
          </div>
        </a>
      </div>
      <div className="hidden md:flex">
        <p>Welcome, {session.user.email}</p>
        <img
          src={signOut.src}
          alt=""
          className="2xl:w-4 2xl:h-4 2xl:ml-7 2xl:mt-1 xl:w-4 xl:h-4 xl:mt-1 xl:ml-7 lg:w-4 lg:h-4 lg:mt-1 lg:ml-7 md:w-4 md:h-4 md:mt-1 md:ml-7"
        />
        <a href="/api/auth/signin">
          <p className="ml-3 mr-5 hover:ml-5 transition duration-300">Logout</p>
        </a>
      </div>
    </div>
  );
}
