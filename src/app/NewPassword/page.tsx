"use client"

import { Card, CardBody, Link, Button } from "@nextui-org/react";
import { BackArrow, FormInput, Logo } from "../components/Items";

export default function ResetPassword() {
  return (
    <div className="bg-white">
      <Logo />
      <BackArrow />
      <div className="flex flex-row gap-20 justify-center">
        <Card className="card-styling">
          <CardBody>
            <div className="text-center mb-6">
              <h1 className="text-2xl text-slate-700 font-bold">Create a New Password</h1>
              <div className="w-96 mt-4 text-sm text-gray-500 ">
                <p>Enter your new password below to complete the reset process. Ensure it's strong and secure.</p>
              </div>
            </div>
            <form
              className="flex flex-col items-center gap-2  "
            >
              <FormInput label="Password" type="password" name="password" placeholder="Enter your Password" />
              <FormInput label="Password" type="password" name="password" placeholder="Repeat your Password" />
              <Link href="/SuccessMessage">
                <Button
                  className="button-style"
                  type="submit"
                >
                  Submit
                </Button>
              </Link>
            </form>
          </CardBody>
        </Card>
      </div>
    </div >
  );
}