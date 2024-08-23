import React, { ButtonHTMLAttributes, ReactNode } from "react";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  return (
    <button 
      {...props}
      className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white text-black hover:bg-gray-200`}
    >
      {children}
    </button>
  );
};

export default Button;