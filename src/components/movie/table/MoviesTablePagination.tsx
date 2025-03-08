import {
  ChevronLast,
  ChevronFirst,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Pagination from "../../shared/pagination";
import { useAppDispatch, useAppSelector } from "@/store";
import { applyPageFilter } from "@/store/movie/action";
import { useCallback } from "react";

export default function MoviesTablePagination() {
  const totalResults = useAppSelector((state) => state.movies.totalResults);
  const currentPage = useAppSelector((state) => state.movies.searchParams.page);

  const dispatch = useAppDispatch();

  const handlePageChange = useCallback(
    (page: number) => {
      dispatch(applyPageFilter(page));
    },
    [dispatch]
  );

  return totalResults > 0 ? (
    <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(totalResults / 10)}
      onPageChange={handlePageChange}
      prevLabel={<ChevronLeft size={16} />}
      nextLabel={<ChevronRight size={16} />}
      firstLabel={<ChevronFirst size={16} />}
      lastLabel={<ChevronLast size={16} />}
    />
  ) : null;
}
