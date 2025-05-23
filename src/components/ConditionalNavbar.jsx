'use client';
import { usePathname } from 'next/navigation';
import BottomNavbar from "@/components/BottomNavbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  // Hide navbar on /add-reminder
  const showNavbar = !pathname?.startsWith('/add-reminder');
  return showNavbar ? <BottomNavbar /> : null;
}