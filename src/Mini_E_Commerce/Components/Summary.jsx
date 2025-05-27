import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

export default function Summary() {
  const AddCart = useSelector((state) => state.product.AddCart);

  const total = AddCart.reduce((x, item) => x + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Summary Page</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Selected Items:{" "}
          <span className="text-blue-600">{AddCart.length}</span>
        </h3>

        <div className="space-y-2 mb-4">
          {AddCart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-gray-600 border-b pb-1"
            >
              <span>{item.title}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Total Price:{" "}
          <span className="text-green-600">${total.toFixed(2)}</span>
        </h3>
        <NavLink to={"/delivery"}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            CheckOut
          </button>
        </NavLink>
      </div>
    </div>
  );
}
