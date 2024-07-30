import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import Footer from "./Footer";

function RootLayout () {
    return <>
    <Topbar />
    <Navbar />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
}

export default RootLayout;