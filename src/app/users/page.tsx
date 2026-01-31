import { prisma } from "@/lib/prisma";
import { Toaster } from "sonner";

export const dynamic = "force-dynamic";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Toaster richColors position="top-center" />

      <main className="px-6 py-10">
        <h1 className="mb-6 text-2xl font-bold">Users</h1>

        {users.length === 0 ? (
          <p className="text-zinc-500">No users found.</p>
        ) : (
          <div className="overflow-x-auto rounded border bg-white">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-zinc-100 text-left">
                <tr>
                  <th className="border-b px-4 py-3">ID</th>
                  <th className="border-b px-4 py-3">Email</th>
                  <th className="border-b px-4 py-3">Name</th>
                  <th className="border-b px-4 py-3">Created At</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-zinc-50"
                  >
                    <td className="border-b px-4 py-2 font-mono">
                      {user.id}
                    </td>
                    <td className="border-b px-4 py-2">
                      {user.email}
                    </td>
                    <td className="border-b px-4 py-2">
                      {user.name ?? "-"}
                    </td>
                    <td className="border-b px-4 py-2 text-zinc-500">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
