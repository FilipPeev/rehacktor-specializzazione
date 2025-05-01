import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container text-center">
                <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                        <Link to="/" className="text-decoration-none text-white">Home</Link>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                        <Link to="/about" className="text-decoration-none text-white">Chi siamo</Link>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                        <Link to="/contatti" className="text-decoration-none text-white">Contatti</Link>
                    </li>
                </ul>
                <p className="mb-0">&copy; {new Date().getFullYear()} Il Tuo Sito. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
}