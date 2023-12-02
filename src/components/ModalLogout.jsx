import PropTypes from "prop-types";
import auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";

function ModalLogout({ cancelLogout }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        auth.logout();
        await supabase.auth.signOut();
        navigate("/login");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className=" fixed inset-0 backdrop-blur-sm backdrop-brightness-50"></div>

            <div className="bg-white w-[300px] mx-auto rounded-2xl shadow-lg z-10">
                <div className="modal-content flex flex-col items-center justify-center p-6">
                    <div className="my-2">
                        <svg
                            width="40px"
                            height="40px"
                            viewBox="0 -2 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-60.000000, -7521.000000)"
                                    fill="#00acee"
                                >
                                    <g
                                        id="icons"
                                        transform="translate(56.000000, 160.000000)"
                                    >
                                        <path
                                            d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                            id="twitter-[#154]"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className="text-left items-center justify-center">
                        <p className="text-xl font-semibold mb-2">
                            Logout Confirmation?
                        </p>
                        <p className="text-slate-950 mb-4 text-sm ">
                            You can always log back in at any time. If you just
                            want to switch accounts, you can do that by adding
                            an existing account.
                        </p>
                        <div className="flex flex-col">
                            <button
                                id="logoutButton"
                                className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-3xl"
                                onClick={handleLogout}
                            >
                                Log out
                            </button>
                            <button
                                id="cancelButton"
                                className="border border-sky-500 hover:bg-sky-500 hover:text-white  py-2 px-4 mt-2 rounded-3xl"
                                onClick={cancelLogout}
                            >
                                cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalLogout.propTypes = {
    cancelLogout: PropTypes.func.isRequired,
};

export default ModalLogout;
