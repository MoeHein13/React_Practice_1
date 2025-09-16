import type { ChangeEvent, FormEvent } from "react";

type SearchProp = {
  filterUser: string;
  handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchList = ({ filterUser, handleFilter, handleSubmit }: SearchProp) => {
  return (
    <div className="border-0 p-3 my-4 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search the user"
          value={filterUser}
          onChange={handleFilter}
          className="border p-4 rounded-xl mr-4"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SearchList;
