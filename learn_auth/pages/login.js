import React, { useState } from "react";
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from '../lib/loginValidate'

function login() {
  //formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate:login_validate,
    onSubmit
  });
 
  async function onSubmit(values) {
    console.log(values)
  }

  const [show, setShow] = useState(false);
  //Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-2 ">
        <div className="title">
          <h1 className="text-gray-800 text-3xl font-bold py-1">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            voluptatem perspiciatis praesentium at! Quisquam, omnis?
          </p>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit} >
          <div className=" flex border rounded-xl relative [&>*]:text-gray-700 [&>*:hover]:text-gray-700">
            <input
              className=" w-full py-2 px-2 border border-gray-100 rounded-xl bg-slate-50 focus:outline-none"
              type="email"
              name="email"
              placeholder="your email here..."
              {...formik.getFieldProps('email')}
            />
            <span className="flex items-center px-4 ">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? <span className="text-rose-500" >{formik.errors.email}</span>: <></>}
          <div className={"flex border rounded-xl relative [&>*]:text-slate-700 [&>*:hover]:text-gray-700"}>
            <input
              className="w-full py-2 px-2 border border-gray-100 rounded-xl bg-slate-50 focus:outline-none "
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="your password here..."
              {...formik.getFieldProps('password')}
            />
            <span
              className="flex items-center px-4 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span>: <></>}
          {/* login buttons */}
          <div className="input-button">
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-2 text-grey-50 text-lg 
            hover:from-gray-50 hover:to-gray-100 border"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              onClick={handleGoogleSignin}
              className="w-full py-3 border flex justify-center gap-2 "
              type="button"
            >
              Sign in with Google <FcGoogle size={25} />
            </button>
          </div>
          <div className="input-button">
            <button
              className="w-full py-3 border flex justify-center gap-2  "
              type="button"
            >
              Sign in with Github <BsGithub size={25} />
            </button>
          </div>
        </form>
        {/* signup button */}
        <p className="text-center text-gray-400">
          dont have an account yet?{" "}
          <Link className="text-blue-70" href={"/register"}>
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default login;
