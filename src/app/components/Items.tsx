import { IoIosArrowRoundBack } from "react-icons/io";
import { Image, Input, Link } from "@nextui-org/react";

export function Logo() {
  return (
    <div className="theme flex items-center justify-center mt-4 text-2xl font-mono text-black  md:items-start md:justify-start border border-x-0 border-t-0 light:border-b-gray-400 dark:border-b-gray-700 border-none">
      <p className="m-0 md:ml-24  font-bold text-inherit">LeadFlow</p>
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
    <div className="flex items-center h-11 w-72 md:w-80 rounded-md p-2 border border-slate-300 dark:border-neutral-700 gap-2 text-base cursor-pointer hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors">
      <div className="flex gap-2 items-center justify-center w-full ">
        <Image src="/google.svg" alt="Google Icon" width={25} height={25} />
        <h1 className="text-gray-700 dark:text-white font-medium">Continue with Google</h1>
      </div>
    </div>
  );
}

export function BackArrow() {
  return (
    <div className="theme flex items-center md:w-32 mr-60 md:ml-28 text-gray-700 mt-8 ">
      <IoIosArrowRoundBack size={25} />
      <Link href="/LoginPage">
        <p>back</p>
      </Link>
    </div>
  );
}

// export function FormInput({
//   label,
//   type,
//   name,
//   placeholder,
//   value,
//   onChange,
// }: {
//   label: string;
//   type: string;
//   name: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }) {
//   return (
//     <div className="input-tag">
//       <p className="ml-1 mb-1">{label}</p>
//       <Input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         value={value} // Controlled value
//         onChange={onChange} // Handle input change
//         classNames={{
//           input: "input",
//         }}
//       />
//     </div>
//   );
// }
