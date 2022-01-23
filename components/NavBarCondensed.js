import Link from "next/link";

export default function NavBarComponent() {
  return (
    <div className="bg-black grid grid-cols-1 h-8 ">
      <Link href="/">
        <button className="justify-center group flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white md:group-hover:text-yellow-200 md:transition md:ease-in md:duration-300"
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
            className="text-white text-sm pl-2 py-2 font-bold md:group-hover:text-yellow-200 md:transition md:ease-in md:duration-300"
            style={{ fontFamily: "Kadwa" }}
          >
            Blockchain | WES
          </div>
        </button>
      </Link>
    </div>
  );
}
