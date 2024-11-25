

import { Chatbot, Contact, Dashboard, Lead, Analysis, Workflow, Deals, Task, } from "../../../../lib/data/Icons";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex flex-col items-center text-black w-16 gap-10 mt-10 ">
        <Dashboard />
        <Contact />
        <Lead />
        <Workflow />
        <Deals />
        <Task />
        <Chatbot />
        <Analysis />
      </div>
    </div>
  );
}
