import React from "react";
import { getImgUrl } from "../../utils/imageBuilder";
import { Link } from "react-router-dom";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import { useAuthContext } from "../../hooks/context/useAuthcontext";


const sidebarOption = [
  {
    name: "home",
    image: "home.svg",
  },
  {
    name: "history",
    image: "history.svg",
  },
];

const Sidebar = () => {
  const {user} = useAuthContext()
  return (
    <aside
      className="fixed left-0 z-20 w-56 h-screen transition-transform -translate-x-full  text-secondary sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {sidebarOption.map((item, i) => (
            <li key={i}>
              <Link
                to={`/${item.name}`}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={getImgUrl(`${item.image}`)}
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="ms-3">{item.name}</span>
              </Link>
            </li>
          ))}
          {user ? (
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img
                src={getImgUrl(`signIn.svg`)}
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="ms-3">
                <Logout />
              </span>
            </li>
          ) : (
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img
                src={getImgUrl(`sign-up.svg`)}
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="ms-3">
                <Login />
              </span>
            </li>
          )}
        </ul>
        <div
          id="dropdown-cta"
          className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
          role="alert"
        ></div>
      </div>
    </aside>
  );
};

export default Sidebar;
