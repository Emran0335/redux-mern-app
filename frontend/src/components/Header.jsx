import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex justify-between items-center py-[20px] px-0 border-b mb-[32px]">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul className="flex items-center justify-between">
        <li className="ml-[20px]">
          <button className="py-[10px] px-[20px] bg-gray-800 text-white font-bold text-lg rounded-md cursor-pointer text-center flex items-center justify-center">
            <FaSignOutAlt /> Logout
          </button>
        </li>

        <li className="ml-[20px]">
          <Link to="/login" className="flex items-center gap-1">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li className="ml-[20px]">
          <Link to="/register" className="flex items-center gap-1">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
