import { Outlet } from "react-router-dom"
import TeamsNavigation from "./TeamsNavigation"


function TeamsRoot () {
  return <>
  <TeamsNavigation />
  <main>
    <Outlet />
  </main>
  
   </>
}


export default TeamsRoot;

