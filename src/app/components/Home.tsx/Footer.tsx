import { Android, Apple, Discord, Youtube } from "@/app/reactIcons";
import React from "react";

function Footer() {
  return (
    <footer className="footer absolute bottom-0 sm:footer-horizontal h-fit bg-neutral text-neutral-content justify-around p-10">
      <nav className="flex flex-col items-center justify-center">
        <h6 className=" michroma-3 footer-title">Services</h6>
        <div className="flex w-[100px] flex-row justify-between ">
          <a className="link green-txt-1  text-[25px] link-hover">
            <Apple className="text-opacity-55" />
          </a>
          <a className="link green-txt-3 text-[25px] link-hover">
            <Android />
          </a>
        </div>
      </nav>
      <nav className="flex flex-col items-center justify-center">
        <h6 className="footer-title michroma-3">Company</h6>
        <div className="flex w-[400px] flex-row justify-between ">
          <a className="link link-hover michroma-1 ">About us</a>
          <a className="link link-hover michroma-1 ">Contact</a>
        </div>
      </nav>
      <nav className="flex flex-col items-center justify-center">
        <h6 className="footer-title michroma-3">Socials</h6>
        <div className="flex w-[100px] flex-row justify-between ">
          <a className="link green-txt-3 text-[25px] link-hover">
            <Discord />
          </a>
          <a className="link green-txt-3 text-[25px] link-hover">
            <Youtube />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
