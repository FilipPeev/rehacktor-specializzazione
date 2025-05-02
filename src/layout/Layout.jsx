import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";


export default function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100 backgroundCustom">

            <div className="headerCustom">
                <Header />
            </div>

            <Sidebar />

            <div className="flex-fill">
                <Outlet />
            </div>

            <div className="footerCustom"> <Footer /></div>


        </div>
    );
};