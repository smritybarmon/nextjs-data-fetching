import React from "react";

export default function RegisterPage() {
  return (
    <from className="flex justify-center">
      <div>
        <input
          className="bg-amber-50 m-2 text-black"
          type="text"
          name="text"
          id=""
        />
        <br />
        <input
          className="bg-amber-50 m-2 text-black"
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
          className="bg-amber-50 m-2 text-black"
          type="password"
          name="password"
          id=""
        />
        <br />
        <button type="submit">Register</button>
      </div>
    </from>
  );
}
