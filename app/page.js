"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signout } from "./actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => signout()}>FUCK U</Button>
    </main>
  );
}
