"use client";
import { Eye, EyeOff, Linkedin } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <>
      <div className="w-full h-full flex justify-center ">
        <div className="w-full sm:w-96 lg:w-5/12 xl:w-4/12 p-4 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full 2xl:w-96">
            <div className=" rounded-lg p-4 w-full">
              <h1 className="text-2xl font-bold">Login you account</h1>
              <p className="text-sm">
                Enter your email & password below to login your account
              </p>
              <div className="mt-4">
                <h1 className="text-sm mt-2">Email</h1>
                <input
                  onChange={(e) =>
                    setFormData((prevSate) => ({
                      ...prevSate,
                      email: e.target.value,
                    }))
                  }
                  required
                  name="email"
                  id="Email"
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none border border-black p-2 font-semibold text-sm w-full rounded-md mt-1 placeholder:font-normal"
                />
                <h1 className="text-sm mt-2">Password</h1>
                <div className="border border-black p-2 mt-1 rounded-md w-full h-10 flex justify-center items-center ">
                  <input
                    onChange={(e) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                      }));
                    }}
                    required
                    name="password"
                    id="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="outline-none font-semibold text-sm w-full placeholder:font-normal"
                  />
                  <button
                    aria-label="eye"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
                {/* Password Condetions */}
                <div className="w-full h-10 mt-6">
                  <button
                    type="submit"
                    className="border border-black bg-black text-white rounded-md w-full h-full text-sm"
                  >
                    Sign In
                  </button>
                </div>
                <div className="w-full text-center mt-1">
                  <span className="text-sm">
                    Doesn't have an account? please
                    <Link
                      href="/"
                      className="ml-1 underline text-blue-600 font-semibold"
                    >
                      Register
                    </Link>
                  </span>
                </div>
                <div className="flex items-center gap-4 w-full py-6">
                  <span className="border-t border-black w-full"></span>
                  <span className="text-sm font-bold">OR</span>
                  <span className="border-t border-black w-full"></span>
                </div>
                <div className="border border-blue-500 w-full h-10 flex justify-center items-center rounded-md">
                  <Linkedin className="text-blue-500" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden lg:block w-8/12 bg-black h-full text-white"></div>
      </div>
    </>
  );
};

export default LoginPage;
