import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-slate-300 flex justify-between text-black ">
        <div>
          <a className="btn btn-ghost text-xl">Community </a>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-1/3 text-white "
        />

        <div className="flex justify-between w-[10%] mr-5 font-bold text-xl">
          <p> Profile </p>
          <p> Logout </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
