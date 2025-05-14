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
                <a href="/profile">{session?.user.user_metadata.first_name}!</a>
                <button onClick={signOut} className="btnLogout">Logout</button>
            </span>


        ) : (
            <>
                <div>

                    <Link to="/login" className="">Accedi</Link>

                </div>
            </>
        )

    )

}