import { memo } from "react";
import { getSizeClass } from "@/utils/classUtils";

import { getAlignmentClass } from "@/utils/classUtils";

import "@/components/shared/pagination/Pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: "sm" | "md" | "lg";
  maxVisiblePages?: number;
  showFirstLast?: boolean;
  alignment?: "start" | "center" | "end";
  prevLabel?: React.ReactNode;
  nextLabel?: React.ReactNode;
  firstLabel?: React.ReactNode;
  lastLabel?: React.ReactNode;
  ariaLabel?: string;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  size = "md",
  maxVisiblePages = 5,
  showFirstLast = true,
  alignment = "center",
  prevLabel = "Previous",
  nextLabel = "Next",
  firstLabel = "First",
  lastLabel = "Last",
  ariaLabel = "Pagination",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav aria-label={ariaLabel}>
      <ul
        className={`pagination ${getSizeClass(
          "pagination",
          size
        )} ${getAlignmentClass(alignment)}`}
      >
        {showFirstLast && (
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              aria-label="İlk sayfa"
            >
              {firstLabel}
            </button>
          </li>
        )}

        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Önceki sayfa"
          >
            {prevLabel}
          </button>
        </li>

        {visiblePages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Sonraki sayfa"
          >
            {nextLabel}
          </button>
        </li>

        {showFirstLast && (
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Son sayfa"
            >
              {lastLabel}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default memo(Pagination);
