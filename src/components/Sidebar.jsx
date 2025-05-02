import GenresDropDown from "./GenresDropDown";

export default function Sidebar() {
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
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eius
                    expedita...
                </div>
                <div className="mt-3 btnCustom">
                    <GenresDropDown />
                </div>
            </div>
        </div>
    );
}

