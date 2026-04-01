import React from 'react';
import { FcCheckmark } from 'react-icons/fc';

const PricingCard = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-10">
        Choose the plan that fits your needs
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Starter */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg">Starter</h3>
          <p className="text-gray-500 text-sm mb-4">
            Perfect for getting started
          </p>

          <div className="flex items-end gap-1 mb-4">
            <span className="text-4xl font-bold text-gray-900">$0</span>
            <span className="text-gray-500 text-lg">/Month</span>
          </div>

          <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
            <li><span className="text-green-500">✔</span> Access to tools</li>
            <li><span className="text-green-500">✔</span> Basic templates</li>
            <li><span className="text-green-500">✔</span> Community support</li>
          </ul>

          <button className="bg-purple-500 text-white px-4 py-2 rounded-full w-full">
            Get Started Free
          </button>
        </div>

        {/* Pro (Highlighted) */}
        <div className="rounded-xl p-6 shadow-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 relative scale-105">
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 rounded">
            Most Popular
          </span>

          <h3 className="font-semibold text-lg">Pro</h3>
          <p className="text-sm mb-4">
            Best for professionals
          </p>

          <div className="flex items-end gap-1 mb-4">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-white text-lg">/Month</span>
          </div>

          <ul className="text-sm space-y-2 mb-6 text-left">
            <li><span className="text-green-500">✔</span> Access to all tools</li>
            <li><span className="text-green-500">✔</span> Unlimited templates</li>
            <li><span className="text-green-500">✔</span> Priority support</li>
            <li><span className="text-green-500">✔</span> Cloud sync</li>
          </ul>

          <button className="bg-white text-purple-600 px-4 py-2 rounded-full w-full font-semibold">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg">Enterprise</h3>
          <p className="text-gray-500 text-sm mb-4">
            For teams and businesses
          </p>

          <div className="flex items-end gap-1 mb-4">
            <span className="text-4xl font-bold text-gray-900">$99</span>
            <span className="text-gray-500 text-lg">/Month</span>
          </div>

          <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
            <li><span className="text-green-500">✔</span> Everything in Pro</li>
            <li><span className="text-green-500">✔</span> <span>Team collaboration</span></li>
            <li><span className="text-green-500">✔</span> <span>Advanced analytics</span></li>
            <li><span className="text-green-500">✔</span> <span>Custom branding</span></li>
          </ul>

          <button className="bg-purple-500 text-white px-4 py-2 rounded-full w-full">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
};

export default PricingCard;