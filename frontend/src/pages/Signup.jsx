import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from "../services/userService";
import SubmitButton from "../components/buttons/SubmitButton";


const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // Watch the password field to validate confirm password
  const password = watch("password");

  async function onSubmit(data) {
    try {
      const response = await userService.signup(data);
      if (response.status === 201) {
        toast.success(response.data.detail);
        reset();
      } else {
        toast.error(response.data.detail);
      }
    } catch (error) {
      if (error.response.status === 409) {
        toast.warning(error.response.data.detail);
      } else {
        toast.error(error.response.data.detail || 'An error occurred');
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <section className="dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email is required!",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Invalid email format!",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", {
                      required: "Password is required!",
                      minLength: {
                        value: 4,
                        message: "Password must be at least 4 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("confirmPassword", {
                      required: "Please confirm your password!",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-600 checked:bg-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800"
                      {...register("terms", {
                        required: "You must accept the terms and conditions!",
                      })}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-indigo-600 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {errors.terms && (
                  <p className="text-red-600 text-sm">{errors.terms.message}</p>
                )}

                <SubmitButton isSubmitting={isSubmitting} text={"Create an account"} />

                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
