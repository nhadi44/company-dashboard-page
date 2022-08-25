import React from "react";
import { Icons } from "../icons";

export const Sidebar = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50  flex flex-col gap-10  py-10 w-1/6 lg:w-[5%]">
        <span className="flex justify-center">logo</span>
        <div className="sidebar-icon">
          <ul className="mb-6">
            <li className="p-5 flex justify-center">
              <a href="">
                <Icons.Home w={"h-6"} h={"h-6"} />
              </a>
            </li>
            <li>
              <a href="" className="p-5 flex justify-center">
                <Icons.Ticket />
              </a>
            </li>
            <li>
              <a href="" className="p-5 flex justify-center">
                <Icons.Clipboard />
              </a>
            </li>
            <li>
              <a href="" className="p-5 flex justify-center">
                <Icons.Archive />
              </a>
            </li>
            <li className="bg-emerald-100 border-l-4 border-l-emerald-600 flex justify-center p-5">
              <a href="">
                <Icons.Building />
              </a>
            </li>
          </ul>
          <ul className="mb-6">
            <li className="p-5 flex justify-center">
              <a href="">
                <Icons.Users />
              </a>
            </li>
            <li>
              <a href="" className="p-5 flex justify-center">
                <Icons.Queue />
              </a>
            </li>
            <li>
              <a href="" className="p-5 flex justify-center">
                <Icons.Cube />
              </a>
            </li>
            <li>
              <a href="" className="p-5 flex justify-center">
                <Icons.Squares />
              </a>
            </li>
            <li>
              <a href="" className="p-5 flex justify-center">
                <Icons.Search width={"h-6"} height={"h-6"} />
              </a>
            </li>
          </ul>
          <ul className="mb-6">
            <li className="p-5 flex justify-center">
              <a href="">
                <Icons.Cursor />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
