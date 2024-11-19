"use client"

import { Card, CardBody, Link, Button } from "@nextui-org/react";
import { BackArrow, FormInput, Logo } from "../components/Items";

export default function ResetPassword() {
  return (
    <div className="bg-white">
      <Logo />
      <BackArrow />
      <div className="flex flex-row gap-20 justify-center">
        <div className="centered-div">
          <div className="text-center mb-6">
            <h1 className="text-2xl text-slate-700 font-bold">Create a New Password</h1>
            <div className="w-96 mt-4 text-sm text-gray-500 ">
              <p>Enter your new password below to complete the reset process. Ensure it's strong and secure.</p>
            </div>
          </div>
          <Card>
            <CardBody>
              <form
                className="flex flex-col items-center gap-2  "
              >
                <FormInput label="Password" type="password" name="password" placeholder="Enter your Password" />
                <FormInput label="Password" type="password" name="password" placeholder="Repeat your Password" />
                <Link href="/SuccessMessage">
                  <Button
                    className="text-white flex items-center justify-center bg-blue-600 h-11 w-72 rounded-xl p-2 md:h-11 md:w-80 md:rounded-xl md:p-4  mt-1"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Link>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div >
  );
}