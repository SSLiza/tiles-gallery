"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Registration successful! Please check your email.");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <Card className="w-full max-w-md shadow-2xl rounded-2xl py-10">

        {/* Title */}
        <h1 className="text-center text-3xl font-bold mb-6">
          Create Account
        </h1>

        <Form className="flex w-11/12 mx-auto flex-col gap-5" onSubmit={onSubmit}>

          {/* NAME */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input
              placeholder="Enter your name"
              className="focus:border-[#c9a96e]"
            />
            <FieldError />
          </TextField>

          {/* IMAGE */}
          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input
              placeholder="Image URL"
              className="focus:border-[#c9a96e]"
            />
            <FieldError />
          </TextField>

          {/* EMAIL */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input
              placeholder="john@example.com"
              className="focus:border-[#c9a96e]"
            />
            <FieldError />
          </TextField>

          {/* PASSWORD */}
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              className="focus:border-[#c9a96e]"
            />
            <Description>
              Must be 8+ chars, 1 uppercase, 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* BUTTONS */}
          <div className="flex gap-3">

            <Button
              type="submit"
              className="bg-[#5B7E3C] text-white hover:bg-[#4a6a30] w-full"
            >
              <Check />
              Register
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full text-[#5B7E3C]"
            >
              Reset
            </Button>

          </div>
        </Form>

      </Card>
    </div>
  );
}