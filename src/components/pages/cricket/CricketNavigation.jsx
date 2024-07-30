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
        <div className="w-full min-h-[50px] flex justify-between items-center  top-0  z-10 bg-zinc-200 ">
            <ul className="hidden sm:flex px-4 ">
                <li>
                    <NavLink to="/cricket/tournaments"
                        onClick={() => handleActiveItemClick("T-20")}
                        className={`text-gray-500 px=20 py-2 m-5 p-2 cursor-pointer ${activeItem === "T-20 World Cup" && "font-bold text-white   bg-slate-500  rounded-lg "}`}
                        end>
                        T-20 World Cup
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/"
                        onClick={() => handleActiveItemClick("IPL")}
                        className={`text-gray-500 cursor-pointer ${activeItem === "IPL" && "font-bold text-white underline decoration-zinc-200 underline-offset-8"}`}
                    >
                        IPL
                    </NavLink>
                </li>
            </ul>

            {/* Hamburger menu */}
            <div onClick={handleClick} className=" sm:hidden z-10">
                <FaBars size={20} className="mr-4 ml-5 cursor-pointer" />
            </div>

            <div onClick={handleClick} className={isOpen
                ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
                : "absolute top-20 h-screen left-[-100%] ease-in duration-400"}>
                <ul className="h-full w-full text-center pt-12 mt-20 ">
                    <li>
                        <NavLink to="/cricket/tournaments"
                            onClick={() => handleActiveItemClick("T-20 World Cup")}
                            className={`text-white m-5 ${activeItem === "T-20 World Cup" && "font-bold text-white underline decoration-zinc-200 underline-offset-8"}`}
                            end
                        >
                            T-20 World Cup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/"
                            onClick={() => handleActiveItemClick("IPL")}
                            className={`text-white mt-5 ${activeItem === "IPL" && "font-bold text-white underline decoration-zinc-200 underline-offset-8"}`}
                            end
                        >
                            IPL</NavLink>
                    </li>
                </ul>
            </div>

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

