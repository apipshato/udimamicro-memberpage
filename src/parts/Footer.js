import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  function submit() {}

  return (
    <footer className="container mx-auto px-4">
      <div className="flex justify-between flex-wrap">
        <div className="w-full sm:w-1/6">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                to=""
                className="text-indigo-500 hover:text-teal-500 hover:underline"
              >
                API Developer
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to=""
                className="text-indigo-500 hover:text-teal-500 hover:underline"
              >
                Career
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to=""
                className="text-indigo-500 hover:text-teal-500 hover:underline"
              >
                Our Story
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to=""
                className="text-indigo-500 hover:text-teal-500 hover:underline"
              >
                New Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/6">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                to=""
                className="text-indigo-500 hover:text-teal-500 hover:underline"
              >
                Get Scholarship
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to=""
                className="text-indigo-500 hover:text-teal-500 hover:underline"
              >
                Our Pathskills
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to=""
                className="text-indigo-500 hover:text-teal-500 hover:underline"
              >
                All Features
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to=""
                className="text-indigo-500 hover:text-teal-500 hover:underline"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/6">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-indigo-500 leading-loose">
            Micro Centre <br />
            Alleysi Block X No. 12 <br />
            Jakarta Selatan, Indonesia <br />
            +21 2020 5555
          </p>
        </div>
        <div className="w-full sm:w-2/6">
          <h6 className="text-white">Promotions</h6>
          <p className="mt-4 text-indigo-500">
            Submit your email for new updates
          </p>
          <form onSubmit={submit} className="flex mt-6">
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-4 sm:px-6 py-3 w-full md:w-1/2"
              placeholder="Your email addres"
            />
            <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-6 py-3 whitespace-no-wrap">
              Daftar Now
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-800 text-center">
        <p className="text-indigo-500">
          2020 Copyright Micro by Shatoz.dev . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
