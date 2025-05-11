import { useNavigate, Link } from "react-router";
import { useContext } from "react";
import SessionContext from "../context/SessionContext";


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
            <ul>
                <li>
                    <details className="dropdown">
                        <summary>Hey {session?.user.user_metadata.first_name}!</summary>
                        <ul dir="rtl">
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <button onClick={signOut} className="btnHeader">logout</button>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul >
        ) : (

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle mt-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                </button>
                <ul className="dropdown-menu bg-warning ">
                    <li className="text-dark">
                        <Link to="/login" className="">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="">Register</Link>
                    </li>
                </ul>
            </div>
        )

    )

}