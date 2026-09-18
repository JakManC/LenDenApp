import { NavLink } from "react-router";
import useUserStore from "../store/userStore";

export const NavBar = () => {
  const name = useUserStore((state) => state.name);
  return (
    <div className="mainDiv flex items-center justify-between bg-slate-900 px-8 py-4 text-white shadow-lg">
      {/* Logo */}
      <div className="logoDiv">
        <h1 className="text-2xl font-bold tracking-wide">Len-Den-Logo</h1>
      </div>

      {/* Navigation */}
      <div className="anotherDiv">
        <ul className="flex items-center gap-8">
          <NavLink
            className="cursor-pointer text-lg font-medium transition hover:text-cyan-400"
            to={name ? "/counter" : "/nameInput"}
            state={{ from: "counter" }}
          >
            Counter
          </NavLink>

          <NavLink
            className="cursor-pointer text-lg font-medium transition hover:text-cyan-400"
            to={name ? "/lenDenHisab" : "/nameInput"}
            state={{ from: "lenden" }}
          >
            LenDenHisab
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
