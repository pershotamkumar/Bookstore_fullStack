import React, { useContext } from "react";
import { DataContext } from "../context/Createcontext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { SetAuthUser } = useContext(DataContext);
  const navigate = useNavigate();

  const HandleOut = () => {
    try {
      localStorage.removeItem("AuthUser"); // ✅ Make sure to remove it before setting state
      SetAuthUser(null); // ✅ Setting user to null properly
      toast.success("Logout Successfully");

      setTimeout(() => {
        navigate("/"); // ✅ Redirect to home page
      }, 2000);
    } catch (error) {
      toast.error("Error Occurred While Logging Out. Contact Our Team");
    }
  };

  return (
    <button
      onClick={HandleOut} // ✅ No parentheses () after HandleOut
      className="px-3 py-1.5 bg-red-500 text-white cursor-pointer rounded-md"
    >
      Logout
    </button>
  );
};

export default Logout;
