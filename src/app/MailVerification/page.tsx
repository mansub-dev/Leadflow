"use client"

import { Link } from "@nextui-org/react";
import { Logo } from "../components/Items";
import { MdOutlineEmail } from "react-icons/md";

export default function CheckMail() {
  return (
    <div className="bg-white">
      <Logo />
      <div className="flex flex-row gap-20 mt-20 justify-center">
        <div className="centered-div">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center p-3">
              <MdOutlineEmail size={50} color="blue" />
            </div>
            <h1 className="text-xl text-slate-700 font-bold">Check your Gmail</h1>
            <div className="w-96 mt-4 text-sm text-gray-500 ">
              <p>We send you a password reset link, please check your inbox.</p>
            </div>
          </div>
          <Link href="/NewPassword">
            <button
              className="text-white flex items-center justify-center bg-blue-600 h-11 w-72 rounded-xl p-2 md:h-11 md:w-80 md:rounded-xl md:p-4  mt-1"
              type="submit"
            >
              Open Mail
            </button>
          </Link>
          <div className="flex p-2 gap-1 mt-4 items-center justify-center w-80">
            <h5 className=" text-gray-500 ">Don&apos;t received email? </h5>
            <Link href="/SignupPage">
              <h4 className="text-black">Resend</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}