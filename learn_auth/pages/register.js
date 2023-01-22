import React, { useState } from "react";
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
function register() {
  const [show, setShow] = useState({ password: false, cpassword: false });

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-2 ">
        <div className="title">
          <h1 className="text-gray-800 text-3xl font-bold py-1">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            voluptatem perspiciatis praesentium at! Quisquam, omnis?
          </p>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-4">
          <div className=" flex border rounded-xl relative [&>*]:text-gray-200 [&>*:hover]:text-gray-700">
            <input
              className=" w-full py-2 px-2 border border-gray-100 rounded-xl bg-slate-50 focus:outline-none"
              type="text"
              name="username"
              placeholder="username"
            />
            <span className="flex items-center px-4 ">
              <HiOutlineUser size={25} />
            </span>
          </div>

          <div className=" flex border rounded-xl relative [&>*]:text-gray-200 [&>*:hover]:text-gray-700">
            <input
              className=" w-full py-2 px-2 border border-gray-100 rounded-xl bg-slate-50 focus:outline-none"
              type="email"
              name="email"
              placeholder="your email here..."
            />
            <span className="flex items-center px-4 ">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className=" flex border rounded-xl relative [&>*]:text-slate-0 [&>*:hover]:text-gray-700">
            <input
              className="w-full py-2 px-2 border border-gray-100 rounded-xl bg-slate-50 focus:outline-none "
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="your password here..."
            />
            <span
              className="flex items-center px-4 cursor-pointer"
              onClick={() => setShow({...show, password:!show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className=" flex border rounded-xl relative [&>*]:text-slate-0 [&>*:hover]:text-gray-700">
            <input
              className="w-full py-2 px-2 border border-gray-100 rounded-xl bg-slate-50 focus:outline-none "
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="confirm password"
            />
            <span
              className="flex items-center px-4 cursor-pointer"
              onClick={() => setShow({...show, cpassword:!show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

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
        </form>
        {/* signup button */}
        <p className="text-center text-gray-400">
          have an account yet?{" "}
          <Link className="text-blue-70" href={'/login'}>
            Sign In
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default register;
