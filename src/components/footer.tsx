import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className="h-12 flex w-full bg-[rgb(5,7,8)]    justify-center ">
      <div className=" max-w-screen-md w-full border-t-1 border-white/35 h-full flex justify-between items-center px-4 ">
        <p className="text-sm">© 2024 Maciej. All rights reserved.</p>
        <div className="flex flex-row items-center gap-6">
          <Link href="https://www.linkedin.com/in/maciej-pawluczuk/">
            <CiLinkedin size={28} />
          </Link>

          <Link href="https://github.com/Rata-z">
            <FiGithub size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
