import { auth } from "@/auth";
import film from "../../assets/film.png";
import signOut from "../../assets/signOut.png";

export default async function NavBar() {
    const session = await auth();
    if (!session?.user) return null;
    if (!session.user.email) return null;
  return (
    <div className="bg-teal-400 text-blue-950 w-full h-15 flex justify-between items-center fixed top-0">
      <div className="flex ml-3">
        <img src={film.src} className="h-6 w-6 mr-2 mt-1" alt="" />
        <h1 className="text-2xl font-bold">Cinema Guru</h1>
      </div>
      <div className="flex">
        <p>Welcome {session.user.email}</p>
        <img src={signOut.src} alt="" className="w-4 h-4 ml-3 mt-1" />
        <a href="/api/auth/signin">
          <p className="ml-3 mr-5">Logout</p>
        </a>
      </div>
    </div>
  );
}
