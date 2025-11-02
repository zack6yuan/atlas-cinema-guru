import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="bg-teal-400 font-bold w-full h-10 flex justify-between items-center fixed top-0">
            <h1 className="text-white ml-5">Cinema Guru</h1>
            <div className="flex">
                <p>Welcome zack.yuan@atlasstudents.com</p>
                <a href="">
                    <p className="ml-5 mr-5">Logout</p>
                </a>
            </div>
        </div>
    )
}