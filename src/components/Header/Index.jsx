"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import BurgerLogo from "@/public/Assets/Header/BurgerLogo.jpg";

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const closeNavbar = () => {
    setNavIsOpened(false);
  };
  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };
  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }`}
      />
      <header className="sticky left-0 top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-slate-100  bg-opacity-80 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max mr-10">
            <Image
              src={BurgerLogo}
              alt="BurgerLogo-Icon"
              width={75}
              className="border border-red-900 rounded-3xl"
            />
            <span className="text-red-700 text-2xl font-serif font-bold ml-2">
              ស្រុកយេីង <br />
              <span className="text-gray-950 ml-5">សាច់អាំង</span> BBQ
            </span>
          </div>
          <div
            className={`
          absolute top-full  left-0 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 bg-slate-100 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
          ${
            navIsOpened
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"
          }
        `}
          >
            <ul className="flex flex-col font-extrabold text-xl lg:flex-row gap-6 lg:items-center text-gray-950 lg:w-full lg:justify-center">
              <Link
                href="#"
                className="relative py-2.5 duration-300 ease-linear hover:text-red-700 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-gray-900"
              >
                ទំព័រដើម
              </Link>

              <Link
                href="#Category"
                className="relative py-2.5 duration-300 ease-linear hover:text-red-700 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-gray-900"
              >
                ម្ហូបរបស់យេីង
              </Link>

              <Link
                href="#Contact"
                className="relative py-2.5 duration-300 ease-linear hover:text-red-700 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-gray-900"
              >
                ទីតាំង
              </Link>

              <Link
                href="#"
                className="relative py-2.5 duration-300 ease-linear hover:text-red-700 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-gray-900"
              >
                ចុងភៅ
              </Link>

              <Link
                href="#"
                className="relative py-2.5 duration-300 ease-linear hover:text-red-700 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-gray-900"
              >
                ទំនាក់ទំនង
              </Link>
            </ul>
            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
              <Link
                href="#"
                className="px-6 items-center font-bold h-12 rounded-3xl border border-gray-100 dark:border-yellow-600 dark:text-gray-950 bg-white hover:bg-zinc-900 hover:text-yellow-400 duration-300 ease-linear flex justify-center w-full sm:w-auto"
              >
                បញ្ជាទិញឥឡូវនេះ
              </Link>
            </div>
          </div>
          <div aria-hidden="true" className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`
              flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
            `}
              />
              <span
                aria-hidden={true}
                className={`
              mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
              `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
