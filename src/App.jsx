import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Rating from './components/Rating'
import Product from './components/Product'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import Cart from './components/Cart'
import StepsSection from './components/StepsSection'
import PricingCard from './components/PricingCard'
import Footer from './components/Footer'
import CTA from './components/CTA'

const getProducts = async () => {
  const res = await fetch('/Data.json')
  const data = await res.json()
  return data
}

const productPromise = getProducts()

function App() {

  const [carts, setCarts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  return (
    <>
      <Navbar carts={carts} />
      <Header />
      <Rating />

      {/* Section Heading */}
      <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-0 space-y-4 sm:space-y-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Premium Digital Tools
        </h2>
        <p className='text-gray-400 text-sm sm:text-base lg:text-xl max-w-2xl mx-auto'>
          Choose from our curated collection of premium digital products designed
          <br className="hidden md:block" />
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid justify-center mt-6 px-4">
        <div className="flex flex gap-2 sm:gap-0 bg-white border border-gray-200 p-2 rounded-4xl sm:rounded-full">

          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 sm:px-6 w-full sm:w-[150px] py-2 rounded-full text-sm sm:text-base lg:text-xl font-semibold transition-all
            ${activeTab === "products"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "bg-white"}
          `}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-4 sm:px-6 w-full sm:w-[150px] py-2 rounded-full text-sm sm:text-base lg:text-xl font-semibold transition-all
            ${activeTab === "cart"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "bg-white"}
          `}
          >
            Cart ({carts.length})
          </button>

        </div>
      </div>

      <div className='text-2xl px-6 lg:px-52 font-bold'>
        {
          activeTab === "cart" ? <p>Cart ({carts.length})</p> : <p>Products</p>
        }
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-10 xl:px-20 mt-8">
        {activeTab === "products" ? (
          <Product
            productPromise={productPromise}
            carts={carts}
            setCarts={setCarts}
          />
        ) : (
          <Cart carts={carts} setCarts={setCarts} />
        )}
      </div>

      {/* Other Sections */}
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <StepsSection />
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <PricingCard />
      </div>
      <CTA />
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App