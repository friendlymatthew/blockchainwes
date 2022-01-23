import NavBarComponent from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <div>
            <header>
                <NavBarComponent />
            </header>

            <main className="h-screen">
                <div>
                    Contact
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>

    )
}