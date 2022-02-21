import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="text-center lg:text-left mt-4">
      <div className="inline-flex border  rounded-lg divide-x">
        <Link
          area-disabled="true"
          className="pointer-events-none text-gray-500 px-7 py-4"
          to="/"
        >
          &larr; Prev
        </Link>
        <p className="px-7 py-4 hidden sm:block">Page 1 of 3</p>
        <p className="px-7 py-4 hidden sm:block">11 Items Total</p>
        <Link
          area-disabled="true"
          className="pointer-events-none text-gray-500 px-7 py-4"
          to="/"
        >
          Next &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
