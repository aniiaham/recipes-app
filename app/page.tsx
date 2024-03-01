import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full homepage">
      <div className="w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="my-8 text-4xl text-blue-950 font-semibold uppercase">
          Explore recipes around the world
        </h1>
        <Link
          href="/types"
          className="shadow-gray-50 bg-blue-500 rounded text-xl py-2 font-medium cursor-pointer px-4 hover:bg-blue-600 text-white uppercase"
        >
          List of different Cuisines
        </Link>
      </div>
    </div>
  );
}
