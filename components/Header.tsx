import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex p-5 bg-blue-500 justify-between">
      <p className="font-bold text-white">SIMULA CREDIT</p>
      <ul className="flex gap-3">
        <li className="bg-white px-3 py-1 rounded-md text-blue-500">
          <Link href="/">Inicio</Link>
        </li>
        <li className="bg-white px-3 py-1 rounded-md text-blue-500">
          <Link href="/about">Acerca</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
