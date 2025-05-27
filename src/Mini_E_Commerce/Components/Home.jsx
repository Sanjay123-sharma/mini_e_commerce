import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, ProductApi } from "../Store/Slice";
import { NavLink } from "react-router";

export default function Home() {
  const ProductList = useSelector((state) => state.product.ProductList);
  const error = useSelector((state) => state.product.error);
  const loading = useSelector((state) => state.product.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(ProductApi());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <ShowList ProductList={ProductList} error={error} loading={loading} />
    </div>
  );
}

export const ShowList = ({ ProductList, error, loading }) => {
  const dispatch = useDispatch();
  const hanldeAdd = (id) => {
    dispatch(addProduct(id));
  };
  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 bg-color-orange">Home Page</h1>
        <NavLink to={"/addToCart"} style={{ color: "blue" }}>
          Selected List
        </NavLink>

        <div>
          {loading ? (
            <h1 className="text-xl text-blue-600">Loading...</h1>
          ) : error ? (
            <h1 className="text-xl text-red-600">Error</h1>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {ProductList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                >
                  <div className="text-lg font-semibold mb-2">{item.title}</div>
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 object-contain"
                    />
                  </div>
                  <div className="text-green-600 font-bold text-xl">
                    ${item.price}
                  </div>
                  <div className="text-yellow-500">⭐ {item.rating.rate}</div>
                  <div className="text-blue-500">
                    <NavLink to={`/product/${item.id}`}>view More</NavLink>
                  </div>
                  <div>
                    <button
                      className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded "
                      onClick={() => hanldeAdd(item.id)}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
