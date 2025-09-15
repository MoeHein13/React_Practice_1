import type { ChangeEvent } from "react";

type SearchProp = {
  filterUser: string;
  handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchList = ({ filterUser, handleFilter }: SearchProp) => {
  return (
    <div className="border-0 p-3 my-4">
      <input
        type="text"
        placeholder="Search the user"
        value={filterUser}
        onChange={handleFilter}
        className="border p-4 rounded-xl"
      />
    </div>
  );
};

export default SearchList;
