import { useCallback, memo } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { applyYearFilter } from "@/store/movie/action";
import Dropdown, {
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
} from "@/components/shared/dropdown";
import { generateYearsList } from "@/utils/dateUtils";

const years = generateYearsList(1990);

function ReleaseYearFilter() {
  const dispatch = useAppDispatch();

  const currentYear = useAppSelector((state) => state.movies.searchParams.y);
  const yearFilterLoading = useAppSelector(
    (state) => state.movies.yearFilterLoading
  );

  const handleYearSelect = useCallback(
    (year: string | undefined) => {
      dispatch(applyYearFilter(year || ""));
    },
    [dispatch]
  );

  return (
    <Dropdown
      buttonText={currentYear ? `Year: ${currentYear}` : "Release Year"}
      className="release-year-filter"
      disabled={yearFilterLoading}
    >
      <DropdownHeader title="Filter by year" />
      <DropdownItem
        value=""
        label="All Years"
        isActive={currentYear === ""}
        onClick={handleYearSelect}
      />
      <DropdownDivider />
      {years.map((year) => (
        <DropdownItem
          key={year}
          value={year}
          label={year}
          isActive={currentYear === year}
          onClick={handleYearSelect}
        />
      ))}
    </Dropdown>
  );
}

export default memo(ReleaseYearFilter);
