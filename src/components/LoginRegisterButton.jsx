import { useNavigate, Link } from "react-router";
import { useContext } from "react";
import SessionContext from "../context/SessionContext";
import supabase from "../supabase/supabase-client";

export default function LoginRegisterButton() {
    const navigate = useNavigate();
    const { session } = useContext(SessionContext);


    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error);
        alert('Signed out 👋');
        navigate('/');
    }
    return (

        session ? (

            <span>
                <a href="/" onClick={(e) => { e.preventDefault(); signOut(); }} className="dropdown-link" id="bottom">Logout.</a>
            </span>

        ) : (
            <>
                <span>
                    <Link to="/login" className="">Accedi.</Link>
                </span>
            </>
        )

    )

}