import { Navigate, useNavigate } from 'react-router-dom';
import currencyStore from  '../../State/Money';
function Navbar() {

    const { setCurrency } = currencyStore();
    const navigate = useNavigate();
    return (
        <div className="border navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li ><a onClick={() => setCurrency('inr')}>INR</a></li>
                    <li ><a onClick={() => setCurrency('usd')}>USD</a></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <button className="text-xl btn btn-ghost" onClick={()=>navigate("/")}>Crpto Tracker</button>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar;