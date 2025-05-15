import LoginRegisterButton from "./LoginRegisterButton";
import Searchbar from "./SearchBar";

export default function Header() {



    return (
        <nav className="position-relative d-flex align-items-center justify-content-between headerCustom w-100 px-3">

            <div className="d-flex align-items-center">
                <a href="/" className="rehacktor">Rehacktor</a>
            </div>

            <div className="d-none d-md-block" style={{ width: '40%' }}>
                <Searchbar />
            </div>

            <div className="d-flex align-items-center gap-3 ">
                <div className="paste-button d-none d-md-block">
                    <button className="button">Account</button>
                    <div className="dropdown-content">
                        <LoginRegisterButton />
                        <a id="middle" href="/account">Profile Settings</a>
                        <a id="bottom" href="/profile">Favourites</a>
                    </div>
                </div>

                <button
                    className="btn d-flex align-items-center burger"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                >
                    <i className="bi bi-list fs-3 text-white burgerMenu"></i>
                </button>
            </div>

        </nav>


    )
}



