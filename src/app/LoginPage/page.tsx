"use client"

import { Logo, FormInput, GoogleBhai } from "../components/Items";
import { Card, CardBody, Link, Button, Divider } from "@nextui-org/react";

export default function Login() {
  return (
    <div className="bg-white">
      <Logo />
      <div className="centered-div">
        <Card className="card-styling">
          <CardBody>
            <div className="text-center mb-6 mt-4">
              <h1 className="text-xl text-slate-700 font-bold">Welcome to LeadFlow CRM</h1>
            </div>
            <form
              className="flex flex-col items-center gap-2  "
            >
              <FormInput label="Email" type="text" name="email" placeholder="Enter your Email" />
              <FormInput label="Password" type="password" name="password" placeholder="Enter your Password" />
              <div className="flex mr-48 text-gray-600 text-sm" >
                <Link href="/ForgotPassword">
                  <h2>Forgot password?</h2>
                </Link>
              </div>
              <Link href="/Dashboard">
                <Button
                  className="button-style"
                  type="submit"
                >
                  Log In
                </Button>
              </Link>
            </form>
            <Divider className="flex items-center border m-4 w-80" />
            <GoogleBhai />
            <div className="ml-6 flex p-2 gap-1 items-center justify-center w-80">
              <h5 className=" dark:text-white">Don&apos;t have an account?</h5>
              <Link href="/SignupPage">
                <h4 className="text-blue-500">Signup</h4>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
