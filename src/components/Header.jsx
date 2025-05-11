import Searchbar from "./SearchBar";

export default function Header() {

    return (
        <nav className="d-flex align-items-center headerCustom">

            <a href="/" className="rehacktor">Rehacktor</a>

            < Searchbar />

            <button
                className="btn d-flex align-items-center me-2 burger"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
            >
                <i className="bi bi-list fs-3 text-white burgerMenu"></i>
            </button>


        </nav>
    )
}



