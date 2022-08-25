import React from "react";
import { Components } from "..";
import { Icons } from "../icons";

export const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center">
          <Components.Breadcrumbs />
          <div className="navbar-right">
            <div className="flex gap-4 lg:gap-10 items-center">
              <ul className="flex items-center gap-2 lg:gap-5">
                <li>
                  <Icons.Search height={"h-4 lg:h-6"} width={"w-4 lg:w-6"} />
                </li>
                <li>
                  <Icons.Bell />
                </li>
              </ul>
              <ul className="flex items-center">
                <li className="flex items-center gap-2 lg:gap-5">
                  <img
                    src="/avatar.png"
                    alt="avatar"
                    className="h-4 w-4 lg:h-8 lg:w-8 rounded-full"
                  />
                  <a href="#" className="text-[10px] lg:text-lg">
                    Jhon Doe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
