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
          <div className="flex">
            <img src={film.src} className="2xl:h-6 2xl:w-6 2xl:mr-2 2xl:mt-1 xl:h-6 xl:w-6 xl:mt-1 xl:mr-2" alt="" />
            <h1 className="2xl:text-2xl xl:text-2xl font-bold">Cinema Guru</h1>
          </div>
        </a>
      </div>
      <div className="flex">
        <p>Welcome, {session.user.email}</p>
        <img src={signOut.src} alt="" className="2xl:w-4 2xl:h-4 2xl:ml-7 2xl:mt-1 xl:w-4 xl:h-4 xl:mt-1 xl:ml-7" />
        <a href="/api/auth/signin">
          <p className="ml-3 mr-5">Logout</p>
        </a>
      </div>
    </div>
  );
}
