export default function Header() {
    return (
        <nav className="d-flex align-items-center sticky-top">
            <ul className="">
                <li><strong>Rehacktor</strong></li>
            </ul>
            <ul className="">
                <li>
                    <a href="#" className="secondary">Services</a>
                </li>
                <li>
                    <details className="dropdown">
                        <summary>Account</summary>
                        <ul>
                            <li className="my-1"><a href="#">Profile</a></li>
                            <li className="my-1"><a href="#">Settings</a></li>
                            <li className="my-1"><a href="#">Logout</a></li>
                        </ul>
                    </details>
                </li>
            </ul>

            {/*Pulsante per aprire la sidebar*/}
            <a
                className="btnHeader"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
            >
                Menu
            </a>
        </nav>
    )
}