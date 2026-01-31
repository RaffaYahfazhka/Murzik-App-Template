import Navbar from "@/containers/Navbar";
import { Meteors } from "@/components/ui/meteors";
import { Toaster } from "sonner";
import LogoutToast from "@/components/LogoutToast";

export default async function Page() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <LogoutToast />
      <Navbar />

      <div className="relative flex h-[500px] w-full items-center justify-center">
        <Meteors number={30} />
        <span className="text-8xl font-semibold">Meteora</span>
      </div>
    </>
  );
}
