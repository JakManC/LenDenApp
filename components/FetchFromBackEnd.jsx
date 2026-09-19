import axios from "axios";
import { useEffect, useState } from "react";

export const FetchFromBackEnd = () => {
  const [users, setUsers] = useState([]);
  const API = " https://lendenbackend-9b7x.onrender.com/lenDen/getAll";

  const getAllUsersFromBackEnd = async () => {
    try {
      const response = await axios.get(API);
      console.log(response.data);

      setUsers(response.data);
    } catch (error) {
      console.log("Error Occurred...", error);
    }
  };

  useEffect(() => {
    getAllUsersFromBackEnd();
  }, []);
  return (
    <>
      {users.map((user) => (
        <li key={user.id}>
          Name : {user.name}, Count : {user.count}, Lena : {user.lena}, Dena:
          {user.dena}
        </li>
      ))}
    </>
  );
};
