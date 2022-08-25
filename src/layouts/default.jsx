import React, { Component } from "react";
import { Components } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-slate-200 flex">
        <Components.Sidebar />
        <main className="w-5/6 lg:w-[95%] bg-gray-100 py-5 px-2 lg:px-9">
          <Components.Navbar />
          <section className="py-4 lg:py-5">{children}</section>
        </main>
      </div>
    </>
  );
};
