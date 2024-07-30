import { FaDrupal } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Topbar() {
    return (
        <Link to="/" >
            <div className="flex items-center px-4 py-2 cursor-pointer">
                <FaDrupal size={60} className="text-gray-800 inline-block ml-10 mr-2" />
                <h1 className="inline-block text-xl font-bold text-gray-700">Cricketer&apos;s Performance Analyzer </h1>

            </div>
        </Link>
    )
}
