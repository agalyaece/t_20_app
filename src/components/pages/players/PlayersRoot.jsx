import { Outlet } from "react-router-dom";
import PlayerNavigation from "./PlayerNavigation";

function PlayersRoot(){
    return <>
    <PlayerNavigation />
    <main>
        <Outlet />
    </main>
    </>
}

export default PlayersRoot