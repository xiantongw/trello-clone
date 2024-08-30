"use client";

import { useEffect, useState } from "react";
import { CardModal } from "../modals/card-modal";

export const ModalProvider = () => {
  const [isMonted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMonted) return null;

  return (
    <>
      <CardModal />
    </>
  );
};
