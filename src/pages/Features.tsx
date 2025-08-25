/** @format */
const features = [
  {
    role: "Rider",
    title: "Seamless Ride Experience",
    points: [
      "Quick and easy ride booking.",
      "Live driver tracking and updates.",
      "Secure payment options: cash, card, or wallet.",
      "Ride history and receipts.",
      "Ratings and support system.",
    ],
  },
  {
    role: "Driver",
    title: "Manage Your Rides Efficiently",
    points: [
      "Accept or decline ride requests.",
      "Track active and upcoming rides.",
      "Earnings dashboard with payout history.",
      "Optimized navigation and routes.",
      "Profile and ratings management.",
    ],
  },
  {
    role: "Admin",
    title: "Complete Platform Control",
    points: [
      "Manage users and roles (riders, drivers, admins).",
      "Monitor rides and disputes in real time.",
      "Access revenue and performance analytics.",
      "Update policies, promotions, and pricing.",
      "Ensure security and compliance.",
    ],
  },
];
export default function Features() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl text-foreground font-bold mb-12">
          Our Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.role}
              className="bg-primary rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {feature.role}
              </h3>
              <h4 className="text-lg font-mediumt text-start text-foreground mb-4">
                {feature.title}
              </h4>
              <ul className="text-foreground space-y-2 text-left">
                {feature.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start ">
                    <span className="text-foreground mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
