"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    name: "home",
    href: "/home",
    icon: "/assets/home-navbar-icon.svg",
    iconSelected: "/assets/home-navbar-icon.svg", 
  },
  {
    name: "favorite",
    href: "/favorite",
    icon: "/assets/search.svg",
    iconSelected: "/assets/search-selected.svg",
  },
  {
    name: "reminders",
    href: "/daily-reminders",
    icon: "/assets/nav-item.svg",
    iconSelected: "/assets/pack-navbar-icon.svg",
  },
  {
    name: "pet",
    href: "/pet",
    icon: "/assets/nav-icon.svg",
    iconSelected: "/assets/nav-icon.svg",
  },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-white h-16 flex items-center justify-around z-50">
      {NAV_ITEMS.map((item) => {
        const selected = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-center transition-all text-nowrap ${
              selected
                ? "bg-black rounded-full px-3 py-2"
                : ""
            }`}
            aria-current={selected ? "page" : undefined}
          >
            <Image
              src={selected && item.iconSelected ? item.iconSelected : item.icon}
              alt={item.name}
              width={28}
              height={28}
              className={selected ? "text-white" : "text-gray-500"}
              style={{
                filter: selected ? "invert(1) brightness(2)" : "none",
              }}
            />
            {selected && (
              <span className="text-xs mt-1 text-white font-medium">{item.name}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
