"use client";

import React, { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=Secret12345`,
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };
  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12-px] flex justify-center items-center mr-5">
      <div>{status}</div>
      <button className="bg-black text-white p-3" onClick={() => revalidate()}>
        Revalidate
      </button>
    </div>
  );
}
