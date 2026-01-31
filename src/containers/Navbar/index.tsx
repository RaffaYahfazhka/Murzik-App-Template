"use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { toast, Toaster } from "sonner";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// interface NavbarProps {
//   showAuthAction?: boolean;
//   onLogout?: () => Promise<void> | void;
// }

// const Navbar: React.FC<NavbarProps> = ({
//   showAuthAction = true,
//   onLogout,
// }) => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     fetch("/api/session")
//       .then((res) => res.json())
//       .then((data) => setLoggedIn(data.loggedIn))
//       .catch(() => setLoggedIn(false));
//   }, []);

//   const handleLogout = async () => {
//     if (onLogout) {
//       await onLogout();
//     } else {
//       await fetch("/api/logout", { method: "POST" });
//     }

//     setLoggedIn(false);
//     toast.success("Logout berhasil");
//     router.push("/");
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-black/80">
//       <Toaster richColors position="top-center" />

//       <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
//         {/* LOGO */}
//         <Link href="/" className="font-bold text-lg">
//           MyApp
//         </Link>

//         {/* MENU */}
// <NavigationMenu>
//   <NavigationMenuList>
//     <NavigationMenuItem>
//       <NavigationMenuLink asChild>
//         <Link href="/" className="px-4 py-2 text-sm font-medium">
//           Home
//         </Link>
//       </NavigationMenuLink>
//     </NavigationMenuItem>

//     <NavigationMenuItem>
//       <NavigationMenuTrigger>Users</NavigationMenuTrigger>
//       <NavigationMenuContent>
//         <ul className="w-40 p-2">
//           <li>
//             <NavigationMenuLink asChild>
//               <Link href="/users" className="block px-3 py-2 text-sm">
//                 All Users
//               </Link>
//             </NavigationMenuLink>
//           </li>
//           <li>
//             <NavigationMenuLink asChild>
//               <Link href="/users/create" className="block px-3 py-2 text-sm">
//                 Create User
//               </Link>
//             </NavigationMenuLink>
//           </li>
//         </ul>
//       </NavigationMenuContent>
//     </NavigationMenuItem>

//     <NavigationMenuItem>
//       <NavigationMenuLink asChild>
//         <Link href="/about" className="px-4 py-2 text-sm font-medium">
//           About
//         </Link>
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//   </NavigationMenuList>
// </NavigationMenu>

//         {/* ACTION */}
// {showAuthAction && (
//   loggedIn ? (
//     <button
//       onClick={handleLogout}
//       className="rounded bg-red-600 px-4 py-1.5 text-sm text-white"
//     >
//       Logout
//     </button>
//   ) : (
//     <Link
//       href="/login"
//       className="rounded bg-black px-4 py-1.5 text-sm text-white dark:bg-white dark:text-black"
//     >
//       Login
//     </Link>
//   )
// )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Toaster } from "sonner";

import { logout } from "@/lib/auth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
  showAuthAction?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showAuthAction = true }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => setLoggedIn(data.loggedIn))
      .catch(() => setLoggedIn(false));
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-black/80">
      <Toaster richColors position="top-center" />

      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="font-bold text-lg">
          MyApp
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="px-4 py-2 text-sm font-medium">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Users</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-40 p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/users" className="block px-3 py-2 text-sm">
                        All Users
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/users/create" className="block px-3 py-2 text-sm">
                        Create User
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="px-4 py-2 text-sm font-medium">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {showAuthAction && (
          loggedIn ? (
            <button
              onClick={async () => {
                await logout(router);
                setLoggedIn(false);
              }}
              className="rounded bg-red-600 px-4 py-1.5 text-sm text-white cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded bg-black px-4 py-1.5 text-sm text-white dark:bg-white dark:text-black cursor-pointer"
            >
              Login
            </Link>
          )
        )}
      </div>
    </header>
  );
};

export default Navbar;

