import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Cricket")

  function handleClick() {
    setIsOpen(!isOpen)

  }

  function handleActiveItemClick(item) {
    setActiveItem(item)
  }

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center sticky top-0  z-10  bg-zinc-500/80 ">
      <ul className="hidden sm:flex px-4 ">
        <li>
          <NavLink to="/cricket"
            onClick={() => handleActiveItemClick("cricket")}
            className={`text-white ${activeItem === "cricket" && "font-bold text-white underline decoration-zinc-200 underline-offset-8"}`}
            end
          >
            Cricket</NavLink>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className=" sm:hidden z-10">
        <FaBars size={20} className="mr-4 ml-5 cursor-pointer" />
      </div>

      <div onClick={handleClick} className={isOpen
        ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
        : "absolute top-0 h-screen left-[-100%] ease-in duration-500"}>
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <NavLink to="/cricket"
              onClick={() => handleActiveItemClick("cricket")}
              className={`text-white ${activeItem === "cricket" && "font-bold text-white underline decoration-zinc-200 underline-offset-8"}`}
            >
              Cricket
            </NavLink>
          </li>
        </ul>
      </div>

    </div>
  )
}
