import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";

export default function ProductDetail() {
  const { id } = useParams();
  const ProductList = useSelector((state) => state.product.ProductList);
  const Product = ProductList.find((prod) => prod.id == id);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-6 border-b border-gray-300 pb-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Detail Page
          </h1>
          <NavLink
            to="/"
            className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
          >
            ← Home
          </NavLink>
        </div>

        {/* Product Section */}
        {!Product ? (
          <div className="max-w-2xl mx-auto bg-white border border-red-300 text-red-600 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Product Not Found</h2>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={Product.image}
                alt={Product.title}
                className="w-full h-80 object-contain border rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {Product.title}
              </h2>
              <p className="text-green-600 text-xl font-semibold">
                ${Product.price}
              </p>
              <div className="text-yellow-600 font-medium">
                ⭐ {Product.rating.rate}{" "}
                <span className="text-gray-600">
                  ({Product.rating.count} reviews)
                </span>
              </div>
              {Product.description && (
                <p className="text-gray-700 italic">{Product.description}</p>
              )}
              <p className="text-sm text-blue-600 font-medium">
                Category: {Product.category}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
