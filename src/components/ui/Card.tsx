import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient";
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  hover = true,
}) => {
  const baseClasses = "rounded-xl transition-all duration-300";

  const variantClasses = {
    default: "bg-white border border-gray-200 shadow-lg",
    glass:
      "bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-xl",
    gradient:
      "bg-gradient-to-br from-yellow-400/20 via-cyan-400/20 to-yellow-400/30 border border-yellow-400/30 shadow-xl",
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover ? "hover:shadow-2xl hover:-translate-y-1" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

  return <div className={classes}>{children}</div>;
};
