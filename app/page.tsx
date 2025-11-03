import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SideBar from "./components/SideBar";

export default async function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
        <NavBar />
        <SideBar />
        <Search />
    </div>
  );
}
