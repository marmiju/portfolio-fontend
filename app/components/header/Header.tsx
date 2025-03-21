"use client";

import { HeaderList } from "@/lib/Headerlist";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
    const headerList = HeaderList()
    const pathname = usePathname(); // Get the current route

    return (
        <div className="w-80 rounded-full fixed left-1/2 transform -translate-x-1/2 z-10 mt-0 md:mt-2 p-1 backdrop-blur-xl shadow-lg border border-white text-gray-500">
            <ul className="flex w-full justify-center space-x-5 hover:cursor-pointer">
                {headerList.map((item) => (
                    <Link key={item.name} href={item.path}>
                        <li
                            className={`px-2 py-1 rounded-full text-sm transition-colors duration-1000 ${pathname === item.path
                                ? "text-white bg-gray-500"
                                : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
