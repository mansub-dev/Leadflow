"use client"

import { Logo, FormInput, GoogleBhai } from "../components/Items";
import { Card, CardBody, Link, Button, Divider } from "@nextui-org/react";

export default function Signup() {
  return (
    <div className="bg-white">
      <Logo />
      <div className="flex flex-row gap-20 items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-4 bg-white text-black object-cover">
          <div className="text-center mb-6">
            <h1 className="text-xl text-slate-700 font-bold">Create Your LeadFlow Account</h1>
          </div>
          <Card>
            <CardBody>
              <form
                className="flex flex-col items-center gap-2  "
              >
                <FormInput label="Name" type="text" name="name" placeholder="Enter your Name" />
                <FormInput label="Email" type="text" name="email" placeholder="Enter your Email" />
                <FormInput label="Password" type="password" name="password" placeholder="Enter your Password" />
                <Button
                  className="text-white flex items-center justify-center bg-blue-600 h-11 w-72 rounded-xl p-2 md:h-11 md:w-80 md:rounded-xl md:p-4  mt-1"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
            </CardBody>
          </Card>
          <div className="flex  items-center bg-black m-4 w-80">
            <Divider />
          </div>
          <GoogleBhai />
          <div className="flex p-2 gap-1 items-center justify-center w-80">
            <h5 className=" dark:text-white">Already have an account?</h5>
            <Link href="/LoginPage">
              <h4 className="text-blue-500">Login</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}