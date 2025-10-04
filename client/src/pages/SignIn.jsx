import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Github, Apple, Facebook } from "lucide-react"  // lucide-react icons
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-5xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
        <CardContent className="grid md:grid-cols-2 p-0">
          {/* Left Side - Login Form */}
          <form className="p-10 space-y-6 flex flex-col justify-center">
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Welcome Back 👋
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Enter your credentials to access your account
              </p>
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  className="h-12"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel>Password</FieldLabel>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  type="password"
                  placeholder="••••••"
                  className="h-12"
                  required
                />
              </Field>
            </FieldGroup>

            <Button type="submit" className="w-full h-12 text-lg font-semibold">
              Sign In
            </Button>

            <FieldSeparator>Or continue with</FieldSeparator>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="h-12 flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">Github</span>
              </Button>
              <Button variant="outline" className="h-12 flex items-center justify-center gap-2">
                <Apple className="w-5 h-5" />
                <span className="hidden sm:inline">Apple</span>
              </Button>
              <Button variant="outline" className="h-12 flex items-center justify-center gap-2">
                <Facebook className="w-5 h-5 text-blue-600" />
                <span className="hidden sm:inline">Facebook</span>
              </Button>
            </div>

            <FieldDescription className="text-center text-gray-600 dark:text-gray-400">
              Don’t have an account?{" "}
              <Link to={'/signup'}>Sign Up</Link>
            </FieldDescription>
          </form>

          {/* Right Side - Image */}
          <div className="hidden md:block relative">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000"
              alt="Login Illustration"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white space-y-2">
              <h2 className="text-2xl font-bold">Discover Delicious Meals</h2>
              <p className="text-sm opacity-90">
                Join us and explore recipes, restaurants, and more.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignIn
