import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../Store/Slice";
import Summary from "./Summary";
import Footer from "./Footer";
import { NavLink } from "react-router";

export default function AddCart() {
  const AddCart = useSelector((state) => state.product.AddCart);
  const dispatch = useDispatch();

  const hanldeRemove = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6  text-center">
        <h1 className="head">Selected Product Page</h1>
        <NavLink to={"/"}>
          {" "}
          <strong style={{ color: "blue" }}>Home</strong>
        </NavLink>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-0 lg:grid-cols-4 gap-6">
        {AddCart.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md p-4">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 object-contain mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">Rating: {item.rating}</p>

            <button
              onClick={() => hanldeRemove(item.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>
        <Summary />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
