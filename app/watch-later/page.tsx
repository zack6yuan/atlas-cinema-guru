// Watch Later Page
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function WaterLater() {
  return (
    <div className="flex items-center justify-center h-screen">
        <NavBar />
        <SideBar />
        <div className="flex justify-start font-bold text-5xl">
            <h1>Watch Later</h1>
        </div>
    </div>
  );
}