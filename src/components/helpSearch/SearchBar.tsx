import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="flex justify-center gap-5  my-6 w-full">
      <Input
        type="text"
        placeholder="Search"
        className="w-full rounded-l-md border border-gray-300 focus-visible:ring-offset-0 focus-visible:ring-0"
      />
      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-r-md">Search</Button>
    </div>
  );
};

export default SearchBar;
