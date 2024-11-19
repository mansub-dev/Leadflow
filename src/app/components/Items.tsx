import { IoIosArrowRoundBack } from "react-icons/io";
import { Image, Input, Link } from "@nextui-org/react";

export function Logo() {
  return (
    <div className="ml-24 mt-4 flex items-center text-2xl font-mono text-black">
      <Image src="/logo.svg" alt="LeadFlow Logo" width={30} height={30} />
      <p className="font-bold text-inherit">LeadFlow</p>
    </div>
  );
}

export function FormInput({ label, type, name, placeholder }: { label: string; type: string; name: string; placeholder: string }) {
  return (
    <div className="input-tag">
      <p className="ml-1 mb-1">{label}</p>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        classNames={{
          input: "input",
        }}
      />
    </div>
  );
}

export function GoogleBhai() {
  return (
    <div className="flex gap-20 items-center mt-3">
      <div className="border border-slate-300  p-2 w-fit rounded-md flex flex-row gap-2 justify-center md:h-11 md:w-80 ">
        <div className="flex gap-2 items-center justify-center  text-base">
          <Image src="/google.svg" alt="CRM" width={25} height={25} />
          <h1>Continue with Google</h1>
        </div>
      </div>
    </div>
  );
}

export function BackArrow() {
  return (
    <div className="ml-28 text-gray-600 mt-10">
      <div className="flex items-center w-32 mr-60  mt-3 mb-6 ">
        <IoIosArrowRoundBack size={25} />
        <Link href="/LoginPage">
          <p>back</p>
        </Link>
      </div>
    </div>
  );
}