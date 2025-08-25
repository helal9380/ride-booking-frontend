/** @format */

export default function FAQ() {
  return (
    <div className="max-w-4xl my-10 bg-primary text-foreground mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">FAQ</h1>

      <details className="mb-4">
        <summary className="font-semibold">How to book a ride?</summary>
        <p className="ml-4 mt-2">
          Sign up and use the ride request form on the dashboard.
        </p>
      </details>
      <details className="mb-4">
        <summary className="font-semibold">How do drivers get paid?</summary>
        <p className="ml-4 mt-2">
          Drivers receive payments weekly via bank transfer.
        </p>
      </details>
      <details>
        <summary className="font-semibold">
          What if I forget something in the car?
        </summary>
        <p className="ml-4 mt-2">
          Contact support via the Contact page with ride details.
        </p>
      </details>
    </div>
  );
}
