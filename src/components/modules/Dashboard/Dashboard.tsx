/** @format */

import Menubar from "@/components/Menubar";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/Redux/features/auth.api";
import { useGetRideQuery } from "@/Redux/features/ride.api";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import DriverDashboard from "../DriverDashboard/DriverDashboard";
import RiderInfo from "./RiderInfo";
// Example hook

const Dashboard = () => {
  const { data: rides, isLoading } = useGetRideQuery(undefined);
  const { data } = useUserInfoQuery(undefined);
  const [totalRides, setTotalRides] = useState(0);

  useEffect(() => {
    if (rides) {
      setTotalRides(rides?.data?.length);
    }
  }, [rides]);

  let user = "";
  if (data?.data?.role === "DRIVER") {
    user = "Driver Dashboard";
  } else if (data?.data?.role === "RIDER") {
    user = "Rider Dashboard";
  } else if (data?.data?.role === "ADMIN") {
    user = "Admin Dashboard";
  }

  let randerComponent;
  if (data?.data?.role === "DRIVER") {
    randerComponent = <DriverDashboard />;
  } else if (data?.data?.role === "RIDER") {
    randerComponent = <RiderInfo />;
  } else if (data?.data?.role === "ADMIN") {
    randerComponent = <AdminDashboard />;
  }

  let online;
  if (data?.data?.isOnline) {
    online = "blue";
  }
  console.log(data);
  return (
    <div className="p-6 space-y-6 text-foreground">
      {data?.success ? (
        <>
          <div>
            <h1 className="text-3xl font-bold">{user}</h1>
            <div>
              <h4>Name: {data?.data?.name}</h4>
              <h5>Email: {data?.data?.email}</h5>
              <p className={`${online}`}>
                Status:{" "}
                <span>{data?.data?.isOnline ? "Online" : "Offline"}</span>
              </p>
            </div>
            <Menubar role={data?.data?.role} />

            {randerComponent}
          </div>
        </>
      ) : (
        <>
          <p>"for showing dashboard Please login firstly"</p>
          <Button className="text-foreground">
            <Link to={"/login"}>Login</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
