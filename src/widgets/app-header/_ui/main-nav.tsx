import { Button } from "@/shared/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export type NavLinkType = {
  title: string;
  href: string;
  icon?: string;
};

const navLink: NavLinkType[] = [
  { title: "Игры", href: "/" },
  { title: "О проекте", href: "/abaut" },
];

const mainNavTrigerStyle =
  "transition-colors hover:text-foreground/80 text-foreground/60";

export function MainNav({
  variant = "desktop",
  logo,
}: {
  variant?: "desktop" | "mobile";
  logo?: React.ReactNode;
}) {
  if (variant === "desktop") {
    return (
      <NavigationMenu>
        <NavigationMenuList className="flex flex-1 gap-6">
          {navLink.map(({ title, href }) => (
            <Link key={href} href={href}>
              <span className={mainNavTrigerStyle}>{title}</span>
            </Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  if (variant === "mobile") {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetTitle />
          <SheetHeader className=" border-b pb-5 mb-5">{logo}</SheetHeader>
          {navLink.map(({ title, href }) => (
            <SheetClose key={href} asChild>
              <Link href={href}>
                <span className={mainNavTrigerStyle}>{title}</span>
              </Link>
            </SheetClose>
          ))}
        </SheetContent>
      </Sheet>
    );
  }
}
