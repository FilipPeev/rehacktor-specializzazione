import Searchbar from "./SearchBar";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase-client";

export default function Header() {
    const [session, setSession] = useState(null);

    const getSession = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error) setSession(null);
        console.log(data);
        setSession(data);
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error);
        alert('Signed Out 👋')
        getSession();
    }

    useEffect(() => {
        getSession();
    }, []);

    return (
        <nav className="d-flex align-items-center">


            <li><strong>Rehacktor</strong></li>

            {session ? (
                <ul>
                    <li>
                        <details className="dropdown">
                            <summary>Account</summary>
                            <ul dir="rtl">
                                <li><a href="#">Settings</a></li>
                                <li><button onClick={signOut}>logout</button></li>
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
            )};

            <li>
                <Link to="/login">Login</Link>
            </li>


            <li>
                <Link to="/register">Register</Link>
            </li>

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