

import { Logo, FormInput, GoogleBhai } from "../components/Items";
import { Card, CardBody, Link, Button } from "@nextui-org/react";

export default function Login() {
  return (

    <div className="theme" >
      <Logo />
      <div className="md:centered-div mt-10 p-2">
        <Card className="card-styling">
          <CardBody>
            <div className="text-center mb-6 mt-4">
              <h1 className="text-xl font-bold">Welcome to LeadFlow CRM</h1>
            </div>
            <form
              className="flex flex-col items-center gap-2  "
            >
              <FormInput label="Email" type="text" name="email" placeholder="Enter your Email" />
              <FormInput label="Password" type="password" name="password" placeholder="Enter your Password" />
              <div className="flex mr-[7.5rem] text-gray-600 dark:text-gray-400 text-sm md:mr-36 w-40 " >
                <Link href="/ForgotPassword">
                  <h2>Forgot password?</h2>
                </Link>
              </div>
              <Link href="/Dashboard">
                <Button
                  className="button-style"
                  type="submit"
                >
                  LogIn
                </Button>
              </Link>
            </form>
            <div className="ml-2 flex flex-col p-2 gap-2 items-center justify-center md:w-80">

              <hr className="w-72 md:w-80 m-4 border-black/25 dark:border-gray-500" />
              <div>
                <GoogleBhai />
              </div>
              <div className="flex items-center justify-center gap-1">
                <h5 className=" dark:text-white">Don&apos;t have an account?</h5>
                <Link href="/SignupPage">
                  <h4 className="text-green-500">SignUp</h4>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
