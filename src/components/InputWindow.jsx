import { useState } from "react";
import { NavLink } from "react-router";

export const InputWindow = () => {
  const [lena, setLena] = useState(0);
  const [dena, setDena] = useState(0);
  const [amount, setAmount] = useState("");
  const [entries, setEntries] = useState([]);

  const [reason, setReason] = useState("");

  const handleLenBtnPress = () => {
    console.log("Len Btn Pressed..");

    const newEntry = {
      id: Date.now(),
      type: "LENA",
      amount: Number(amount),
      reason: reason,
    };

    setLena((prevLena) => prevLena + Number(amount));
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    setAmount("");
    setReason("");
  };

  const handleDenBtnPress = () => {
    console.log("Den Btn Pressed");

    const newEntry = {
      id: Date.now(),
      type: "DENA",
      amount: Number(amount),
      reason: reason,
    };

    setDena((prevDena) => prevDena + Number(amount));
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    setAmount("");
    setReason("");
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
      {/* Heading */}
      <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
        LenDen Hisab
      </h1>

      {/* Input */}
      <div className="mb-5">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-lg outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <input
          type="text"
          value={reason}
          placeholder="Enter Reason"
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-lg outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          onChange={(e) => setReason(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="mb-6 flex justify-center gap-6">
        <button
          className=" rounded-full bg-red-500 text-2xl font-bold text-white shadow-md transition hover:bg-red-600 active:scale-95"
          onClick={handleDenBtnPress}
        >
          Dena
        </button>

        <button
          className=" rounded-full bg-green-500 text-2xl font-bold text-white shadow-md transition hover:bg-green-600 active:scale-95"
          onClick={handleLenBtnPress}
        >
          Lena
        </button>
      </div>

      {/* Result */}
      <div className="space-y-3 rounded-xl bg-slate-100 p-4">
        <h2 className="text-lg font-semibold text-red-600">
          Your Dena Is : ₹{dena}
        </h2>

        <h2 className="text-lg font-semibold text-green-600">
          Your Lena Is : ₹{lena}
        </h2>

        <button className="bg-green-700 text-white text-center p-2 m-2 rounded-full ">
          <NavLink to={"/showDetail"} state={{ entries }}>
            ShowFullDetails
          </NavLink>
        </button>
      </div>
    </div>
  );
};
