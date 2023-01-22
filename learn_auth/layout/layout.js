import React from "react";
import Image from "next/image";
import mypic from "../public/assets/pic2.jpg";
function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-md relative overflow-hidden">
          <Image
            className="absolute bottom-0 z-1 top-0 left-0 right-0 w-full h-full bg-center overflow-hidden bg-cover"
            src={mypic}
            alt="Pics"
          />
          <div></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
