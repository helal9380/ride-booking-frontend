/** @format */

import { Link } from "react-router";
import Testimonials from "./Testimonials";

const HowToWorkSection = () => {
  return (
    <div className="my-5">
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="md:text-2xl text-xl text-background font-semibold text-center mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-foreground">
          <div className="bg-primary p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-2">1. Sign Up</h3>
            <p>Create an account as a Rider or Driver.</p>
          </div>
          <div className="bg-primary p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-2">2. Book or Accept Rides</h3>
            <p>Riders request rides, Drivers accept them.</p>
          </div>
          <div className="bg-primary p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-2">3. Reach Destination</h3>
            <p>Enjoy a safe and timely ride or earn money.</p>
          </div>
        </div>
      </section>

      <section className=" py-16">
        <h2 className="text-2xl text-background font-semibold text-center mb-10">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 text-foreground gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-primary p-6 rounded shadow text-center">
            <h3 className="font-bold mb-2">Secure Rides</h3>
            <p>Top-notch safety and security features.</p>
          </div>
          <div className="bg-primary p-6 rounded shadow text-center">
            <h3 className="font-bold mb-2">Real-Time Tracking</h3>
            <p>Track your ride in real time.</p>
          </div>
          <div className="bg-primary p-6 rounded shadow text-center">
            <h3 className="font-bold mb-2">Multiple Payments</h3>
            <p>Pay via card, cash, or wallet.</p>
          </div>
          <div className="bg-primary p-6 rounded shadow text-center">
            <h3 className="font-bold mb-2">24/7 Support</h3>
            <p>Help whenever you need it.</p>
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="bg-primary text-foreground text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Join Today</h2>
        <p className="mb-6">Sign up now and get your first ride free!</p>
        <Link
          to="/register"
          className="text-foreground px-6 py-2 rounded">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default HowToWorkSection;
