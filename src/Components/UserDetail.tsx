import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { userProps } from "../Pages/HomePage";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<userProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(
          error instanceof Error ? error.message : "Error Fetching"
        );
      }
    };
    fetchData();
  }, [id]);

  if (!user) {
    return <div className="text-center"> Loading...</div>;
  }

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center bg-gray-800 ">
      <div className="border rounded-2xl max-w-md w-full shadow-2xl p-5 text-black bg-white">
        <h2 className="text-2xl font-bold mb-4">User Detail</h2>
        <div>
          <span className="font-semibold">Name :</span> {user.name}
        </div>
        <div><span className="font-semibold" >Username :</span> {user.username}</div>
        <div><span className="font-semibold">Email :</span> {user.email}</div>
        <div><span className="font-semibold">Phone :</span> {user.phone}</div>
        <div><span className="font-semibold">Website : </span>{user.website}</div>
        <div><span className="font-semibold">Company :</span> {user.company?.name}</div>
        <div>
          <span className="font-semibold">Address :</span> {user.address?.street} , {user.address?.suite},
          {user.address?.city},{user.address?.zipcode}{" "}
        </div>
      </div>
      <button
        className="bg-blue rounded text-white p-4 border-0 cursor-pointer hover:text-amber-200 hover:font-bold"
        onClick={() => navigate(-1)}
      >
        Back To Home Page
      </button>
    </div>
  );
};

export default UserDetail;
