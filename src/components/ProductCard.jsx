import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ product, carts, setCarts }) => {

    // const isInCart = carts.some((item) => item.id === product.id);

    const formatPrice = (price) => {
  if (price.includes("/")) {
    const [amount, duration] = price.split("/");
    return { amount, duration };
  } else {
    const [amount, duration] = price.split(" ");
    return { amount, duration };
  }
};

    const [isInCart, setIsInCart] = useState(false);

    const handleCart = () => {
        if (isInCart) {
            toast.error("Item already in cart!")
            return;
        }
        toast.success("Item added to cart!");
        setIsInCart(true);
        setCarts([...carts, product]);
    };
    return (
        <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg transition">
            <button
                className={`rounded-2xl absolute top-3 right-3 px-3 py-1
    ${product.tag === "New"
                        ? "text-green-600 bg-green-300"
                        : product.tag === "Popular"
                            ? "text-purple-600 bg-purple-300"
                            : "text-orange-600 bg-orange-300"
                    }`}
            >
                {product.tag}
            </button>
            <div>
                <div className="border border-gray-300 rounded-full p-4 inline-block">
                    <img src={product.image} alt={product.title} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-4">High-quality digital tool for productivity.</p>

                <p className="text-xl font-bold mb-4">{formatPrice(product.price).amount}<span className="text-gray-500 text-lg">/{formatPrice(product.price).duration}</span></p>

                <ul className="space-y-2 mb-6">
                    {product.features.map((f, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="text-green-500">✔</span> {f}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={handleCart}
                disabled={isInCart}
                className={`mt-auto text-white py-2 text-xl rounded-full hover:opacity-90 transition
    ${isInCart ? 'bg-green-500 cursor-not-allowed' : 'bg-gradient-to-r from-purple-500 to-indigo-500'}`}
            >
                {isInCart ? "Product Added to Cart!" : "Buy Now"}
            </button>
        </div>
    );
};

export default ProductCard;