

import { Logo, FormInput, GoogleBhai } from "../components/Items";
import { Card, CardBody, Link, Button } from "@nextui-org/react";

export default function Signup() {

  return (
    <div className="theme ">
      <Logo />
      <div className="md:flex md:items-center md:gap-20 md:justify-center md:dark:bg-black md:dark:text-white md:mt-0 mt-10  p-1">
        <Card className="card-styling py-1">
          <CardBody>
            <div className="text-center mb-6 mt-4 ">
              <h1 className="text-xl  font-bold">Create Your Account</h1>
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
                  SignUp
                </Button>
              </Link>
            </form>
            <div className="mt-2 flex flex-col p-2 gap-2 items-center justify-center md:w-80">
              <hr className=" w-72 md:w-80 m-4 border-black/25 dark:border-gray-500" />
              <div>
                <GoogleBhai />
              </div>
              <div className="flex items-center justify-center gap-1">
                <h5 className=" dark:text-white">Don&apos;t have an account?</h5>
                <Link href="/LoginPage">
                  <h4 className="text-green-500">LogIn</h4>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}