import Searchbar from "./SearchBar";
import { Link, useNavigate } from "react-router";
import supabase from "../supabase/supabase-client";
import SessionContext from "../context/SessionContext"
import { useContext } from "react";

export default function Header() {
    const navigate = useNavigate();
    const { session } = useContext(SessionContext);

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error);
        alert('Signed out 👋');
        navigate('/');
    }

    return (
        <nav className="d-flex align-items-center">


            <li><strong>Rehacktor</strong></li>

            {session ? (
                <ul>
                    <li>
                        <details className="dropdown">
                            <summary>Hey {session?.user.user_metadata.first_name}!</summary>
                            <ul dir="rtl">
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li>
                                    <button onClick={signOut}>logout</button>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <Link to="/login" className="secondary">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="secondary">Register</Link>
                    </li>
                </ul>
            )}

            < Searchbar />

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