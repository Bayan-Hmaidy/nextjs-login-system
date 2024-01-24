"use client";

import '@/app/globals.css'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/signup", {
        username,
        email,
        password,
      });
      console.log(response);

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Signup Form</h1>
      <form onSubmit={onSignup}>
        <label className="block text-gray-700" htmlFor="username">
          Username
        </label>
        <input
          className="border rounded-md px-3 py-2 mb-3 w-full"
          required
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="border rounded-md px-3 py-2 mb-3 w-full"
          required
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          className="border rounded-md px-3 py-2 mb-3 w-full"
          required
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Signup
        </button>

        <p className="mt-3">
          Already have an account?{" "}
          <a className="text-blue-500" href="/login">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
