"use client";
import React, { useState } from "react";
import { data } from "./Data/data.js";

export default function ListOrder() {
  const [food, setFoods] = useState(data);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  const openForm = (item) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const order = {
      foodName: selectedItem.name,
      name: formData.get("name"),
      address: formData.get("address"),
      quantity: formData.get("quantity"),
    };
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Order response:", result);
      setOrderHistory([...orderHistory, result.order]);
      setIsFormOpen(false);
      setIsSuccessOpen(true);

      setTimeout(() => {
        setIsSuccessOpen(false);
      }, 4000);
    } else {
      console.error("Failed to place order");
    }
  };

  return (
    <div
      id="Category"
      className="w-full px-4 py-28 bg-fixed bg-cover bg-center bg-opacity-40"
      style={{
        backgroundImage:
          "url('https://c0.wallpaperflare.com/preview/434/993/117/ruin-architecture-angkor-wat-khmer.jpg')", // Replace with your image path
      }}
    >
      <div className="mt-10 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <h3 className="mx-4 mb-0 text-center capitalize text-2xl md:text-4xl font-bold text-shadesOfBlue text-gray-950">
          ម្ហូបដែលមាននៅក្នុងស្រុកយេីងសាច់អាំង
          <span className="font-bold text-5xl text-red-700 mt-2">BBQ</span>
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div>
          <div className="flex justify-between flex-wrap rounded-3xl mt-8">
            <button
              onClick={() => setFoods(data)}
              className="m-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200"
            >
              ម្ហូបដែលមានទាំងអស់
            </button>
            <button
              onClick={() => filterType("drink")}
              className="m-1 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200"
            >
              ្របភេទជាម្ហូបខ្មែរ
            </button>
            <button
              onClick={() => filterType("food")}
              className="m-1 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200"
            >
              ប្រភេទជាសាច់អាំង
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-200"
            >
              ប្រភេទជាស៊ុប
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition duration-200"
            >
              ប្រភេទជាភេសជ្ជៈ
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => (
          <div
            key={index}
            className="border bg-black bg-opacity-50 text-yellow-800 shadow-lg"
          >
            <picture>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[350px] object-cover"
              />
            </picture>

            <div className="flex justify-between px-2 py-4">
              <p className="text-lg text-white">{item.name}</p>
              <div className="flex mt-2">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.211 1.191-5.931 5.773 1.4 8.167-7.348-3.863-7.348 3.863 1.4-8.167-5.931-5.773 8.211-1.191z" />
                  </svg>
                ))}
              </div>
              <p>
                <span className="bg-white text-gray-900 p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
            <div className="flex justify-end pb-7">
              <button
                onClick={() => openForm(item)}
                className="bg-yellow-900 text-white px-6 py-3 mr-3 rounded hover:bg-yellow-600"
              >
                ធ្វេីការកម្មង់ឥឡូវនេះ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Form Pop-up */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Order Form</h2>
            <p className="mb-4">{`Ordering: ${selectedItem.name}`}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="1"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeForm}
                  className="mr-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isSuccessOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Order Placed Successfully!</h2>
          </div>
        </div>
      )}
    </div>
  );
}
