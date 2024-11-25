
import { Card, CardBody, Link, Button } from "@nextui-org/react";
import { BackArrow, FormInput, Logo } from "../components/Items";

export default function ResetPassword() {
  return (
    <div className="theme">
      <Logo />
      <BackArrow />
      <div className="md:centered-div mt-10 p-2">
        <Card className="card-styling">
          <CardBody>
            <div className="text-center mb-6">
              <h1 className="text-2xl  font-bold">Create a New Password</h1>
              <div className="md:w-96 mt-4 text-sm ">
                <p>Enter your new password below to complete the reset process. Ensure it&apos;s strong and secure.</p>
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