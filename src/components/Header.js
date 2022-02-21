import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

const links = [
  { name: "Products", target: "/" },
  { name: "Sell", target: "/" },
  { name: "Orders", target: "/" },
  { name: "Account", target: "/" },
  { name: "Sign Out", target: "/" },
  { name: "My Cart", target: "/" },
];
const Header = () => {
  return (
    <>
      <header className="border-b border-black">
        <div className="pl-6 border-b-10 border-black flex flex-col items-center xl:flex-row xl:items-stretch">
          <h1 className="my-6 bg-sick text-white inline-block p-2 uppercase text-4.5xl transform -skew-x-7">
            <Link className="hover:underline" to="/">
              Sick Fits
            </Link>
          </h1>
          <nav className="my-4 xl:my-0 flex flex-1 xl:justify-end justify-center flex-wrap">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.target}
                className="group flex items-center relative px-4 xl:px-8 lg:text-lg lg:px-6 flex-shrink-0 uppercase text-sm xl:text-xl"
              >
                <span className="absolute top-0 left-0 w-0.5 h-full bg-gray-200 transform -skew-x-20"></span>
                <span className="relative">
                  {link.name === "My Cart" ? (
                    <span className="flex items-center space-x-2">
                      <span>{link.name}</span>
                      <span className="bg-sick h-7 w-7 text-white text-xl font-semibold rounded-full flex justify-center items-center">
                        1
                      </span>
                    </span>
                  ) : (
                    link.name
                  )}
                  <span className="bg-sick absolute -bottom-1 left-0 h-1 w-full rounded-sm transform scale-x-50 group-hover:scale-x-100 transition ease-bloop duration-400" />
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for an Item..."
            className="w-full h-16 px-6"
          />
        </div>
      </header>
      <Section />
    </>
  );
};

export default Header;
