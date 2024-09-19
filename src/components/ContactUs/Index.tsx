"use client";
import React from "react";
import { IoMail } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      id="Contact"
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20230614/original/pngtree-beautiful-image-of-angkor-wat-in-angkor-temples-in-cambodia-picture-image_3537830.jpg')", // Replace with your image path
      }}
    >
      <div className="px-6 py-16 mx-auto">
        <iframe
          data-aos="fade-up"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.6260858068867!2d104.94212947568887!3d12.000354435426056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ea116a8edc96f%3A0x7cccdd29b8926ae7!2z4Z6f4Z-S4Z6a4Z674Z6A4Z6Z4Z-B4Z644Z6E4Z6f4Z624Z6F4Z-L4Z6i4Z624Z-G4Z6E4oCL!5e0!3m2!1sen!2skh!4v1725116228933!5m2!1sen!2skh"
          width="100%"
          height="800"
          loading="lazy"
          className="rounded-xl mt-4"
        ></iframe>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
          <div
            data-aos="fade-right"
            className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800"
          >
            <span className="inline-block p-3 text-blue-500 rounded-lg dark:bg-white">
              <IoMail size={30} />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              ជជែកជាមួយការលក់
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              និយាយទៅកាន់ក្រុមការងារដោយមិត្តភាព
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400 cursor-pointer">
              bbgsrokyerng444@hotmail.com
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800"
          >
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-white">
              <MdAddLocationAlt size={30} />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              ទីតាំងពួកយើង
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              សូមអញ្ជើញមកកាន់កន្លែងរបស់យើង..
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              ភូមិបាធាយ, ឃុំបាធាយ, ស្រុកបាធាយ, ខេត្តកំពង់ចាម។ <br />
              Batheay Village, Batheay Commune, Batheay District, Kampong Cham
              Province.6A
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800"
          >
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-white">
              <FaPhoneAlt size={30} />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              ហៅមកកាន់ពួកយើង
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              ច័ន្ទ - អាទិត្យ ចាប់ពីម៉ោង 10 ព្រឹកដល់ម៉ោង 9 យប់បិទ។
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              (+855)69 29 23 29 <br /> (+855)89 29 23 29
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
