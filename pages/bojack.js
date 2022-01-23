import NavBarCondensedComponent from "../components/NavBarCondensed";
import Footer from "../components/Footer";
import BojackBar from "../components/BojackBar";

export default function BojackPage() {
    return (
        <div>
            <header>
                <NavBarCondensedComponent />
                <BojackBar />
            </header>

            <main className="h-screen bg-yellow-200" >
                <div>
                    Bojack
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>

    )
}