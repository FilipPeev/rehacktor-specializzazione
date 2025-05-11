export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container text-center">
                <p className="mb-0">&copy; {new Date().getFullYear()} Rehacktor. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
}