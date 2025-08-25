/** @format */
import { cn } from "@/lib/utils";
import { useLogoutMutation, useUserInfoQuery } from "@/Redux/features/auth.api";
import { LogOut } from "lucide-react";
import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SidebarProps {
  role: "RIDER" | "DRIVER" | "ADMIN";
}

const Menubar: FC<SidebarProps> = ({ role }) => {
  const navigate = useNavigate();
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();

  console.log(data);
  // Common links for all roles
  const commonLinks = [
    { label: "PROFILE", path: "/profile" },
    { label: "SETTING", path: "/settings" },
    { label: "HOME", path: "/" },
  ];

  const roleLinks: Record<string, { label: string; path: string }[]> = {
    RIDER: [
      { label: "MY RIDES", path: "/rider/rides" },
      { label: "REQUEST RIDE", path: "/rider/book" },
    ],
    DRIVER: [
      { label: "Available Rides", path: "/driver/available" },
      { label: "Earnings", path: "/driver/earnings" },
    ],
    ADMIN: [
      { label: "Dashboard", path: "/admin" },
      { label: "Manage Users", path: "/admin/users" },
      { label: "All Rides", path: "/admin/rides" },
    ],
  };

  return (
    <aside className=" bg-gray-900 text-white flex flex-col p-4 space-y-4">
      <div className="flex justify-between">
        <nav className="flex items-center uppercase">
          {roleLinks[role]?.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-4 py-2 rounded hover:bg-primary transition"
              )}>
              {item.label}
            </Link>
          ))}

          {commonLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-4 py-2 rounded hover:bg-primary transition"
              )}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-5 items-center ">
          <button className="px-2 py-2 rounded bg-primary cursor-pointer">
            {data?.data?.isOnline ? "Online" : "Offline"}
          </button>
          <button
            onClick={async () => {
              await logout(undefined);
              navigate("/login");
            }}
            className="flex items-center cursor-pointer gap-2 px-2 py-2 rounded bg-primary">
            <LogOut className="w-4 h-4" />
            LOGOUT
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Menubar;
