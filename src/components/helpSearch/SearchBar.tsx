import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce ";

interface SearchBarProps {
  setSearch: (value: string) => void;
  handleSearchSubmit: () => void;
}

const SearchBar = ({ setSearch, handleSearchSubmit }: SearchBarProps) => {
  // state for search bar

  const [searchTerm, setSearchTerm] = useState("");

  // debounced search term

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearch]);

  return (
    <div className="flex justify-center gap-5  my-6 w-full">
      <Input
        type="text"
        placeholder="Search"
        className="w-full rounded-l-md border border-gray-300 focus-visible:ring-offset-0 focus-visible:ring-0 h-12 text-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        onClick={handleSearchSubmit}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-r-md h-12 text-md"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
