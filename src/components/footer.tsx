import React from "react";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-4 rounded-t bg-detailColor p-2 text-basicFont transition duration-300 hover:italic hover:text-basicDarkFont">
      <p className="cursor-default">Desing by Victor L. De Menezes</p>
      <a href="#up" className="text-basicFont">
        <ArrowUpIcon width={20} />
      </a>
    </footer>
  );
};

export default Footer;
