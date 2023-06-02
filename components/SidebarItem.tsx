import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarProps> = ({ icon: Icon, label, active, href }) => {
  return (
    <Link
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white"
      )}
      href={href}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
