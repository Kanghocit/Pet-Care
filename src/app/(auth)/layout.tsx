import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 to-blue-100 font-[Quicksand]">
      {children}
    </div>
  );
};

export default AuthLayout;
