import DashNavbar from "../components/DashboardBars/DashboardNavbar";
import Sidebar from "../components/DashboardBars/Sidebar";


export default function Dashboard() {

  return (
    <div className="flex h-screen theme ">
      < Sidebar />
      <div className="flex flex-col flex-1">
        <div className=" flex items-center justify-center h-12">
          <DashNavbar />
        </div>
        <div
          className="flex-1 p-4 border rounded-tl-lg theme"
        >
          <div>
            <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
            <p className="mt-4">This is where your dashboard content will appear.</p>
          </div>
        </div>
      </div>
    </div >
  );
}

