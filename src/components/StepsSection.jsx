import React from 'react';
import planeImg from '/src/assets/rocket.png';
import packageImg from "../assets/package.png";
import userImg from "../assets/user.png";


const StepsSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Get Started In 3 Steps
      </h2>
      <p className="text-gray-500 mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="bg-white rounded-xl p-6 shadow-sm relative">

          <button className="text-md absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-bold text-white flex items-center justify-center shadow-md hover:scale-110 transition">
            01
          </button>

          <div className="w-18 h-18 mx-auto bg-purple-100 flex items-center justify-center rounded-full">
            <img src={userImg} alt="" className="w-8 h-8" />
          </div>

          <h3 className="font-semibold mt-4">Create Account</h3>
          <p className="text-sm text-gray-500 mt-2">
            Sign up for free in seconds. No credit card required.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl p-6 shadow-sm relative">
          <button className="text-md absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-bold text-white flex items-center justify-center shadow-md hover:scale-110 transition">
            02
          </button>
          <div className="w-18 h-18 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl font-bold">
            <img src={packageImg} alt="" />
          </div>
          <h3 className="font-semibold mt-4">Choose Products</h3>
          <p className="text-sm text-gray-500 mt-2">
            Browse our catalog and select tools you need.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl p-6 shadow-sm relative">
          <button className="text-md absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-bold text-white flex items-center justify-center shadow-md hover:scale-110 transition">
            03
          </button>
          <div className="w-18 h-18 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl font-bold">
            <img src={planeImg} alt="" />
          </div>
          <h3 className="font-semibold mt-4">Start Creating</h3>
          <p className="text-sm text-gray-500 mt-2">
            Download and start using immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;