/** @format */

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 text-foreground py-16 space-y-10">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>
        We are dedicated to connecting riders and drivers with ease and safety.
        Our mission is to create a seamless transportation experience for
        everyone.
      </p>
      <h2 className="text-xl font-semibold">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-primary p-4 rounded shadow text-center">
          <h3 className="font-bold">CEO</h3>
          <p>Leader of the company</p>
        </div>
        <div className="bg-primary p-4 rounded shadow text-center">
          <h3 className="font-bold">CTO</h3>
          <p>Tech visionary</p>
        </div>
        <div className="bg-primary p-4 rounded shadow text-center">
          <h3 className="font-bold">COO</h3>
          <p>Operations manager</p>
        </div>
      </div>
    </div>
  );
}
