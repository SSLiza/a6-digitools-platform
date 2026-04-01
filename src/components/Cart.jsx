import { toast } from "react-toastify";
import Empty from "./Empty";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => {
  const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
  return sum + numericPrice;
}, 0);


  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };
  
const handleDelete = (item) => {
  const filteredArray = carts.filter((c) => c.id !== item.id);
  setCarts(filteredArray);
  toast.success("Item deleted!");
  console.log(filteredArray);
};



  return (
    <div className="my-8 p-10 max-w-7xl mx-auto  border border-gray-200 p-5 rounded-lg">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {carts.length === 0 ? (
        <Empty />
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => ( 
              <div
                className="flex items-center justify-between bg-gray-100 rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div className="border border-gray-300 rounded-full p-4 inline-block">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-gray-500 text-sm">{String(item.price).slice(0, 3)}</p>
                  </div>
                </div>

                <div className="flex gap-10">
                  <button
                    onClick={() => handleDelete(item)}
                    className="rounded-full px-2 text-red-500"
                  >
                  Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between p-5 mt-5 rounded-lg">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn text-white bg-gradient-to-r from-purple-500 to-indigo-500 w-full  rounded-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
