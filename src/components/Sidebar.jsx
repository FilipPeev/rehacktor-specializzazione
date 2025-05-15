import GenresDropDown from "./GenresDropDown";
import LoginRegisterButton from "./LoginRegisterButton";
import Searchbar from "./SearchBar";
import { useContext } from "react";
import SessionContext from "../context/SessionContext";

export default function Sidebar() {

    const { session } = useContext(SessionContext);

    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    Rehacktor
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body sidebarCustom">
                <div className="d-block d-md-none my-3">
                    <div className="paste-button">
                        <button className="button">Ciao, {session?.user.user_metadata.first_name}!</button>
                        <div className="dropdown-content">
                            <a id="top" href="/account">Profile Settings</a>
                            <a id="middle" href="/profile">Favourites</a>
                            <LoginRegisterButton />
                        </div>
                    </div>
                </div>
                <div className="d-block d-md-none my-4">
                    <Searchbar />
                </div>
                <div className="mt-3">
                    <GenresDropDown />
                </div>
            </div>
        </div >
    );
}

