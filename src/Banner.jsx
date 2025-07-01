import React from "react";

import desktopImg from "./assets/images/image-web-3-desktop.jpg";
import mobileImg from "./assets/images/image-web-3-mobile.jpg";
import retroImg from "./assets/images/image-retro-pcs.jpg";
import topLaptopImg from "./assets/images/image-top-laptops.jpg";
import gamingImg from "./assets/images/image-gaming-growth.jpg";

function Banner() {
  return (
    <div>
      <div className="mt-2 flex flex-col md:flex-row gap-10 w-full">
        {/* Left Section: Image + Text */}
        <div className="w-full md:w-2/3">
          {/* Desktop Image */}
          <img
            src={desktopImg}
            className="hidden md:block w-full h-[20rem] object-cover"
            alt="Desktop Banner"
          />

          {/* Mobile Image */}
          <img
            src={mobileImg}
            className="block md:hidden w-full h-[20rem] object-cover"
            alt="Mobile Banner"
          />

          {/* Text Content */}
          <div className="flex flex-col md:flex-row justify-between bg-white p-5 gap-2">
            <div className="text-black text-2xl md:text-3xl font-bold md:w-1/2">
              The Bright Future of Web 3.0?
            </div>
            <div className="text-gray-700 md:w-1/2">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
              <br />
              <button
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgb(23 37 84)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "hsl(5, 85%, 63%)")
                }
                style={{ backgroundColor: "hsl(5, 85%, 63%)" }}
                className="pl-4 pr-4 pt-2 pb-2 text-white mt-5 text-md cursor-pointer"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: News Panel */}
        <div className="bg-blue-950 w-full md:w-1/3">
          <h3 className="text-yellow-500 font-bold p-3 text-3xl ml-4">New</h3>

          <div className="pl-5 pr-5">
            <div className="text-white border-b-2 p-8">
              <a className="hover:text-amber-300 cursor-pointer text-xl">
                Hydrogen VS Electric Cars
              </a>
              <p className="text-gray-500 text-md font-bold">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>

            <div className="text-white border-b-2 p-8">
              <a className="hover:text-amber-300 cursor-pointer text-xl">
                The Downsides of AI Artistry
              </a>
              <p className="text-gray-500 text-md font-bold">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>

            <div className="text-white p-8">
              <a className="hover:text-amber-300 cursor-pointer text-xl">
                Is VC Funding Drying Up?
              </a>
              <p className="text-gray-500 text-md font-bold">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Article Panel */}
      <div className="flex flex-col md:flex-row md:w-full mt-5">
        <div className="bg-white w-full md:w-2/3 p-5 flex flex-row gap-3">
          <img
            src={retroImg}
            alt="Retro PCs"
            className="object-cover md:w-[8rem] md:h-[8rem] w-[5rem] h-auto"
          />
          <div className="flex flex-col">
            <h2 className="text-red-600 font-extrabold text-3xl">01</h2>
            <h3 className="font-extrabold text-xl mt-2">Reviving Retro PCs</h3>
            <p className="text-gray-500 text-md mt-2">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        <div className="bg-white w-full md:w-2/3 p-5 flex flex-row gap-3">
          <img
            src={topLaptopImg}
            alt="Top Laptop"
            className="object-cover md:w-[8rem] md:h-[8rem] w-[5rem] h-auto"
          />
          <div>
            <h2 className="text-red-600 font-extrabold text-3xl">02</h2>
            <h3 className="font-extrabold text-xl mt-2">
              Top 10 Laptops of 2022
            </h3>
            <p className="text-gray-500 text-md mt-2">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>

        <div className="bg-white w-full md:w-2/3 p-5 flex flex-row gap-3">
          <img
            src={gamingImg}
            alt="Gaming Growth"
            className="object-cover md:w-[8rem] md:h-[8rem] w-[5rem] h-auto"
          />
          <div>
            <h2 className="text-red-600 font-extrabold text-3xl">03</h2>
            <h3 className="font-extrabold text-xl mt-2">
              The Growth of Gaming
            </h3>
            <p className="text-gray-500 text-md mt-2">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
