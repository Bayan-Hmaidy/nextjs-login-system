"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // neither errors and other cases are handled, not the styles are added yet! To be added later in other commits

  const onLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/login", {
        email,
        password,
      });
      console.log(response);

      router.push("/account");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form
        onSubmit={(e) => {
          onLogin(e);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        <p>
          New member? <a href="/signup">Create new account</a>
        </p>
      </form>
    </div>
  );
}
