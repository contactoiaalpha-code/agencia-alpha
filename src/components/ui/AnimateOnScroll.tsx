import React from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = "",
}) => {
  return <div className={className}>{children}</div>;
};
