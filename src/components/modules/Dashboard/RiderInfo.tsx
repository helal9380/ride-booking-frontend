/** @format */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserInfoQuery } from "@/Redux/features/auth.api";
import { useGetRideQuery } from "@/Redux/features/ride.api";

const RiderInfo = () => {
  const { data: rides, isLoading } = useGetRideQuery(undefined);
  const { data } = useUserInfoQuery(undefined);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{rides?.data?.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Rides</CardTitle>
          </CardHeader>
          <CardContent>
            {rides?.data?.length > 0 ? (
              <p className="text-2xl font-semibold">
                {rides?.data?.filter((r: any) => r.status === "pending")
                  .length || 0}
              </p>
            ) : (
              <p>No rides found!</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {rides?.data?.filter((r: any) => r.status === "completed")
                .length || 0}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              $
              {rides?.data
                ?.reduce(
                  (acc: number, ride: any) =>
                    ride.status === "completed" ? acc + ride.fare : acc,
                  0
                )
                .toFixed(2) || 0}
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Rides</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className=" text-left">
                <th className="p-2">Date</th>
                <th className="p-2">Pickup</th>
                <th className="p-2">Drop</th>
                <th className="p-2">Fare</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {rides?.data?.slice(0, 5).map((ride: any) => (
                <tr
                  key={ride._id}
                  className="border-t">
                  <td className="p-2">
                    {new Date(ride.date).toLocaleString()}
                  </td>
                  <td className="p-2">{ride.pickup}</td>
                  <td className="p-2">{ride.drop}</td>
                  <td className="p-2">${ride.fare}</td>
                  <td className="p-2 capitalize">{ride.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RiderInfo;
