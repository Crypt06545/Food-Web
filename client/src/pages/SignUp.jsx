import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <Card className="w-full max-w-5xl shadow-lg border border-gray-200 rounded-xl overflow-hidden">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 p-0">
          
          {/* Left Side - Form */}
          <form className="p-6 md:p-10 flex flex-col justify-center">
            <FieldGroup className="space-y-6">
              
              {/* Heading */}
              <div className="flex flex-col items-center gap-2 text-center mb-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-800">
                  Create your account
                </h1>
                <p className="text-sm md:text-base text-gray-600">
                  Enter your details to get started with your account
                </p>
              </div>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="rounded-md"
                />
                <FieldDescription>
                  We&apos;ll never share your email with anyone else.
                </FieldDescription>
              </Field>

              {/* Passwords */}
              <Field className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="rounded-md"
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="confirm-password">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="rounded-md"
                  />
                </div>
              </Field>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-md bg-amber-500 hover:bg-amber-600 text-white font-semibold"
              >
                Create Account
              </Button>

              {/* Separator */}
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>

              {/* Social Buttons */}
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" type="button" className="rounded-md">
                  <img src="/icons/apple.svg" alt="Apple" className="h-5 w-5" />
                  <span className="sr-only">Apple</span>
                </Button>
                <Button variant="outline" type="button" className="rounded-md">
                  <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
                  <span className="sr-only">Google</span>
                </Button>
                <Button variant="outline" type="button" className="rounded-md">
                  <img src="/icons/meta.svg" alt="Meta" className="h-5 w-5" />
                  <span className="sr-only">Meta</span>
                </Button>
              </div>

              {/* Already Account */}
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-amber-600 font-semibold hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </FieldGroup>
          </form>

          {/* Right Side - Image */}
          <div className="relative hidden md:block bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80"
              alt="Sign Up Visual"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-xl md:text-2xl font-bold text-center px-4">
                Join our food community 🍴 <br /> and enjoy exclusive benefits
              </h2>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
