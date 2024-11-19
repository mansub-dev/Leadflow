"use client"

import { Card, CardBody, Link, Button } from "@nextui-org/react";
import { BackArrow, FormInput, Logo } from "../components/Items";

export default function ForgotPassword() {
  return (
    <div className="bg-white">
      <Logo />
      <BackArrow />
      <div className="flex flex-row gap-20 justify-center">
        <div className="centered-div">
          <div className="text-center mb-6">
            <h1 className="text-3xl text-slate-700 font-bold">Forgot Password</h1>
            <div className="w-96 mt-4 text-sm text-gray-500 ">
              <p>No worries! Enter your email address below and we will send you a link to reset your password</p>
            </div>
          </div>
          <Card>
            <CardBody>
              <form
                className="flex flex-col items-center gap-2  "
              >
                <FormInput label="Email" type="text" name="email" placeholder="Enter your Email" />
                <Link href="/MailVerification">
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
    </div>
  );
}