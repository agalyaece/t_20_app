import { Outlet } from "react-router-dom";

import CricketNavigation from "./CricketNavigation";


function CricketRoot() {
    return <>
        <CricketNavigation />
        <main>
            <Outlet />
        </main>
    </>

}

export default CricketRoot;