"use client"

import { Logo } from "../components/Items";
import { MdOutlineEmail } from "react-icons/md";
import { Link, Card, CardBody, Button } from "@nextui-org/react";

export default function CheckMail() {
  return (
    <div className="bg-white">
      <Logo />
      <div className="centered-div mt-20">
        <Card className="card-styling">
          <CardBody>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center p-3">
                <MdOutlineEmail size={50} color="blue" />
              </div>
              <h1 className="text-xl text-slate-700 font-bold">Check your Gmail</h1>
              <div className="w-96 mt-4 text-sm text-gray-500 ">
                <p>We send you a password reset link, please check your inbox.</p>
              </div>
            </div>
            <div className=" flex flex-col gap-3 items-center justify-center">
              <Link href="/NewPassword">
                <Button
                  className="button-style "
                  type="submit"
                >
                  Open Mail
                </Button>
              </Link>
              <div className="flex p-2 gap-1  items-center justify-center w-80">
                <h5 className=" text-gray-500 ">Don&apos;t received email? </h5>
                <Link href="/SignupPage">
                  <h4 className="text-black">Resend</h4>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div >
  );
}