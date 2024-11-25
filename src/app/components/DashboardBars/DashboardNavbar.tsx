import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { SearchIcon } from "../../../../lib/data/Icons";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";

export default function DashNavbar() {

  return (
    <Navbar className=" theme">
      <NavbarBrand>
        <p className="font-semibold text-2xl font-mono text-inherit ">Dashboard</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Add new
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            <SearchIcon />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown className="theme border rounded-lg">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform object-cover w-10 h-10 rounded-full"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" >

              <DropdownItem key="profile">My Profile</DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}