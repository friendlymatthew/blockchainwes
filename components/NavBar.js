import Link from "next/link";

export default function NavBarComponent() {
  return (
    <div className="bg-black grid grid-cols-1 lg:grid-cols-2 place-items-center gap-2 py-2 h-auto ">
      <Link href="/">
        <button className="group flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white md:group-hover:text-yellow-200 md:transition md:ease-in md:duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
          <div
            className="text-white text-3xl pl-4 py-2 font-bold md:group-hover:text-yellow-200 md:transition md:ease-in md:duration-300"
            style={{ fontFamily: "Kadwa" }}
          >
            Blockchain | WES
          </div>
        </button>
      </Link>

      <div
        className="flex w-8/12 lg:w-6/12 justify-around text-white text-2xl"
        style={{ fontFamily: "Lato" }}
      >
        <div class="dropdown ">
            <a className="group flex items-center">
              <button
                tabindex="0"
                className="text-white text-lg md:text-xl group-focus:text-yellow-200 group-hover:text-yellow-200 py-3 md:transition md:ease-in md:duration-100"
              >
                Learn
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mt-1 ml-1 text-white group-focus:text-yellow-200 group-hover:text-yellow-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

          <ul
            tabindex="0"
            className="p-2 shadow menu dropdown-content text-lg text-black rounded-box w-64"
            style={{ backgroundColor: "#fff29b" }}
          >
            <li className="md:hover:bg-opacity-60 md:hover:font-semibold bg-opacity-100 border rounded-xl border-gray-700 mb-2">
              <Link href="/learn/#resources">
                <a>Resources</a>
              </Link>
            </li>
            <li className="md:hover:bg-opacity-60 md:hover:font-semibold bg-opacity-100 border rounded-xl border-gray-700 mb-2">
              <Link href="/learn/#curriculum">
                <a>Curriculum</a>
              </Link>
            </li>
            <li className="md:hover:bg-opacity-60 md:hover:font-semibold bg-opacity-100 border rounded-xl border-gray-700 mb-2">
              <Link href="/learn/#schedule">
                <a>Workshop Schedule</a>
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/join">
          <button className="text-white text-lg md:text-xl  hover:text-yellow-200 py-3 md:transition md:ease-in md:duration-100">
            Join
          </button>
        </Link>

        <Link href="/bojack">
          <button className="text-white text-lg md:text-xl  hover:text-yellow-200 py-3 md:transition md:ease-in md:duration-100">
            $Bojack
          </button>
        </Link>

        <Link href="/contact">
          <button className="text-white text-lg md:text-xl  hover:text-yellow-200 py-3 md:transition md:ease-in md:duration-100">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
