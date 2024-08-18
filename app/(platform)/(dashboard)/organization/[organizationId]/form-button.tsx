"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FromButton = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button disabled={pending}>Submit</Button>
    </div>
  );
};
