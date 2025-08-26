import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span className="text-blue-600 font-bold">Auction</span>
          <span className="text-yellow-500 font-bold">Gallery</span></a>
  </div>
  {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div> */}
  <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><a>Home</a></li>
          <li><a>Auctions</a></li>
          <li><a>Categories</a></li>
          <li><a>How to works</a></li>
        </ul>
      </div>
  <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-circle">
          {/* Example bell icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M15 17h5l-1.405-1.405M19 13V11a7.003 7.003 0 00-5-6.708V4a2 2 0 10-4 0v.292A7.003 7.003 0 005 11v2l-1.405 1.405A1 1 0 005 17h5m0 0a3 3 0 006 0" />
          </svg>
        </button>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://i.pravatar.cc/40" alt="user" />
          </div>
        </div>
      </div>
</div>
    </div>
  );
};

export default Navbar;