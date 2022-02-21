import React from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
const getImag = (ImgNum) => {
  return `/Assets/product-${ImgNum}.jpg`;
};

const fN = (num) => {
  return numeral(num).format("$ 0,0[.]00");
};
const data = {
  allProducts: [
    {
      description: "Lightweight tent for those overnight hicking advanture",
      image: getImag(1),
      name: "Watch",
      price: 23834,
    },
    {
      description: "Super hip. Comes in number of Colors",
      name: "Dog Crate",
      price: 2384,
    },
    {
      description: "who Spends this much on a cooler?!",
      name: "Beans",
      price: 12421,
    },
    { description: "S T E A L T H", name: "Googals", price: 6453 },
    { description: "Sick Design", name: "Shoes", price: 3463 },
    { description: "Black out", name: "Camera", price: 3245 },
    {
      description: "Kind of aqueaky on some floors",
      name: "Wrist Watch",
      price: 2345,
    },
    {
      description: "Japanese Denim, made in Canada",
      name: "Sneakers",
      price: 4532,
    },
    { description: "Outdorsy", name: "Tablet", price: 6323 },
    { description: "Keep Warm", name: "Fog", price: 4621 },
  ],
};

const Section = () => {
  return (
    <main className="max-w-1000 mx-auto p-6 mb-4">
      {/* Pagination */}
      <Pagination />
      <ul className="mt-5 grid lg:grid-cols-2 gap-16">
        {data.allProducts.map((product, index) => {
          const { price, description, name } = product;
          return (
            <li
              key={index}
              className="max-w-lg mx-auto shadow-bs relative border border-gray-200 flex flex-col"
            >
              <p
                className="bg-sick text-white absolute -top-1
               -right-1 text-3xl font-semibold p-1.5 leading-none transform rotate-3"
              >
                {fN(price)}
              </p>
              <img
                src={getImag(index + 1)}
                alt={description}
                className="h-100 w-full object-cover"
              />
              <h2 className="-mt-8 text-center transform -skew-x-5 -rotate-1">
                <Link
                  to="/"
                  className="hover:underline text-shadow bg-sick text-white text-4.5xl leading-tight px-3 py-1.5 font-semibold"
                >
                  {name}
                </Link>
              </h2>
              <p className="px-8 py-4 leading-8 text-lg font-medium flex-1">
                {description}
              </p>
              <div className="grid grid-cols-3 border-t border-gray-300 divide-x divide-gray-300">
                <button className="p-3 hover:bg-gray-100">Edit ✏</button>
                <button className="p-3 hover:bg-gray-100">
                  Add to Cart 🛒
                </button>
                <button className="p-3 hover:bg-gray-100">Delete 🚮</button>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination />
    </main>
  );
};

export default Section;
