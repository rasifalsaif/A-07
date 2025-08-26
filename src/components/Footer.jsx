import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-100 text-center py-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold">
          Auction<span className="text-yellow-500">Gallery</span>
        </h1>
        <p className="text-gray-500 mt-2">Bid. Win. Own.</p>

        <div className="flex justify-center space-x-6 mt-4 text-gray-700">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Auctions</a>
          <a href="#" className="hover:text-yellow-500">Categories</a>
          <a href="#" className="hover:text-yellow-500">How it works</a>
        </div>

        <p className="text-gray-400 mt-6">© 2025 AuctionHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
