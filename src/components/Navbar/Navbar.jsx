import { Navigate, useNavigate } from 'react-router-dom';
import currencyStore from  '../../State/Money';
function Navbar() {

    const { setCurrency } = currencyStore();
    const navigate = useNavigate();
return (
  <div className="px-2 border navbar bg-base-100 sm:px-4">
    {/* Left side - Dropdown for currency */}
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-40 p-2 shadow bg-base-100 rounded-box z-[1]"
        >
          <li><a onClick={() => setCurrency('inr')}>INR</a></li>
          <li><a onClick={() => setCurrency('usd')}>USD</a></li>
        </ul>
      </div>
    </div>

    {/* Center - Brand name */}
    <div className="navbar-center">
      <button
        className="text-lg font-semibold btn btn-ghost sm:text-xl"
        onClick={() => navigate("/")}
      >
        Crypto Tracker
      </button>
    </div>

    {/* Right side - Search icon */}
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:h-5 sm:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  </div>
);
}

export default Navbar;