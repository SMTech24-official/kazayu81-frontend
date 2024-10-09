import React from "react";

const ContentSection = () => {
  return (
    <section className="content-sec mx-4 mt-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Need help at your home.
            <br />
            <span className="text-orange-500">Helper on the way</span>
          </h2>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="Helper/Helper-signup.html">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                Become helper <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </a>
            <a href="User/User-signup.html">
              <button className="bg-white text-black border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                Find helper
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
