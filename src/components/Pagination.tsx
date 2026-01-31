import Link from "next/link";

interface Props {
  currentPage: number;
  totalItems: number;
  pageSize: number;
}

export default function Pagination({
  currentPage,
  totalItems,
  pageSize,
}: Props) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex gap-2">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`rounded px-3 py-1 text-sm ${
              page === currentPage
                ? "bg-black text-white"
                : "border"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
