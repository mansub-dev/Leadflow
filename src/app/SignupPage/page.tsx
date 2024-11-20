"use client"

import { Logo, FormInput, GoogleBhai } from "../components/Items";
import { Card, CardBody, Link, Button, Divider } from "@nextui-org/react";

export default function Signup() {
  return (
    <div className="bg-white">
      <Logo />
      <div className="centered-div">
        <Card className="card-styling py-1 ">
          <CardBody>
            <div className="text-center mb-6 mt-4">
              <h1 className="text-xl text-slate-700 font-bold">Create Your LeadFlow Account</h1>
            </div>
            <form
              className="flex flex-col items-center gap-2  "
            >
              <FormInput label="Name" type="text" name="name" placeholder="Enter your Name" />
              <FormInput label="Email" type="text" name="email" placeholder="Enter your Email" />
              <FormInput label="Password" type="password" name="password" placeholder="Enter your Password" />
              <Link href="/Dashboard">
                <Button
                  className="button-style"
                  type="submit"
                >
                  Sign up
                </Button>
              </Link>
            </form>
            <Divider className="flex items-center border m-4 w-80" />
            <GoogleBhai />
            <div className="ml-6 flex p-2 gap-1 items-center justify-center w-80">
              <h5 className=" dark:text-white">Already have an account?</h5>
              <Link href="/LoginPage">
                <h4 className="text-blue-500">Login</h4>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
