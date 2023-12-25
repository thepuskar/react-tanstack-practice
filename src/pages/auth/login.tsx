import { zodResolver } from "@hookform/resolvers/zod";
import { FileRoute, Link } from "@tanstack/react-router";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "components/ui";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { cn } from "utils";
import * as z from "zod";

export const Route = new FileRoute('/auth/login').createRoute({
  component: Login,
});

const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email."),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .min(8, { message: "Password must be at least 8 characters." })
    .max(20, { message: "Password must be at most 20 characters." }),
});

type FormData = z.infer<typeof LoginFormSchema>;

function Login() {
  const form = useForm<FormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(data: FormData) {
    console.log("Submit data", data);
  }

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        placeholder="Enter email"
                        className={cn(
                          "rounded border-gray-200 focus:border-gray-500",
                          {
                            "border-red-500 focus:border-red-500":
                              form.formState.errors.email,
                          }
                        )}
                      />
                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <MdOutlineAlternateEmail
                          className={cn("h-4 w-4 text-gray-400", {
                            "text-red-500": form.formState.errors.email,
                          })}
                        />
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        placeholder="Enter password"
                        className={cn(
                          "rounded border-gray-200 focus:border-gray-500",
                          {
                            "border-red-500 focus:border-red-500":
                              form.formState.errors.password,
                          }
                        )}
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <FaEye
                          className={cn("h-4 w-4 text-gray-400", {
                            "text-red-500": form.formState.errors.password,
                          })}
                        />
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 font-normal" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full rounded bg-violet-500 font-medium text-white hover:text-gray-900 border border-violet-500 hover:border "
            >
              Submit
            </Button>

            <p className="text-center text-sm text-gray-500">
              No account?
              <Link to="/auth/signup" className="underline" href="">
                Sign up
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
