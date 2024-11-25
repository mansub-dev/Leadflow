"use client"

import React from "react";
import { Logo } from "../components/Items";
import { Link, Card, CardBody, Button } from "@nextui-org/react";

export default function CheckMail() {

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const nextInput = document.querySelector(
        `input:nth-child(${index + 2})`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    } else {
      e.target.value = "";
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    if (e.key === "Backspace") {
      const prevInput = document.querySelector(
        `input:nth-child(${index})`
      ) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  return (
    <div className="theme">
      <Logo />
      <div className="md:centered-div lg:mt-20 p-2">
        <Card className="card-styling">
          <CardBody>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center p-3">
              </div>
              <h1 className="text-xl font-bold">Code Verification</h1>
              <div className="md:w-96 mt-4 text-sm ">
                <p>We send you a 6 digit code on mail. Enter code to continue.</p>
              </div>
            </div>
            <div className=" flex flex-col gap-3 items-center justify-center ">
              <form>
                <div className="mt-5">
                  <div className="flex space-x-2 mt-3">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-9 md:w-14 h-12 text-center border-b-2 dark:border-green-500 focus:outline-none text-lg rounded-sm border-black/30"
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    ))}
                  </div>
                </div>
              </form>

              <Link href="/Dashboard">
                <Button
                  className="button-style"
                  type="submit"
                >
                  Verify
                </Button>
              </Link>
              <div className="flex p-2 gap-1  items-center justify-center md:w-80">
                <h5 >Don&apos;t received email? </h5>
                <Link href="/SignupPage">
                  <h4 className="text-green-500">Resend</h4>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div >
  );
}