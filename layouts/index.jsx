import { Button, Navbar } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../assets/icons/LogoDark";
import VercelLogo from "../public/vercel.svg";
import { HiOutlineHome } from "react-icons/hi";

export default function Layout() {
  const menu = [
    {
      name: "Product",
      href: "#",
      isActive: true,
      submenu: [],
    },
    { name: "Pricing", href: "/pricing", isActive: false },
    { name: "Roadmap", href: "/roadmap", isActive: false },
  ];
  return (
    <>
      <Head>
        <title>API4UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex">
              <LogoDark />
            </Link>
            <ul className="flex items-center gap-4">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="">
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
