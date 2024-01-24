"use client";

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
    router.push('/login')
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
    <div>
      <h1>Account Page</h1>
      <h2>Hello {data.username}</h2>
      <p>email: {data.email}</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
}
