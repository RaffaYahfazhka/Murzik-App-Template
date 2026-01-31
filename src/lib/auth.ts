import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "sonner";

export async function logout(router: AppRouterInstance) {
  await fetch("/api/logout", { method: "POST" });

  router.replace("/"); 
  router.refresh();        
  toast.success("Logout berhasil");
}

