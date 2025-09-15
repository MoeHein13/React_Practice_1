import axios from "axios";
import { useEffect, useState, type ChangeEvent } from "react";
import UserList from "../Components/UserList";
import SearchList from "../Components/SearchList";

export type userProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    any: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    any: string;
  };
};
const HomePage = () => {
  const [users, setUsers] = useState<userProps[]>([]);
  const [filterUser, setFilterUser] = useState("");

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterUser(e.target.value);
  };

  const filteredUser = users.filter((user) => {
    return user.name.toLowerCase().includes(filterUser.toLowerCase());
  });

  const fetchData = async () => {
    try {
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(reponse.data);
      console.log(users);
    } catch (err: unknown) {
      console.error(err instanceof Error ? err.message : "error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-dvh bg-gray-800 text-white ">
      <div className="flex justify-center w-full ">
        <SearchList filterUser={filterUser} handleFilter={handleFilter} />
      </div>
      <div className="flex justify-center items-center max-w-5xl m-auto">
        <UserList users={filteredUser} />
      </div>
    </div>
  );
};

export default HomePage;
