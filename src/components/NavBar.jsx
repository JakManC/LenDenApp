import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-blue-400">
            LenDenHisab
          </h1>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          <li>
            <NavLink
              className="font-medium transition-colors duration-200 hover:text-blue-400"
              to={"/showDetail"}
            >
              Show Total
            </NavLink>
          </li>

          <li>
            <NavLink
              className="font-medium transition-colors duration-200 hover:text-blue-400"
              to={"/inputWindow"}
            >
              Input Window
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
