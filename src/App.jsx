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
      <Navbar />
      <Header />
      <Rating />

      <div className="text-center space-y-5">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className='text-gray-400 text-xl'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>


      <div className="flex justify-center mt-6">
        <div className="flex bg-gray-200 p-2 rounded-full w-[400px] justify-between">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full text-xl
            ${activeTab === "products"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "bg-gray-200"}
          `}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full text-xl
            ${activeTab === "cart"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "bg-gray-200"}
          `}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>
      {activeTab === "products" ? (
        <Product
          productPromise={productPromise}
          carts={carts}
          setCarts={setCarts}
        />
      ) : (
        <Cart carts={carts} setCarts={setCarts} />
      )}
      <StepsSection />
      <PricingCard />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
