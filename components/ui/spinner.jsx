import React from "react";

export default function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10.5S6.477 21 12 21v-2a8 8 0 01-8-8z"
      ></path>
    </svg>
  );
}
