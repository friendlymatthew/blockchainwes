import Link from "next/link";

export default function BojackBar() {
  return (
    <div className="bg-yellow-200 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-2 py-2 h-auto ">
      <Link href="/">
        <button className="group flex ">
        
          <div
            className="text-black text-3xl pl-4 py-2 font-bold md:group-hover:text-yellow-200 md:transition md:ease-in md:duration-300"
            style={{ fontFamily: "Kadwa" }}
          >
            Bojack
          </div>
        </button>
      </Link>

      <div
        className="flex w-8/12 lg:w-6/12 justify-around text-black text-2xl"
        style={{ fontFamily: "Lato" }}
      >
        <div class="dropdown ">
            <a className="group flex items-center">
              <button
                tabindex="0"
                className="text-black text-lg md:text-xl py-3 md:transition md:ease-in md:duration-100"
              >
                Use Bojack
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mt-1 ml-1 text-black group-focus:text-black group-hover:text-black"
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
              
                <a>Get BJK</a>
            </li>
            <li className="md:hover:bg-opacity-60 md:hover:font-semibold bg-opacity-100 border rounded-xl border-gray-700 mb-2">
              <Link href="/learn/#curriculum">
                <a>Applications</a>
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
            Start Here
          </button>
        </Link>

        <Link href="/bojack">
          <button className="text-white text-lg md:text-xl  hover:text-yellow-200 py-3 md:transition md:ease-in md:duration-100">
            Our Mission
          </button>
        </Link>

       
      </div>
    </div>
  );
}
