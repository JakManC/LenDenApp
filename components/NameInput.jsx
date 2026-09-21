import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import useUserStore from "../store/userStore";
import axios from "axios";

export const NameInput = () => {
  const { register, handleSubmit } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from;

  const setName = useUserStore((state) => state.setName);

  const onSubmit = async (data) => {
    const api = " https://lendenbackend-9b7x.onrender.com/lenDen/registerUser";

    setName(data.name);
    try {
      const response = await axios.post(api, data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    axios.post(api, data.name);
    console.log(data);

    if (from === "counter") {
      navigate("/counter", { state: { name: data.name } });
    }
    if (from === "lenden") {
      navigate("/lenDenHisab", { state: { name: data.name } });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          placeholder="Name : "
          className="border-2 border-black p-2 m-2 rounded-full"
          {...register("name", { required: true })}
        />

        <button
          className="bg-green-700 text-center text-white p-2 m-2 rounded-full"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};
