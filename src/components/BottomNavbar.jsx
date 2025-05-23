"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    name: "home",
    href: "/home",
    icon: "/assets/home_icon.svg",
    iconSelected: "/assets/home_icon_white.svg", 
  },
  {
    name: "favorite",
    href: "/favorite",
    icon: "/assets/favorite.svg",
    iconSelected: "/assets/favorite_white.svg",
  },
  {
    name: "reminders",
    href: "/daily-reminders",
    icon: "/assets/reminder_logo_gray.svg",
    iconSelected: "/assets/reminder_logo.svg",
  },
  {
    name: "pet",
    href: "/pet",
    icon: "/assets/pet.svg",
    iconSelected: "/assets/pet_white.svg",
  },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full md:max-w-1/3 bg-white ml-5 md:ml-0 h-16 flex items-center justify-around">
      {NAV_ITEMS.map((item) => {
        const selected = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-center transition-all text-nowrap ${
              selected
                ? "bg-black rounded-2xl px-3 py-2"
                : ""
            }`}
            aria-current={selected ? "page" : undefined}
          >
            <Image
              src={selected && item.iconSelected ? item.iconSelected : item.icon}
              alt={item.name}
              width={28}
              height={28}
              className={selected ? "text-white z-10" : "text-gray-500 z-10"}
              style={{
                filter: selected ? "invert(1) brightness(2) z-10" : "none",
              }}
            />
            {selected && (
              <span className="text-sm text-white font-medium ml-1">{item.name}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
