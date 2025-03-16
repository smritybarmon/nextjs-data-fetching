"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

export default function MealsSearchInput() {
  //   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div className="flex justify-center">
      <input
        className="bg-amber-50 w-1/4 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
