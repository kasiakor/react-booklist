import { useEffect, useState } from "react";

type PaginationProps = {
  totalPages: number;
  InitialPage?: number;
  OnPageChange?: (page: number) => void;
};

export function Pagination({
  totalPages,
  InitialPage = 1,
  OnPageChange,
}: PaginationProps) {
  const [CurrentPage, SetCurrentPage] = useState(InitialPage);

  useEffect(() => {
    OnPageChange?.(CurrentPage);
  }, [CurrentPage, OnPageChange]);

  const goToPage = (page: number) => {
    SetCurrentPage(page);
  };

  return (
    <div>
      {CurrentPage > 1 && (
        <button onClick={() => goToPage(CurrentPage - 1)}>{"<"}</button>
      )}

      <span>Page </span>

      <select
        value={CurrentPage}
        onChange={(e) => goToPage(Number(e.target.value))}
      >
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <option key={page} value={page}>
              {page}
            </option>
          );
        })}
      </select>

      <span> of {totalPages}</span>

      {CurrentPage < totalPages && (
        <button onClick={() => goToPage(CurrentPage + 1)}>{">"}</button>
      )}
    </div>
  );
}
export default Pagination;
