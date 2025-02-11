"use client";

import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export function SignInButton() {
  const handleSignOut = () => signIn();

  return (
    <Button
      variant={"ghost"}
      className="p-px rounded-full self-center h-8 w-8"
      onClick={handleSignOut}
    >
      <LogIn className="mr-2 h-4 w-4" />
    </Button>
  );
}
