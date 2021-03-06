import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import Card from "../components/Card";

const db = [
  {
    title: "Education",
    desc: "Attend weekly workshops loremipsum wasda london brooklyn bronx loremipsum wasda london brooklyn bronx",
    svg: "",
    actions: ["See Curriculum", "Learn More"],
  },
  {
    title: "Community",
    desc: "Join developers, artists, and more loremipsum wasda london brooklyn bronx loremipsum wasda london brooklyn bronx",
    svg: "",
    actions: ["Visit Space"],
  },
  {
    path: "experiment",
    title: "Experiment",
    desc: "Build project loremipsum wasda london brooklyn bronx loremipsum wasda london brooklyn bronx",
    svg: "",
    actions: ["Learn More"],
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBar />
      </header>

      <main className={styles.main}>
        <section id="hero" className="grid grid-cols-1 place-items-center">
          <div className="text-center font-extrabold text-5xl py-32 ">
            A space for Blockchain innovation
          </div>

          <div className="text-center text-3xl font-bold mb-4" style={{ fontFamily: "Kadwa"}}>What we do</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-12/12 md:w-9/12">
            {db.map((service) => {
              return (
                <Card
                  title={service.title}
                  desc={service.desc}
                  svg={service.svg}
                  actions={service.actions}
                />
              );
            })}
          </div>
        </section>
      </main>

      <section id="workshops">
        <div className="py-32 grid grid-cols-1 place-items-center mt-12" style={{ backgroundColor: "#f1f1f1"}}>
            <section className="w-8/12 text-center" style={{ fontFamily: "Lato"}}>
              <div className="text-3xl font-extrabold mb-4">
                Our Mission
              </div>
              <div className="text-xl">
                We want to create a community of developers and artists that create decentralized applications for the Wesleyan community. We hope to use Bojack to tackle issues like 
              </div>
            </section>
        </div>
      </section>

      <section id="">
        <div className="py-32 grid grid-cols-1 place-items-center mt-12" >
            <section className="border border-black w-8/12" style={{ fontFamily: "Lato"}}>
              <div className="text-3xl font-extrabold">
                Visit Our Next Workshop
              </div>
              <div className="text-xl">
                We meet on every Sunday to meet and discuss lorem ipsum lorem ipsum lorem ipsum
              </div>
            </section>
        </div>
      </section>

     


      <section id="getBojack">
        <div className="bg-yellow-200 py-32 grid grid-cols-1 place-items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
            <section className="col-span-2 text-center px-4 md:text-right">
              <div
                className="text-3xl space-y-2"
                style={{ fontFamily: "kadwa", fontWeight: 800 }}
              >
                <div className="text-5xl font-extrabold">Bojack ($BJK)</div>
                <div>Wesleyan's first cryptocurrency</div>
              </div>
              <div
                style={{ fontFamily: "lato" }}
                className="text-xl font-medium pt-2 md:pt-2 pb-6 "
              >
                A social governence token that reflects members of the Wesleyan
                community
              </div>

              <div className="flex space-x-2 justify-center md:justify-end">
                <button className="border-2 border-black rounded-md px-3 py-2 text-black font-medium">
                  Our Mission
                </button>
                <button className="border-2 border-black rounded-md px-3 py-2 text-black font-medium">
                  Get Bojack
                </button>
              </div>
            </section>

            <div className="">
              <Image src="/bojack.png" width={320} height={330} />
            </div>
          </div>
        </div>
      </section>

      <section id="">
        <div className="py-32 grid grid-cols-1 place-items-center mt-12" >
            <section className="border border-black w-8/12" style={{ fontFamily: "Lato"}}>
              <div className="text-3xl font-extrabold">
               Title Here
              </div>
              <div className="text-xl">
                Desk
              </div>
            </section>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
