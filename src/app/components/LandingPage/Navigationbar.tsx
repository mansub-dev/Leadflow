import { ThemeSwitcher } from "../ThemeSwitcher";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Navigation() {
  return (
    <div className="border border-x-0 border-t-0 light:border-b-gray-400 dark:border-b-gray-700 flex items-center justify-between p-4">
      < Navbar isBordered >
        <NavbarBrand className=" text-2xl font-mono md:flex md:items-center -ml-6 lg:ml-20">
          <p className="font-bold text-inherit">LeadFlow</p>
        </NavbarBrand>
        <NavbarContent className="ml-12 md:ml-auto gap-2 md:gap-4  " justify="end">
          < NavbarItem> <ThemeSwitcher /></NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <div className="font-bold text-lg">
              <Link href="/LoginPage">Login</Link>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Button className="button-homepage font-bold " as={Link} color="primary" href="/SignupPage" variant="flat">
              SignUp
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar >
    </div >
  );
}
