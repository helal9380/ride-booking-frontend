/** @format */

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    alert("Form submitted! " + JSON.stringify(data));
  };

  return (
    <div className="max-w-md mx-auto shadow-2xl border-primary border-1 rounded-lg my-10 px-4 py-16 text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4">
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className="border p-2 w-full"
        />
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className="border p-2 w-full"
        />
        <textarea
          {...register("message", { required: true })}
          placeholder="Message"
          className="border p-2 w-full"
        />
        <Button
          variant={"secondary"}
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded">
          Send
        </Button>
      </form>
    </div>
  );
}
