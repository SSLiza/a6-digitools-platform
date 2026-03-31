import React from 'react';

const StepsSection = () => {
    return (
        <section className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-10">
          Simple process to get started quickly
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-14 h-14 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl font-bold">
              👤
            </div>
            <h3 className="font-semibold mt-4">Create Account</h3>
            <p className="text-sm text-gray-500 mt-2">
              Sign up for free in seconds. No credit card required.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-14 h-14 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl font-bold">
              📦
            </div>
            <h3 className="font-semibold mt-4">Choose Products</h3>
            <p className="text-sm text-gray-500 mt-2">
              Browse our catalog and select tools you need.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-14 h-14 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl font-bold">
              🚀
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