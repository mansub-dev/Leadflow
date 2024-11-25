
import { Card, CardBody, Link, Button } from "@nextui-org/react";
import { BackArrow, FormInput, Logo } from "../components/Items";

export default function ForgotPassword() {

  return (
    <div className="theme" > <Logo />
      <BackArrow />
      <div className="md:centered-div mt-10 p-2">
        <Card className="card-styling">
          <CardBody>
            <div className="text-center mb-6">
              <h1 className="text-3xl  font-bold">Forgot Password</h1>
              <div className="md:w-96 mt-4 text-sm ">
                <p>No worries! Enter your email address below and we will send you a link to reset your password</p>
              </div>
            </div>
            <form
              className="flex flex-col items-center gap-2  "
            >
              <FormInput label="Email" type="text" name="email" placeholder="Enter your Email" />
              <Link href="/MailVerification">
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
    </div>
  );
}