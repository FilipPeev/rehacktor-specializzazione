import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/SearchBar";


export default function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100 backgroundCustom">

            <div className="headerCustom">
                <Header />
            </div>

            <aside>
                <Sidebar />
            </aside>

            <div className="flex-fill">
                <Outlet />
            </div>

            <div className="footerCustom"> <Footer /></div>


        </div>
    );
};