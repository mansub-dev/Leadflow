"use client"

import { Image } from "@nextui-org/react";
import { FaIdeal } from "react-icons/fa6";
import { LuNetwork } from "react-icons/lu";
import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineAddTask } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineLeaderboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";


export default function Sidebar() {
  return (
    <div className="text-black ml-4 ">
      <div className="flex flex-col w-10 items-center gap-6 mt-10">
        <div className="flex items-left text-2xl font-mono text-black">
          <Image src="/logo.svg" alt="LeadFlow Logo" width={50} height={30} />
        </div>
        <MdOutlineSpaceDashboard size={30} color="gray " />
        <RiContactsBook3Line size={30} color="gray" />
        <MdOutlineLeaderboard size={30} color="gray" />
        <LuNetwork size={30} color="gray" />
        <FaIdeal size={30} color="gray" />
        <MdOutlineAddTask size={30} color="gray" />
        <TbBrandGoogleAnalytics size={30} color="gray" />
        <TbMessageChatbot size={30} color="gray" />
      </div>
    </div>

  );
}