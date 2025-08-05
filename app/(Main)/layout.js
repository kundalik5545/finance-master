import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen px-2 md:px-5 py-5 md:py-5 bg-gray-100">
      {children}
    </div>
  );
};

export default MainLayout;
