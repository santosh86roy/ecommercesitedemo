import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    // const cartItems = useSelector((state) => state.cartItems || []);
    const cartItemsLength = useSelector((state) => state.cart.cartItems.length);
    // const cartItemsLength = cartItems.length || 0

  return (
    <header className="bg-violet-500 text-white sticky top-0 flex justify-between items-center w-full h-12 px-6 ">
      <Link to="/">
        <span className="flex justify-center items-center text-2xl font-bold ">
          🛒 EKart
        </span>
      </Link>
      <Link to="/cart">My Cart ({cartItemsLength})</Link>
    </header>
  );
}
