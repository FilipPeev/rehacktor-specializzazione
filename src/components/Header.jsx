import LoginRegisterButton from "./LoginRegisterButton";
import Searchbar from "./SearchBar";

export default function Header() {

    return (
        <nav className="position-relative d-flex align-items-center justify-content-between headerCustom w-100 px-3">

            {/* SINISTRA */}
            <div className="d-flex align-items-center">
                <a href="/" className="rehacktor">Rehacktor</a>
            </div>

            {/* CENTRO (searchbar centrata assoluta) */}
            <div className="ms-5" style={{ width: '40%' }}>
                <Searchbar />
            </div>

            {/* DESTRA */}
            <div className="d-flex align-items-center gap-3">
                <span className="text-white">Ciao, <LoginRegisterButton /></span>
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



