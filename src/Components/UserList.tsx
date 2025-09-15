
import type { userProps } from "../Pages/HomePage";

type userListProps = {
  users: userProps[];
};

const UserList = ({ users }: userListProps) => {
  const renderUser = users.map((user) => {
    return (
      <div
        key={user.id}
        className=" m-2 border text-center max-w-full px-2 rounded-xl shadow-lg cursor-pointer transition-transform duration-200 hover:-translate-y-1"
      >
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
        <p>Company : {user.company.name}</p>
      </div>
    );
  });
  return <div className="flex flex-col items-center">{renderUser}</div>;
};

export default UserList;
