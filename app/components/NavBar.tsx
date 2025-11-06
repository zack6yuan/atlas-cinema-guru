import { auth } from "@/auth";
import film from "../../assets/film.png";

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
        <a href="/api/auth/signin">
          <p className="ml-5 mr-5">Logout</p>
        </a>
      </div>
    </div>
  );
}
