import React, { useRef } from "react";
import { defaultNavItems } from "../defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { logout } from "../../firebase";
import { KeyIcon } from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });
  return (
    <div className="sidebar w-18 md:w-64 shadow h-screen ">
      <Link to={"/dashboard"}>
        <h2 className="m-4 text-lg text-center ">React App</h2>
      </Link>
      <nav className="md:sticky top-0 md:top-16">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2 ">
          {navItems.map((item, index) => {
            return (
              <Link
                className="flex my-2 p-3 hover:bg-blue-100"
                key={index}
                to={item.href}
              >
                <div className="mx-2">{item.icon}</div>
                <div className="mx-2 md:block hidden">{item.label}</div>
              </Link>
            );
          })}
          <Link
            className="flex fixed bottom-0 my-2 p-3 hover:bg-blue-100"
            onClick={logout}
            to="/login"
          >
            <div className="mx-2"><KeyIcon className="w-6 h-6" /></div>
            <div className="mx-2 md:block hidden">Logout</div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
