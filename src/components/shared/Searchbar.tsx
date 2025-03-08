import { debounce } from "lodash";
import { Search, Loader2 } from "lucide-react";
import { memo, useCallback, useState } from "react";

interface SearchbarProps {
  initialValue?: string;
  placeholder: string;
  onSearch: (searchTerm: string) => void;
  debounceTime?: number;
  searching?: boolean;
}

function Searchbar({
  initialValue,
  placeholder,
  onSearch,
  debounceTime = 300,
  searching = false,
}: SearchbarProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue || "");

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      onSearch(term);
    }, debounceTime),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className={`input-group`}>
      <span className="input-group-text">
        {searching ? (
          <Loader2 className="animate-spin" />
        ) : (
          <Search size={16} />
        )}
      </span>

      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        aria-label={placeholder}
      />
    </div>
  );
}

export default memo(Searchbar);
