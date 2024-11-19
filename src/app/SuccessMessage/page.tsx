"use client"

import { Link } from "@nextui-org/react";
import { Logo } from "../components/Items";
import { FaCheckCircle } from "react-icons/fa";

export default function PasswordSuccess() {
  return (
    <div className="bg-white">
      <Logo />
      <div className="flex flex-row gap-20 mt-20 justify-center">
        <div className="centered-div">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center p-3">
              <FaCheckCircle size={50} color="blue" />
            </div>
            <h1 className="text-xl text-slate-700 font-bold">Your Password has been successfully reset!</h1>
            <div className="w-96 mt-4 text-sm text-gray-500 ">
              <p>You can now login with your new password.</p>
            </div>
          </div>
          <Link href="/LoginPage">
            <button
              className="text-white flex items-center justify-center bg-blue-600 h-11 w-72 rounded-xl p-2 md:h-11 md:w-80 md:rounded-xl md:p-4  mt-1"
              type="submit"
            >
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}