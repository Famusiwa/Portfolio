import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  //   label: string;
  error?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {/* <label className="text-sm">{label}</label> */}

        <input
          ref={ref}
          {...props}
          className={`
            focus:outline-none
            ${error ? "border-red-500 focus:ring-red-300" : ""}
            ${className}
          `}
        />

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);
Input.displayName = "FormField";
export default Input;
