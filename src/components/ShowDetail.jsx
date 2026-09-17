import { useLocation } from "react-router";
export const ShowDetail = () => {
  const location = useLocation();
  const entries = location.state?.entries || [];
  return (
    <div className="mx-auto mt-10 w-full max-w-2xl px-4">
      {" "}
      <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
        {" "}
        Full Details{" "}
      </h1>{" "}
      {entries.length === 0 ? (
        <p className="text-center text-slate-500"> No entries found. </p>
      ) : (
        <div className="space-y-4">
          {" "}
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-md"
            >
              {" "}
              <div className="flex items-center justify-between">
                {" "}
                <h2
                  className={`text-xl font-bold ${entry.type === "LENA" ? "text-green-600" : "text-red-600"}`}
                >
                  {" "}
                  {entry.type}{" "}
                </h2>{" "}
                <p className="text-xl font-bold text-slate-800">
                  {" "}
                  ₹{entry.amount}{" "}
                </p>{" "}
              </div>
              <p className="mt-3 text-slate-600">
                {" "}
                Reason: {entry.reason}{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>
      )}{" "}
    </div>
  );
};
