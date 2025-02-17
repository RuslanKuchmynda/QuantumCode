"use client";

import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants/navbar-links";
import Link from "next/link";
import { paths } from "@/constants/paths";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === paths.signIn) {
    return;
  }

  return (
    <nav className="bg-card border-b-2 border-muted p-4">
      <ul className="flex justify-around items-center font-medium">
        <li className="text-3xl font-extrabold">
          <Link href={paths.home}>{"</QuantumCode>"}</Link>
        </li>
        {navbarLinks.map((item, key) => (
          <li key={key} className="uppercase">
            <Link
              href={item.link}
              className={pathname === item.link ? "text-primary" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
