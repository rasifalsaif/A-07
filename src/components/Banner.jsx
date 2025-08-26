import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/j9XpHwmy/Banner-min.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" hero-content w-full flex justify-start items-center text-neutral-content">
          <div className="pl-10 max-w-lg">
            <h1 className="mb-5 text-4xl font-bold">Bid on Unique Items from Around the World</h1>
            <p className="mb-5">
              Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
            </p>
            <button className="btn btn-primary rounded-4xl">Explore Options</button>
          </div>
          <div></div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
