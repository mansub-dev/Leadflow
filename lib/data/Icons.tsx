import { FaIdeal } from "react-icons/fa";
import { LuNetwork } from "react-icons/lu";
import { TbMessageChatbot } from "react-icons/tb";
import { MdAddTask } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineLeaderboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";


export function Dashboard() {
  return <MdOutlineSpaceDashboard size={28} />
}

export function Contact() {
  return <RiContactsBook3Line size={28} />
}

export function Lead() {
  return <MdOutlineLeaderboard size={28} />

}

export function Workflow() {
  return <LuNetwork size={28} />
}

export function Deals() {
  return <FaIdeal size={28} />
}

export function Task() {
  return <MdAddTask size={28} />
}

export function Analysis() {
  return <TbBrandGoogleAnalytics size={28} />
}

export function Chatbot() {
  return <TbMessageChatbot size={28} />
}

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width = 15,
  height = 15,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);
