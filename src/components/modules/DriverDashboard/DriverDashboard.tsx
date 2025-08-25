/** @format */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Clock, DollarSign, User } from "lucide-react";

const DriverDashboard = () => {
  // Example mock data; replace with API/RTK Query data
  const rideRequests = [
    { id: "R101", pickup: "Uttara", drop: "Banani", fare: 350 },
    { id: "R102", pickup: "Mirpur", drop: "Gulshan", fare: 420 },
  ];

  const acceptedRides = [
    {
      id: "R103",
      pickup: "Mohakhali",
      drop: "Dhanmondi",
      fare: 280,
      status: "Ongoing",
    },
  ];

  const earnings = {
    today: 750,
    week: 4800,
    month: 19000,
  };

  return (
    <div className=" space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <DollarSign className="w-5 h-5 text-primary" /> Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">৳{earnings.today}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-primary" /> Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">৳{earnings.week}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Car className="w-5 h-5 text-primary" /> Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">৳{earnings.month}</p>
          </CardContent>
        </Card>
      </div>

      {/* Ride Requests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center items-center gap-2">
            <Car className="w-5 h-5 text-primary" /> Active Rides
          </CardTitle>
        </CardHeader>
        <CardContent>
          {rideRequests.length > 0 ? (
            <ul className="space-y-3">
              {rideRequests.map((ride) => (
                <li
                  key={ride.id}
                  className="rounded-lg p-2 border shadow-sm">
                  <div className="flex items-center justify-between">
                    <Car className="bg-primary w-10 h-10 rounded-full p-1" />
                    <p className="font-medium">{ride.pickup}</p>
                    <span>→ </span>
                    <p>{ride.drop}</p>
                    <p className="text-sm">Fare: ৳{ride.fare}</p>
                    <Button
                      className="bg-primary text-foreground"
                      size="sm">
                      Accept
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No ride requests available.</p>
          )}
        </CardContent>
      </Card>

      {/* Accepted Rides */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" /> Accepted Rides
          </CardTitle>
        </CardHeader>
        <CardContent>
          {acceptedRides.length > 0 ? (
            <ul className="space-y-3">
              {acceptedRides.map((ride) => (
                <li
                  key={ride.id}
                  className="flex items-center justify-between rounded-lg p-3 shadow-sm">
                  <div>
                    <p className="font-medium">
                      {ride.pickup} → {ride.drop}
                    </p>
                    <p className="text-sm text-green-700">
                      Status: {ride.status}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary">
                    Complete
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">
              No accepted rides currently.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverDashboard;
