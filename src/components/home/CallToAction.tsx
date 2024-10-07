export default function CallToAction() {
  return (
    <div className="p-5">
      <section className="bg-orange-500 py-16 rounded-xl">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need help at your home.
            <br />
            Helper on the way
          </h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-center space-x-4">
            <button className="bg-white text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 shadow">
              Become helper &rarr;
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-orange-400 shadow">
              Find helper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
