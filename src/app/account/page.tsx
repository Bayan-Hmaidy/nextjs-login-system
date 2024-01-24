"use client";

import '@/app/globals.css'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
type userData = { username: string; email: string };

export default function Account() {
  const router = useRouter();
  const [data, setData] = useState<userData>({ username: "", email: "" });
  useEffect(() => {
    getUserData();
  }, []);

  const onLogout = async () => {
    await axios("/api/logout");
    router.push("/login");
  };

  const getUserData = async () => {
    try {
      const response = await axios.get("/api/account");
      const userData: userData = response.data;
      setData(userData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Account Page</h1>
      <h2 className="text-xl mb-2">Hello {data.username}</h2>
      <p className="text-gray-600 mb-4">Email: {data.email}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        onClick={onLogout}
      >
        Log out
      </button>
    </div>
  );
}
