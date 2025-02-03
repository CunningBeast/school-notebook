import { LogoIcon } from "@/shared/ui/logo-icon";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex flex-1 items-center gap-2">
      <LogoIcon className="w-6 h-6" />
      <span className="font-bold inline-block">School Notebook</span>
    </Link>
  );
}
