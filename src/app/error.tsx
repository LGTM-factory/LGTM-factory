"use client";

import { Button } from "@/components/shadcn-ui/button";
import { useEffect } from "react";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mt-8 space-y-8">
      <h2 className="text-2xl font-bold">🚨 Something went wrong 🐈‍⬛</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}

export default Error;