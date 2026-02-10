import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`container max-w-4xl mx-auto py-8 md:py-12 px-2 ${className}`}>
      {children}
    </div>
  );
}
