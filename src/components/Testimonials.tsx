/** @format */

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl text-foreground font-semibold text-center mb-10">
        What Our Customers Say
      </h2>
      <div className="grid text-foreground md:grid-cols-2 gap-6">
        <div className="bg-primary p-6 rounded shadow">
          <p>"Great experience! Easy to book rides."</p>
          <span className="block mt-4 font-bold">- Rider</span>
        </div>
        <div className="bg-primary p-6 rounded shadow">
          <p>"I love the flexibility of being a driver."</p>
          <span className="block mt-4 font-bold">- Driver</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
