import React from "react";
import { Icons } from "../icons";

export const Breadcrumbs = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-[10px] lg:text-lg text-gray-500">Perusahaan</span>
        <span>
          <Icons.ChevronRight />
        </span>
        <span className="text-[10px] lg:text-lg font-semibold text-gray-700">
          Mitramas Infosys Global
        </span>
      </div>
    </>
  );
};
