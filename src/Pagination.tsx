import { useEffect, useState } from "react";

type PaginationProps = {
  totalPages: number;
  InitialPage?: number;
  OnPageChange?: (page: number) => void;
};

/**
 * Pagination component for navigating through pages of data.
 *
 * Props:
 * - totalPages (number): The total number of pages available.
 * - InitialPage (number, optional): The initial page to display (default is 1).
 * - OnPageChange (function, optional): Callback function called with the new page number whenever the page changes.
 *
 * Features:
 * - Displays previous and next buttons to navigate between pages.
 * - Shows a dropdown to select a specific page.
 * - Calls OnPageChange callback whenever the current page changes.
 * - Disables previous button on the first page and next button on the last page.
 *
 * Example usage:
 * <Pagination
 *   totalPages={10}
 *   InitialPage={1}
 *   OnPageChange={(page) => console.log(page)}
 * />
 */

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
