"use client";

import Features from "../components/Features";
import { Link, Button } from "@nextui-org/react";
import Navigation from "../components/Navigationbar";

export default function Homepage() {
  return (
    <div className="bg-white">
      <Navigation />
      <div>
        <div className="bg-white font-normal text-black flex flex-col items-center justify-center mt-28 text-6xl space-y-4">
          <h1>The CRM Software You've</h1>
          <h1>been <span className="text-blue-600">Looking for.....</span></h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center mt-4">
          <div className="text-gray-600 w-96">
            <p >Collect more leads, and convert them to clients with Leadflow CRM for slaes and customer relationship</p>
          </div>
          <div className="flex gap-6 mt-3">
            <div className="font-bold text-black text-xl">
              <Link href="/LoginPage">Login</Link>
            </div>
            <div>
              <Button
                as="a"
                href="/SignupPage"
                className="outline-none border bg-blue-600 text-white font-bold rounded-2xl p-3"
                color="primary"
                variant="flat"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-48 ml-32 text-black">
          <Features />
        </div>
        <div className="flex flex-col items-center justify-center  text-white font-semibold p-2 mt-5">
          <p className="text-sm">Email: <a href="mailto:leadflow@gmail.com" className="underline hover:text-blue-400">leadflow@gmail.com</a></p>
          <p className="text-sm mt-2">© by LeadFlow CRM</p>
        </div>
      </div>
    </div>
  );
}
