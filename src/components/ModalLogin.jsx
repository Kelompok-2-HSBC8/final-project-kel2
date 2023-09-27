import PropTypes from "prop-types";
import { useState } from "react";

function ModalLogin(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Di sini Anda dapat mengirim data login ke server jika diperlukan.
        // Juga, jika Anda ingin melakukan navigasi ke route yang lain, Anda dapat menggunakan router di sini.
        // Contoh: history.push("/dashboard");
        props.closeModal();
    };

    return (
        <div id="signinModal" className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-transparent opacity-75"></div>
                </div>

                <div className="inline-block align-middle bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
                            onClick={props.closeModal}
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
                                    className="w-full px-3 py-2 border rounded-md mb-2"
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-3 py-2 border rounded-md mb-4"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white bg-sky-500 hover:bg-sky-600 rounded-md"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalLogin.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default ModalLogin;
