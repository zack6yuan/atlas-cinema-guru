import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default async function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
        <NavBar />
        <SideBar />
    </div>
  );
}
