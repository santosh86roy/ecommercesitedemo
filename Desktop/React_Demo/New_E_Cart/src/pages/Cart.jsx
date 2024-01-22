import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../reducers/cart.reducer";
import { Link } from "react-router-dom";
import emptyCart from "../img/empty-cart.svg";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  return (
    <>
      <div className="px-8 py-4 w-full">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>

        {cartItems?.length === 0 ? (
          <>
            {/* <p className="mt-2">No items in Cart</p>
            <Link to="/">
              <button className="underline">Back to Home</button>
            </Link> */}
            <div className=" w-full">
              <div className="flex flex-col items-center w-full">
                <img
                  src={emptyCart}
                  alt="order_confirmed"
                  className="w-52 mt-24"
                />
                <p className="text-lg font-semibold mt-4 ">Empty Cart!</p>
                <span className="text-neutral-500">No items in the Cart</span>
                <Link to="/">
                  <button className="text-sm underline">Back to Home</button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <ul className="mt-2">
            {cartItems.map((product, index) => (
              <li key={index} className="flex my-8 first:mt-4">
                <img
                  src={product.imageUrl}
                  alt="product_image"
                  className="w-32"
                />
                <div className="flex flex-col ml-6">
                  <span className="font-medium">{product.name}</span>
                  <span className="text-neutral-400 text-sm">
                    {product.description}
                  </span>
                  <span className="text-xl font-bold">₹ {product.price}</span>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="ml-4 self-start text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems?.length > 0 ? (
        <div className="flex justify-evenly bg-indigo-50 w-[calc(100vw-288px)] h-24 fixed bottom-0 right-0 px-12 py-8">
          <div>
            <span className="text-xl font-semibold text-indigo-950">
              Order Total :
              <span className="text-2xl font-bold">₹ {totalPrice}</span>
            </span>
          </div>
          <div>
            <Link to="/buy">
              <button className="px-4 py-2 bg-indigo-500 text-white font-semibold text-xl rounded">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
