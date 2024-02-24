import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full homepage">
      <div className="w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="my-6 text-4xl">Explore recipes around the world</h1>
        <Link
          href="/types"
          className="shadow-gray-50 bg-gray-300 rounded text-xl py-2 cursor-pointer px-4 hover:bg-blue-500 hover:text-white"
        >
          List of different Cuisines
        </Link>
      </div>
    </div>
  );
}
