import React from "react";

import { useState } from "react";

export default function Address() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [State, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const handleAddress = () => {
    if (
      name.length === 0 ||
      mobile.length === 0 ||
      State.length === 0 ||
      pinCode.length === 0 ||
      address.length === 0
    ) {
      alert("Fill the all Input Fields");
    } else {
      alert("Order Placed Successfully");
      setName("");
      setMobile("");
      setState("");
      setPinCode("");
      setAddress("");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Enter Address
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile:
            </label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              minLength={10}
              maxLength={11}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State:
            </label>
            <select
              value={State}
              onChange={(e) => setState(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--select--</option>
              <option value="Delhi">Delhi</option>
              <option value="Amritsar">Amritsar</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Himachal">Himachal</option>
              <option value="Goa">Goa</option>
              <option value="Kerala">Kerala</option>
              <option value="Jammu">J&K</option>
              <option value="UP">UP</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address:
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              pinCode:
            </label>
            <input
              type="text"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleAddress}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
