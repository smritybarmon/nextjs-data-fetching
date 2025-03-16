"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navber = () => {
  const pathName = usePathname();
  if (!pathName.includes("dashboard")) {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My Website</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Posts" className="text-white hover:text-gray-400">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/meals" className="text-white hover:text-gray-400">
                Meals
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
};

export default Navber;
