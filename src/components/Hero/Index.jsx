"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Burger1 from "@/public/Assets/Hero/Burger1.png";
import Burger2 from "@/public/Assets/Hero/Burger2.png";
import Burger3 from "@/public/Assets/Hero/Burger3.png";
import Burger4 from "@/public/Assets/Hero/Burger4.png";
import PhoneBooking from "@/public/Assets/Hero/PhoneBooking.png";

export default function Index() {
  const [isBookingFormVisible, setBookingFormVisible] = useState(false);
  const [isSuccessVisible, setSuccessVisible] = useState(false);
  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const booking = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      date: formData.get("date"),
    };
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });

    if (response.ok) {
      setBookingFormVisible(false);
      setSuccessVisible(true);
      setTimeout(() => {
        setSuccessVisible(false);
      }, 3000);
    } else {
      console.error("Failed to book a table");
    }
  };

  return (
    <div
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20230614/original/pngtree-beautiful-image-of-angkor-wat-in-angkor-temples-in-cambodia-picture-image_3537830.jpg')",
      }}
    >
      <div className="grid max-w-screen-2xl px-8 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4  text-5xl font-serif tracking-tight leading-none md:text-6xl xl:text-7xl dark:text-white">
            ភោជនីយដ្ឋាន
            <span className="text-red-700">ស្រុកយេីងសាច់អាំងBBQ</span>
            <br />
            សម្រាប់​គ្រួសារ​ដែល​សម្បូរ​ដោយ.
          </h1>
          <h1 className="mt-14 text-4xl font-serif tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            រីករាយជាមួយ
            <span className="text-red-700">ស្រុកយេីងសាច់អាំងBBQ</span>
            <br />
            ធ្វើរបស់អ្នកត្រេកអរ.
          </h1>
          <button
            onClick={() => setBookingFormVisible(true)}
            className="relative inline-flex items-center justify-center px-5 py-3 mt-10 mr-3 text-base font-medium text-center text-red-700 rounded-lg bg-white hover:text-gray-900"
          >
            ធ្វេីការកក់តុ
            <Image
              src={PhoneBooking}
              alt="Icon-Image"
              width={25}
              className="ml-2 transition-opacity duration-300 opacity-100 hover:opacity-0"
            />
          </button>
        </div>
        <div className="hidden  mt-5 lg:col-span-5 lg:flex">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full"
          >
            <SwiperSlide>
              <Image
                src={Burger1}
                alt="Burger Image 1"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={Burger2}
                alt="Burger Image 2"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={Burger3}
                alt="Burger Image 3"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={Burger4}
                alt="Burger Image 3"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Booking Pop-up Form */}
      {isBookingFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">កក់តុ</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  ឈ្មោះ
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Make sure this name matches
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  លេខទូរស័ព្ទ
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone" // Make sure this name matches
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  កាលបរិច្ឆេទ
                </label>
                <input
                  type="date"
                  id="date"
                  name="date" // Make sure this name matches
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-700 text-white p-2 rounded-md"
              >
                បញ្ជូន
              </button>
            </form>
            <button
              onClick={() => setBookingFormVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {isSuccessVisible && (
        <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50">
          <div className="bg-green-500 text-white rounded-lg p-4 max-w-md w-full text-center">
            <p>ការកក់តុរបស់អ្នកទទួលបានជោគជ័យ🎉🎉🎉!</p>
          </div>
        </div>
      )}
    </div>
  );
}
