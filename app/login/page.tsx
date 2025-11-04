import atlasLogo from "../../assets/atlasLogo.svg";

export default function Login() {
  return (
    <div className="flex items-center justify-center bg-gray-300  h-screen w-screen">
      <div className="bg-white p-10 rounded-xl w-80">
        <div className="">
          <img src={atlasLogo.src} alt="atlas-logo" className="h-15 w-60" />
          <button className="text-black">Sign in with GitHub</button>
        </div>
      </div>
    </div>
  );
}
