"use client";
// NotFound.js

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">Page Not Found</p>
      <Button className="my-4 " onClick={() => router.back()}>
        Go To Home
      </Button>
    </div>
  );
}

export default NotFound;
