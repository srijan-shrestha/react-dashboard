import React from "react";
import {
    BookOpenIcon,
    CalculatorIcon,

  HomeIcon,
  KeyIcon,
  PlayIcon,
  SunIcon,
  UserGroupIcon,

} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar/Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Weather",
    href: "/dashboard",
    icon: <SunIcon className="w-6 h-6" />,
  },
  {
    label: "Calculator",
    href: "/calculator",
    icon: <CalculatorIcon className="w-6 h-6" />,
  },
  {
    label: "Users",
    href: "/users",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Movie",
    href: "/movie",
    icon: <PlayIcon className="w-6 h-6" />,
  },
];