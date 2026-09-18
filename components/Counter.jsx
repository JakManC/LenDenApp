import useUserStore from "../store/userStore";
import { ResultCounter } from "./ResultCounter";

export const Counter = () => {
  const name = useUserStore((state) => state.name);

  const increBy1 = useUserStore((state) => state.increBy1);
  const decreBy1 = useUserStore((state) => state.decreBy1);
  const squareCount = useUserStore((state) => state.squareCount);
  const cubeCount = useUserStore((state) => state.cubeCount);
  return (
    <div className="mx-auto mt-10 w-full max-w-lg px-4">
      {/* Counter Header */}
      <div className="rounded-2xl bg-green-700 p-5 text-center shadow-xl">
        <h1 className="text-2xl font-bold text-white">
          This Is{" "}
          <span className="mx-1 inline-block rounded-xl bg-yellow-400 px-3 py-1 text-3xl font-extrabold text-blue-800 shadow-md">
            {name}'s
          </span>
          Counter
        </h1>
      </div>

      {/* Counter Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <button
          className="rounded-xl bg-green-600 px-5 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-green-700 hover:shadow-xl active:scale-95"
          onClick={() => increBy1()}
        >
          ➕1
        </button>

        <button
          className="rounded-xl bg-red-600 px-5 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-red-700 hover:shadow-xl active:scale-95"
          onClick={() => decreBy1()}
        >
          ➖1
        </button>

        <button
          className="rounded-xl bg-blue-600 px-5 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl active:scale-95"
          onClick={() => squareCount()}
        >
          ^2
        </button>

        <button
          className="rounded-xl bg-purple-600 px-5 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-purple-700 hover:shadow-xl active:scale-95"
          onClick={() => cubeCount()}
        >
          ^3
        </button>
      </div>

      {/* Result */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-center text-xl font-bold text-slate-700">
          Counter Result
        </h2>

        <div className="rounded-xl bg-slate-100 p-4 text-center">
          <ResultCounter />
        </div>
      </div>
    </div>
  );
};
