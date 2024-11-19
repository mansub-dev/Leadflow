import { Image } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Navigation() {
  return (
    <div className="bg-white text-black flex items-center p-4">
      <Navbar isBordered>
        <NavbarBrand className="ml-20 text-2xl font-mono flex items-center">
          <Image src="/logo.svg" alt="LeadFlow Logo" width={30} height={30} />
          <p className="font-bold text-inherit">LeadFlow</p>
        </NavbarBrand>
        <NavbarContent className="ml-[750px] gap-6 " justify="end">
          <NavbarItem className="hidden lg:flex">
            <div className="font-bold text-xl">
              <Link href="/LoginPage">Login</Link>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Button className="outline-none border bg-blue-600 text-white font-bold  rounded-2xl p-3" as={Link} color="primary" href="/SignupPage" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}