import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { userLogoutURL } from "../Utility/Constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Store/userSlice";
const Navbar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let handleLogout = async () => {
    try {
      let resposne = await axios.post(userLogoutURL,{}, { withCredentials: true });
      console.log( resposne)
      if (resposne?.data?.result === true) {
        dispatch(deleteUser());
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="navbar bg-[#112D4E] text-white p-2 flex flex-wrap items-center justify-between">
      <div className=" font-semibold">
        <Link className="btn btn-ghost text-2xl" to="/community">
          Community
        </Link>
      </div>

      <div className="w-full md:w-1/3 my-2 md:my-0">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full text-black bg-[#DBE2EF] rounded-lg"
        />
      </div>

      <div className="flex space-x-4 text-lg font-medium">
        <Link className="hover:text-gray-300" to="/community/profile">
          Profile
        </Link>
        <button onClick={handleLogout} className="hover:text-gray-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
