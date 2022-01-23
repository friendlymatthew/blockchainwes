import Link from "next/link";
import NavBarComponent from "../components/NavBar";

const resourcesDb = [
    {
        title: "Bitcoin Whitepaper",
        author: "Satoshi Nakamoto",
        url: "https://bitcoin.org/bitcoin.pdf",
    },
    {
        title: "Blockchain Demo",
        author: "Anders Brownworth",
        url: "https://andersbrownworth.com/blockchain/blockchain"
    }
]

export default function LearnPage() {
  return (
    <div>
      <header>
        <NavBarComponent />
      </header>
      <main style={{ padding: "0 4rem" }} className="space-y-24">
        <section id="resources">
          <div
            style={{ fontFamily: "Kadwa" }}
            className="text-2xl font-semibold"
          >
            Resources
          </div>
          <ul>
            {resourcesDb.map((resource) => {
                return (
                    <li>
                        <a href={resource.url} target="_blank" refs="noreferrer" className= "text-blue-700 md:text-black md:hover:underline md:hover:scale-105 md:hover:text-blue-700 md:ease-in md:duration-300 md:transition">
                            {resource.title} - {resource.author}
                        </a>
                    </li>
                )
            })}
            
          </ul>
        </section>
        <section id="curriculum">
          <div
            style={{ fontFamily: "Kadwa" }}
            className="text-2xl font-semibold"
          >
            Curriculum
          </div>
        </section>
        <section id="schedule">
          <div
            style={{ fontFamily: "Kadwa" }}
            className="text-2xl font-semibold"
          >
            Schedule
          </div>
        </section>
      </main>
    </div>
  );
}
