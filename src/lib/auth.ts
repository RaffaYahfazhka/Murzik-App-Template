import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "sonner";

interface LoginPayload {
  email: string;
  password: string;
}

export async function login(
  payload: LoginPayload,
  router: AppRouterInstance,
) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data: { message?: string } = {};

  const text = await res.text();
  if (text) data = JSON.parse(text);

  if (!res.ok) {
    toast.error(data.message ?? "Login gagal");
    return false;
  }

  toast.success("Login berhasil");

  router.replace("/");
  router.refresh();

  return true;
}

export async function logout(router: AppRouterInstance) {
  await fetch("/api/logout", { method: "POST" });

  router.replace("/");
  router.refresh();

  toast.success("Logout berhasil");
}
