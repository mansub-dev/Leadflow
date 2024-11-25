
import { Logo } from "../components/Items";
import { FaCheckCircle } from "react-icons/fa";
import { Link, Card, CardBody } from "@nextui-org/react";

export default function PasswordSuccess() {
  return (
    <div className="theme">
      <Logo />
      <div className="md:centered-div lg:mt-20 p-2">
        <Card className="card-styling">
          <CardBody>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center p-3">
                <FaCheckCircle size={50} color="green" />
              </div>
              <h1 className="text-xl font-bold">Your Password has been successfully reset!</h1>
              <div className="md:w-96 mt-4 text-sm  ">
                <p>You can now login with your new password.</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <Link href="/LoginPage">
                <button
                  className="button-style"
                  type="submit"
                >
                  Back to Login
                </button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}