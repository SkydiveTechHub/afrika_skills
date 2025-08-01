"use client";

import React, { useState } from "react";
// import Sidebar, { AppSidebar } from "./Sidebar";
import { AppSidebar } from "./Sidebar";
import Navbar from "./Navbar";


const DashboardLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <>
      <div className="flex w-full">
        <AppSidebar/>
        {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
        <div className="relative flex-1 transition-all duration-300 ml-0 overflow-x-hidden h-screen bg-[#f9fafb] w-full">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="p-6 overflow-y-auto overflow-x-hidden mt-11 relative pb-12 space-y-4">
            {children}
          </div>
        </div>
      </div>

    </>
  );
};

export default DashboardLayoutProvider;
