

import React, { PropsWithChildren, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props: PropsWithChildren) => {
  // hook to set/unset flag
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
     

      <div className="grid md:grid-cols-sidebar">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        {props.children}
      </div>
      
    </div>
  );
};

export default Layout;