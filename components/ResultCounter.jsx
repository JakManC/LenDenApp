import useUserStore from "../store/userStore";

export const ResultCounter = () => {
  const count = useUserStore((state) => state.count);
  return (
    <h1 className="text-3xl font-extrabold ">The Count Value Is : {count}</h1>
  );
};
