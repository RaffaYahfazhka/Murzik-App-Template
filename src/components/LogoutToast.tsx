"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

export default function LogoutToast() {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;

    const flag = sessionStorage.getItem("logout-success");

    if (flag === "1") {
      firedRef.current = true;
      sessionStorage.removeItem("logout-success");
      toast.success("Logout berhasil");
    }
  }, []);

  return null;
}
