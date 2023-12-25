import { FileRoute, Link } from "@tanstack/react-router";
import { Button, Input, Label } from "components/ui";
import { FaEye } from "react-icons/fa";

export const Route = new FileRoute('/auth/signup').createRoute({
  component: Signup,
});
function Signup() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-violet-500 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">Create account</p>

          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                type="email"
                id="email"
                placeholder="Enter email"
                className="rounded border-gray-200 focus:border-gray-500"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                className="rounded border-gray-200 focus:border-gray-500"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <FaEye className="h-4 w-4 text-gray-400" />
              </span>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full rounded bg-violet-500 font-medium text-white"
          >
            Submit
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/auth/login" className="underline" href="">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
