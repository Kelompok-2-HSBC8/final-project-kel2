import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/api";
import auth from "../utils/auth";

function ModalLogin({ closeModal }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await getUser();
            const users = response.data;

            const user = users.find((user) => user.userName === username);

            if (user && user.password === password) {
                auth.storeAuthCredential(user.token);
                navigate("/");
            } else {
                alert("Login gagal. Username atau password salah.");
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat melakukan login.");
        }
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-start mt-20 justify-center">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-transparent opacity-75"></div>
            </div>

            <div className="inline-block align-middle bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 py-5 sm:p-6 ">
                    <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
                        onClick={closeModal}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <form onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Sign In
                            </h3>
                        </div>
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full px-3 py-2 border rounded-lg mb-2"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-3 py-2 border rounded-lg mb-4"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-sky-500 hover:bg-sky-600 rounded-2xl"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

ModalLogin.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default ModalLogin;
