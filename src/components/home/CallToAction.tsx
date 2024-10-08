import Link from "next/link";

export default function CallToAction() {
  return (
    <div className=" p-5 xl:p-12">
      <div className="bg-orange-500 py-16 h-96 text-center rounded-xl">
        <div className="container h-full flex gap-5 items-center justify-center flex-col mx-auto">
          <h1 className=" md:text-5xl text-xl font-bold text-white">
            Need help at your home.
            <span className="block">Helper on the way</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/Helper/Helper-signup">
              <button className="bg-white text-orange-500 py-2 px-4 rounded shadow">
                Become helper <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </Link>
            <Link href="/User/User-signup">
              <button className="bg-transparent border border-white text-white py-2 px-4 rounded shadow">
                Find helper
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
