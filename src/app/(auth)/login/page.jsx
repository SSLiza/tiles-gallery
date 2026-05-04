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

export default function LoginPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login successful!");
    }
  };

  const onGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <Card className="w-full max-w-md  shadow-2xl rounded-2xl py-10">

        <h1 className="text-center text-3xl font-bold mb-6">
          Welcome Back
        </h1>

        <Form className="flex w-11/12 mx-auto flex-col gap-5" onSubmit={onSubmit}>

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
              Login
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

        {/* Divider */}
        <p className="text-center text-[#7a756c] my-5">OR</p>

        {/* GOOGLE LOGIN */}
        <Button
          onClick={onGoogleSignIn}
          className="w-full bg-[#5B7E3C] text-white hover:bg-[#4a6a30]"
        >
          Sign in with Google
        </Button>

      </Card>
    </div>
  );
}