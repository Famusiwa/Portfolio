import React from "react";

interface ButtonRel extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

const Button: React.FC<ButtonRel> = ({
  loading,
  children,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`
        relative flex items-center justify-center gap-2
        transition-all
        ${loading ? "blur-[1px] pointer-events-none" : ""}
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Spinner overlay */}
      {loading && (
        <span
          className="
            absolute
            w-4 h-4
            border-2 border-white
            border-t-transparent
            rounded-full
            animate-spin
          "
        />
      )}
      {children}
    </button>
  );
};

export default Button;
