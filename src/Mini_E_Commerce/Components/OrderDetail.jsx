import { useSelector } from "react-redux";

export default function OrderDetail() {
  const orderItems = useSelector((state) => state.product.Order);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="bg-blue-600 text-white px-6 py-3 rounded-md mb-6">
          <h1 className="text-2xl font-bold">Order Confirmation</h1>
        </div>

        {orderItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No orders found.</p>
        ) : (
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded border"
                />
                <div className="flex-1">
                  <h2 className="text-md font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    ⭐ Rating: {item.rating}
                  </p>
                  <p className="text-green-600 font-bold mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
