import React from "react";

interface BackgroundGridProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex min-h-screen relative ">
      {/* Grid background */}
      <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('/images/grid.svg')] bg-repeat bg-[size:1300px]" />

      {/* Content section */}
      <div className={`w-full ${className}`}>{children}</div>
    </div>
  );
};

export default BackgroundGrid;
