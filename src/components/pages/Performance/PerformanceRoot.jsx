import { Outlet } from "react-router-dom";
import PerformanceNavigation from "./PerformanceNavigation";

export default function PerformanceRoot(){
    return <>
    <PerformanceNavigation />
    <main>
        <Outlet />
    </main>
    </>
}