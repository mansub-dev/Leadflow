import { Link, Button, Card, CardBody } from "@nextui-org/react";

export default function PageCard() {
  return (
    <div>
      <Card className="rounded-lg shadow-lg w-full max-w-4xl flex justify-center items-center dark:shadow-green-500 ">
        <CardBody>
          <div className="font-normal flex flex-col items-center justify-center mt-12 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              The CRM Software You&apos;ve
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              been{" "}
              <span className="text-green-600 dark:text-green-400">
                Looking for...
              </span>
            </h1>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center mt-6 px-4 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">
              Collect more leads, and convert them to clients with LeadFlow
              CRM for sales and customer relationship management.
            </p>

            <div className="flex gap-6 my-3">
              <div >
                <Link className=" font-bold text-xl outline-none" href="/LoginPage">Login</Link>
              </div>
              <div>
                <Button
                  as="a"
                  href="/SignupPage"
                  className="button-homepage font-bold"
                  color="primary"
                  variant="flat"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}