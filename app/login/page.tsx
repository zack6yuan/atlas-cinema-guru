import atlasLogo from "../../assets/logo.png";

export default function Login() {
  return (
    <div className="bg-white flex justify-center items-center pt-20 pb-20 w-100">
        <div className="justify-center">
            <img src={atlasLogo.src} alt="atlas-logo"/>
            <h1 className="">Login</h1>
        </div>
    </div>
  );
}
