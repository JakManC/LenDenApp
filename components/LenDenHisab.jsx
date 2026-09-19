import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useUserStore from "../store/userStore";
import useLenDenStore from "../store/lenDenStore";

export const LenDenHisab = () => {
  const name = useUserStore((state) => state.name);

  const navigate = useNavigate();

  const lena = useLenDenStore((state) => state.lena);
  const dena = useLenDenStore((state) => state.dena);
  const entries = useLenDenStore((state) => state.entries);
  const addLena = useLenDenStore((state) => state.addLena);

  const addDena = useLenDenStore((state) => state.addDena);

  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const handleLena = () => {
    if (!amount || Number(amount) <= 0) {
      return;
    }

    if (!reason.trim()) {
      return;
    }

    addLena(amount, reason);

    setAmount("");
    setReason("");
  };

  const handleDena = () => {
    if (!amount || Number(amount) <= 0) {
      return;
    }

    if (!reason.trim()) {
      return;
    }

    addDena(amount, reason);

    setAmount("");
    setReason("");
  };

  const lenaEntries = entries.filter((entry) => entry.type === "lena");

  const denaEntries = entries.filter((entry) => entry.type === "dena");

  return (
    <>
      <div className="mx-auto mt-8 w-full max-w-4xl px-4">
        {/* Welcome */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome, {name} 👋
          </h1>

          <p className="mt-2 text-slate-500">Manage your Len-Den Hisab</p>
        </div>

        {/* Main Card */}
        <div className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-2xl bg-white p-6 shadow-xl">
          {/* Amount */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="inputAmount"
              className="font-semibold text-slate-700"
            >
              Amount
            </label>

            <input
              id="inputAmount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Reason */}
          <div className="flex flex-col gap-2">
            <label htmlFor="reason" className="font-semibold text-slate-700">
              Reason
            </label>

            <input
              id="reason"
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason"
              className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleLena}
              className="flex-1 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-green-700 active:scale-95"
            >
              Lena
            </button>

            <button
              type="button"
              onClick={handleDena}
              className="flex-1 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 active:scale-95"
            >
              Dena
            </button>
          </div>

          {/* Totals */}
          <div className="mt-2 grid grid-cols-2 gap-4">
            {/* Lena Total */}
            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 text-center">
              <p className="text-sm font-medium text-green-700">Lena Total</p>

              <p className="mt-1 text-2xl font-bold text-green-700">₹{lena}</p>
            </div>

            {/* Dena Total */}
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 text-center">
              <p className="text-sm font-medium text-red-700">Dena Total</p>

              <p className="mt-1 text-2xl font-bold text-red-700">₹{dena}</p>
            </div>
          </div>
        </div>

        {/* Entries */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {/* Lena Entries - 50% */}
          <div className="rounded-2xl bg-green-50 p-4 shadow-lg">
            <h2 className="mb-4 text-center text-xl font-bold text-green-700">
              Lena
            </h2>

            <div className="flex flex-col gap-3">
              {lenaEntries.length === 0 ? (
                <p className="text-center text-sm text-slate-500">No entries</p>
              ) : (
                lenaEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-xl border border-green-200 bg-white p-3"
                  >
                    <p className="font-semibold text-slate-700">
                      {entry.reason}
                    </p>

                    <p className="mt-1 font-bold text-green-600">
                      + ₹{entry.amount}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Dena Entries - 50% */}
          <div className="rounded-2xl bg-red-50 p-4 shadow-lg">
            <h2 className="mb-4 text-center text-xl font-bold text-red-700">
              Dena
            </h2>

            <div className="flex flex-col gap-3">
              {denaEntries.length === 0 ? (
                <p className="text-center text-sm text-slate-500">No entries</p>
              ) : (
                denaEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-xl border border-red-200 bg-white p-3"
                  >
                    <p className="font-semibold text-slate-700">
                      {entry.reason}
                    </p>

                    <p className="mt-1 font-bold text-red-600">
                      - ₹{entry.amount}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-yellow-50 p-4 shadow-lg">
            <div className="flex flex-col gap-3">
              <button
                className="bg-green-700 text-white text-center p-2 m-2 rounded-full"
                onClick={() => navigate("/details")}
              >
                {name}'s Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
