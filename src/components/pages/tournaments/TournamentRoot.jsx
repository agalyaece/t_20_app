import { Outlet } from "react-router-dom";
import TournamentNavigation from "./TournamentNavigation";


export default function TournamentRoot  ()  {
  return <>
  <TournamentNavigation />
  <main>
    <Outlet />
  </main>
  
  </>
}
