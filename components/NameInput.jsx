import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import useUserStore from "../store/userStore";

export const NameInput = () => {
  const { register, handleSubmit } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from;

  const setName = useUserStore((state) => state.setName);

  const onSubmit = (data) => {
    setName(data.name);
    console.log(data.name);

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
      </form>
    </>
  );
};
