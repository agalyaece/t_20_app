import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function CricketNavigation() {

    const [isOpen, setIsOpen] = useState(false)
    const [activeItem, setActiveItem] = useState("T-20")

    function handleClick() {
        setIsOpen(!isOpen)

    }

    function handleActiveItemClick(item) {
        setActiveItem(item)
    }

    return (
        <div className="w-full min-h-[50px] flex  justify-between items-center  top-0  z-10 bg-zinc-200 ">
            <ul className="hidden sm:flex px-4 ">
                <li>
                    <NavLink to="/cricket/selectedteams"
                        onClick={() => handleActiveItemClick("Teams")}
                        className={`text-gray-500 px=20 py-2 m-5 p-2 cursor-pointer ${activeItem === "Teams" && "font-bold text-gray   underline decoration-zinc-200 underline-offset-8 "}`}
                        end>
                        Teams
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cricket/players"
                        onClick={() => handleActiveItemClick("Players")}
                        className={`text-gray-500 px=20 py-2 m-5 p-2  cursor-pointer ${activeItem === "Players" && "font-bold text-gray underline decoration-zinc-200 underline-offset-8"}`}
                    >
                        Players
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cricket/icc_world_cup"
                        onClick={() => handleActiveItemClick("Tournaments")}
                        className={`text-gray-500 px=20 py-2 m-5 p-2  cursor-pointer ${activeItem === "Tournaments" && "font-bold text-gray underline decoration-zinc-200 underline-offset-8"}`}
                    >
                        Tournaments
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/cricket/performance"
                        onClick={() => handleActiveItemClick("Player Performance")}
                        className={`text-gray-500 px=20 py-2 m-5 p-2  cursor-pointer ${activeItem === "Player Performance" && "font-bold text-gray underline decoration-zinc-200 underline-offset-8"}`}
                    >
                       Player Performance
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/cricket/tournaments"
                        onClick={() => handleActiveItemClick("Fantasy Tournaments")}
                        className={`text-gray-500 px=20 py-2 m-5 p-2  cursor-pointer ${activeItem === "Fantasy Tournaments" && "font-bold text-gray underline decoration-zinc-200 underline-offset-8"}`}
                    >
                        Fantasy Tournaments
                    </NavLink>
                </li>
            </ul>

            {/* Hamburger menu */}
            <div onClick={handleClick} className=" sm:hidden z-10">
                <FaBars size={20} className="mr-4 ml-5 cursor-pointer" />
            </div>


            <ul className="h-full w-full text-center pt-12 ">
                <div onClick={handleClick} className={isOpen
                    ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0  px-4 py-20 top-0 w-full h-screen bg-black/90  py-30 flex flex-col"
                    : "absolute top-0 h-screen left-[-100%] ease-in duration-500"}>
                    <li className="text-2xl py-7 mt-4">
                        <NavLink to="/cricket/selectedteams"
                            onClick={() => handleActiveItemClick("Teams")}
                            className={`text-gray-500 px=20 py-2 m-5 p-2 cursor-pointer ${activeItem === "Teams" && "font-bold text-gray   underline decoration-zinc-200 underline-offset-8 "}`}
                            end>
                            Teams
                        </NavLink>
                    </li>
                    <li className="text-2xl py-7">
                        <NavLink to="/cricket/players"
                            onClick={() => handleActiveItemClick("Players")}
                            className={`text-white mt-5 ${activeItem === "Players" && "font-bold text-white underline decoration-zinc-200 underline-offset-8"}`}

                        >
                            Players</NavLink>
                    </li>
                    <li className="text-2xl py-5">
                        <NavLink to="/cricket/icc_world_cup"
                            onClick={() => handleActiveItemClick("Tournaments")}
                            className={`text-white m-5 ${activeItem === "Tournaments" && "font-bold text-white underline decoration-zinc-200 underline-offset-8"}`}
                        >
                            Tournaments
                        </NavLink>
                    </li>
                    <li className="text-2xl py-5">
                        <NavLink to="/cricket/performance"
                            onClick={() => handleActiveItemClick("Player Performance")}
                            className={`text-white m-5 ${activeItem === "Player Performance" && "font-bold text-white underline decoration-zinc-200 underline-offset-8"}`}
                        >
                            Player Performance
                        </NavLink>
                    </li>
                    <li className="text-2xl py-5">
                        <NavLink to="/cricket/tournaments"
                            onClick={() => handleActiveItemClick("Fantasy Tournaments")}
                            className={`text-white px=20 py-2 m-5 p-2  cursor-pointer ${activeItem === "Fantasy Tournaments" && "font-bold text-gray underline decoration-zinc-200 underline-offset-8"}`}
                        >
                            Fantasy Tournaments
                        </NavLink>
                    </li>
                </div>
            </ul>


        </div>
    )
}























// import {  NavLink } from "react-router-dom";

// function CricketNavigation() {
//     return (

//         <div className="mb-4  border-gray-200 dark:border-gray-700">
//             <ul className="flex flex-wrap -mb-px  font-bold text-xl size-96 text-center " id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
//                 <NavLink to={"/cricket/tournaments"}>
//                     <li className="me-2 mr-10 mt-10" role="presentation">
//                         <button className="inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" type="button" role="tab" aria-selected="false">T-20 World Cup</button>
//                     </li>
//                 </NavLink>
//                 <NavLink to={"/"}>
//                     <li className="me-2 mt-10 mr-10" role="presentation">
//                         <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" type="button" role="tab" aria-selected="false">IPL</button>
//                     </li>
//                 </NavLink>

//             </ul>
//         </div>

//     );
// }

