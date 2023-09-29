// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import ModalLogin from "../components/ModalLogin";

function LoginPage() {
    const [modal, setModal] = useState(false);

    const modalBTN = (e) => {
        e.preventDefault();
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
            <main className="flex flex-col-reverse min-[1017px]:flex-row">
                <section className="w-full min-[1017px]:max-w-[50%] bg-[url('https://preview.redd.it/1ckh2h90ac371.png?width=640&crop=smart&auto=webp&s=704bfdc595df4aeacde8231572523a208a387197')] flex items-center justify-center -z-[99999999]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        className="w-[70px] h-[70px] min-[1017px]:w-[400px] min-[1017px]:h-[400px] z-[9999999]"
                        viewBox="0 0 256 256"
                        xmlSpace="preserve"
                    >
                        <defs></defs>
                        <g
                            style={{
                                stroke: "none",
                                strokeWidth: 0,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 10,
                                fill: "none",
                                fillRule: "nonzero",
                                opacity: 1,
                            }}
                            transform="translate(13.6466926070039 13.646692607003871) scale(2.53 2.53)"
                        >
                            <path
                                d="M 28.303 81.565 c 33.962 0 52.538 -28.138 52.538 -52.538 c 0 -0.799 0 -1.595 -0.054 -2.387 c 3.614 -2.614 6.733 -5.85 9.212 -9.558 c -3.37 1.493 -6.945 2.473 -10.606 2.905 c 3.855 -2.308 6.74 -5.937 8.118 -10.213 c -3.625 2.151 -7.59 3.667 -11.725 4.482 c -6.993 -7.436 -18.69 -7.795 -26.126 -0.802 c -4.796 4.51 -6.83 11.23 -5.342 17.643 C 29.473 30.352 15.64 23.34 6.264 11.804 c -4.901 8.437 -2.398 19.231 5.717 24.649 c -2.939 -0.087 -5.813 -0.88 -8.381 -2.311 c 0 0.076 0 0.155 0 0.234 c 0.002 8.79 6.198 16.36 14.814 18.101 c -2.718 0.741 -5.571 0.85 -8.338 0.317 c 2.419 7.522 9.351 12.675 17.251 12.823 c -6.539 5.139 -14.616 7.928 -22.932 7.92 C 2.926 73.534 1.459 73.445 0 73.27 c 8.444 5.419 18.27 8.293 28.303 8.28"
                                style={{
                                    stroke: "none",
                                    strokeWidth: 1,
                                    strokeDasharray: "none",
                                    strokeLinecap: "butt",
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 10,
                                    fill: "none",
                                    fillRule: "nonzero",
                                    opacity: 1,
                                }}
                                transform=" matrix(1 0 0 1 0 0) "
                                strokeLinecap="round"
                            />
                        </g>
                    </svg>
                </section>

                <section className="flex flew-col min-[1017px]:px-4 items-center justify-center text-black">
                    <div className="p-6 w-[590px]">
                        <div className="relative mb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="50px"
                                height="50px"
                            >
                                <linearGradient
                                    id="_osn9zIN2f6RhTsY8WhY4a"
                                    x1="10.341"
                                    x2="40.798"
                                    y1="8.312"
                                    y2="38.769"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#2aa4f4" />
                                    <stop offset="1" stopColor="#007ad9" />
                                </linearGradient>
                                <path
                                    fill="url(#_osn9zIN2f6RhTsY8WhY4a)"
                                    d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                                />
                            </svg>
                        </div>

                        <div className="max-w-[450px] min-[1017px]:max-w-[600px]">
                            <h1 className="text-[68px] min-[1017px]:text-[64px] font-[650]">
                                Happening now
                            </h1>
                        </div>

                        <h2 className="text-[32px] font-[550] mt-[30px]">
                            Join today.
                        </h2>

                        <div className="font-[400] mt-[30px]">
                            <button
                                type="email"
                                className="border border-black w-[300px] rounded-3xl py-2 flex items-center justify-center space-x-2"
                            >
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2500/svg"
                                    viewBox="0 0 48 48"
                                    className="w-[15px] mr-2"
                                >
                                    <g>
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                        ></path>
                                        <path
                                            fill="#4285F4"
                                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                        ></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 25.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                        ></path>
                                        <path
                                            fill="#34A853"
                                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                        ></path>
                                        <path
                                            fill="none"
                                            d="M0 0h48v48H0z"
                                        ></path>
                                    </g>
                                </svg>
                                Sign up with google
                            </button>
                        </div>

                        <div className="font-[400] mt-[13px]">
                            <button
                                type="email"
                                className="border border-[black] w-[300px] rounded-3xl py-2 flex items-center justify-center space-x-2"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="w-[20px] mr-2"
                                    style={{ color: " rgb(15, 25, 25)" }}
                                >
                                    <g>
                                        <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.256-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                                    </g>
                                </svg>
                                Sign up with apple
                            </button>
                            <div className="flex items-center my-[10px]">
                                <hr className="h-[0.5px] w-[130px]" />
                                <div className="mx-[10px]">or</div>
                                <hr className="h-[0.5px] w-[130px]" />
                            </div>
                            <button
                                type="email"
                                className="bg-sky-500 hover:bg-sky-600 w-[300px] text-white rounded-3xl py-2 flex items-center justify-center space-x-2"
                            >
                                Create account
                            </button>
                            <div className="font-[300] text-[grey] text-[12px] max-w-[300px] h-[80px] mt-[5px]">
                                By signing up, you agree to the
                                <a
                                    href="#"
                                    className="text-[#1D9bf0] hover:underline"
                                >
                                    Terms of Service
                                </a>
                                and
                                <a
                                    href="#"
                                    className="text-[#1D9bf0] hover:underline"
                                >
                                    Privacy Policy
                                </a>
                                , including
                                <a
                                    href="#"
                                    className="text-[#1D9bf0] hover:underline"
                                >
                                    Cookie Use.
                                </a>
                            </div>
                            <h4 className="mt-[0.5rem] font-[500]">
                                Already have an account?
                            </h4>
                            <button
                                onClick={modalBTN}
                                className="border border-blue-400 w-[300px] text-[#1D9bf0] rounded-3xl py-2 mt-5 flex items-center justify-center space-x-2 hover:bg-sky-500/[0.1]"
                            >
                                Sign in
                            </button>

                            {modal && <ModalLogin closeModal={closeModal} />}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="h-full mb-6 flex flex-wrap justify-center text-[grey] text-[13px] md:px-2">
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    About{" "}
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Help Center
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Terms of Service
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Privacy Policy
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Cookie Policy
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Accessibility
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Ads info
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Blog
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Status
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Careers
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Brand Resources
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Advertising
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Marketing
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    X for Business
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Developers
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Directory
                </a>
                <a href="" className="mx-[6px] mt-2 hover:underline">
                    {" "}
                    Settings
                </a>
                <p className="mx-[6px] mt-2">© 2023 twitter Corp.</p>
            </footer>
        </>
    );
}

export default LoginPage;
