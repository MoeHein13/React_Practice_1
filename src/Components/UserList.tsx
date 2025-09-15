import type { userProps } from "../Pages/HomePage";
import { Link } from "react-router-dom";

type userListProps = {
  users: userProps[];
};

const UserList = ({ users }: userListProps) => {
  
  const renderUser = users.map((user) => {
    return (
      <Link to={`/users/${user.id}`} key={user.id} className="w-full">
        <div className="m-2 border text-center max-w-full px-2 rounded-xl shadow-lg cursor-pointer transition-transform duration-200 hover:-translate-y-1">
          <p><span className="font-semibold">Name :</span> {user.name}</p>
          <p><span className="font-semibold">Email :</span> {user.email}</p>
          <p><span className="font-semibold">Company :</span> {user.company.name}</p>
        </div>
      </Link>
    );
  });
  return <div className="flex flex-col items-center">{renderUser}</div>;
};

export default UserList;
