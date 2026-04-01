import React from 'react';

const CTA = () => {
    return (
              <section className="py-16 text-center text-white bg-gradient-to-r from-purple-600 to-indigo-700">
        <h2 className="text-3xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mb-6 text-sm opacity-90">
          Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold">
            Explore Products
          </button>

          <button className="border border-white px-6 py-2 rounded-full">
            View Pricing
          </button>
        </div>

        <p className="text-xs mt-4 opacity-75">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>
    );
};

export default CTA;