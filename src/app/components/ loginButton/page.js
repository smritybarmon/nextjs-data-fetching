"use client";
import React from "react";
import { signIn } from "next-auth/react";
export default function Loginbtn() {
  return (
    <div>
      {" "}
      <button onClick={() => signIn()}>login</button>
    </div>
  );
}
