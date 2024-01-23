"use client";

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
    <div>
      <h1>Signup Form</h1>
      <form
        onSubmit={(e) => {
          onSignup(e);
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          required
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Signup</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
