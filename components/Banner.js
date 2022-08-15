import React, { useState } from "react";

export default function Banner() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="dark:text-white">
      {visible && (
        <div className="text-sm md:text-md px-10 relative mx-auto text-center bg-gradient-to-r from-red-300 via-green-500 to-blue-300 py-3 font-normal">
          🖌 Check out my interactive &nbsp;
          <a
            href="https://resume.ronnycoste.com"
            target="__blank"
            className="underline font-semibold"
          >
            Resume!
          </a>
          &nbsp; 🖌
          <button
            className="absolute right-0 mr-6"
            onClick={() => setVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}