import { useNavigate } from "react-router";
import useLenDenStore from "../store/lenDenStore";
import useUserStore from "../store/userStore";

export const Details = () => {
  const name = useUserStore((state) => state.name);
  const setName = useUserStore((state) => state.setName);
  const navigate = useNavigate();
  const count = useUserStore((state) => state.count);
  const resetCount = useUserStore((state) => state.resetUser);

  const resetLenDen = useLenDenStore((state) => state.resetLenDen);

  const lena = useLenDenStore((state) => state.lena);
  const dena = useLenDenStore((state) => state.dena);

  const handleExit = () => {
    resetCount();
    resetLenDen();
    navigate("/");
  };
  const handleNotExit = () => {
    navigate("/");
  };
  return (
    <div className="mx-auto mt-10 w-full max-w-lg px-4">
      <div className="rounded-2xl bg-white p-6 shadow-xl">
        {/* Name */}
        <div className="mb-6 rounded-xl bg-slate-900 p-4 text-center">
          <h1 className="text-2xl font-bold text-white">
            Name :<span className="ml-2 text-yellow-400">{name}</span>
          </h1>
        </div>

        {/* Counter Value */}
        <div className="mb-4 rounded-xl border-2 border-blue-200 bg-blue-50 p-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
            Counter Value
          </p>

          <h2 className="mt-1 text-3xl font-bold text-blue-700">{count}</h2>
        </div>

        {/* Len Den Heading */}
        <h2 className="mb-4 text-center text-xl font-bold text-slate-700">
          The Len-Den Values Are As Follows
        </h2>

        {/* Lena / Dena */}
        <div className="grid grid-cols-3 gap-4">
          {/* Lena */}
          <div className="rounded-xl border-2 border-green-200 bg-green-50 p-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Lena
            </p>

            <h1 className="mt-1 text-3xl font-extrabold text-green-700">
              ₹{lena}
            </h1>
          </div>

          {/* Dena */}
          <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Dena
            </p>

            <h1 className="mt-1 text-3xl font-extrabold text-red-700">
              ₹{dena}
            </h1>
          </div>

          <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5 text-center">
            <h1>Do You Want To Exit {name}</h1>
            <button
              className="bg-red-700 text-white text-center p-2 m-2 rounded-full"
              onClick={handleExit}
            >
              YES
            </button>

            <button
              className="bg-green-700 text-white text-center p-2 m-2 rounded-full"
              onClick={handleNotExit}
            >
              No
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};
