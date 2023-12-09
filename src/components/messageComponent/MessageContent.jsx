import React from "react";
import PropTypes from "prop-types";

function MessageContent() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full flex justify-between items-center lg:justify-end p-5 opacity-90 rounded-sm bg-gray-50">
                <ul className="lg:invisible lg:absolute pl-1 flex flex-wrap">
                    <li>
                        <a
                            className="justify-center items-center flex lg:hidden rounded-full p-1 hover:bg-slate-300"
                            href=""
                        >
                            <svg
                                width="26px"
                                height="24px"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#000000"
                                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                />
                                <path
                                    fill="#000000"
                                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="lg:hidden pl-2 flex-wrap flex gap-2">
                        <a
                            className="justify-center items-center rounded-full p-1 hover:bg-gray-200 flex"
                            href="#"
                        >
                            {/* <img
                                className="w-7 rounded-full bg-sky-500"
                                src="icon/tw-cus.svg"
                                alt="foto profile"
                            /> */}
                        </a>
                        <p className="items-center flex font-bold">
                            HSBC8 Kelompok1
                        </p>
                    </li>
                </ul>
                <button className="rounded-full p-1 hover:bg-slate-300">
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 16.75C11.8019 16.7474 11.6126 16.6676 11.4725 16.5275C11.3324 16.3874 11.2526 16.1981 11.25 16V11C11.25 10.8011 11.329 10.6103 11.4697 10.4697C11.6103 10.329 11.8011 10.25 12 10.25C12.1989 10.25 12.3897 10.329 12.5303 10.4697C12.671 10.6103 12.75 10.8011 12.75 11V16C12.7474 16.1981 12.6676 16.3874 12.5275 16.5275C12.3874 16.6676 12.1981 16.7474 12 16.75Z"
                            fill="#000000"
                        />
                        <path
                            d="M12 9.25C11.8019 9.24741 11.6126 9.16756 11.4725 9.02747C11.3324 8.88737 11.2526 8.69811 11.25 8.5V8C11.25 7.80109 11.329 7.61032 11.4697 7.46967C11.6103 7.32902 11.8011 7.25 12 7.25C12.1989 7.25 12.3897 7.32902 12.5303 7.46967C12.671 7.61032 12.75 7.80109 12.75 8V8.5C12.7474 8.69811 12.6676 8.88737 12.5275 9.02747C12.3874 9.16756 12.1981 9.24741 12 9.25Z"
                            fill="#000000"
                        />
                        <path
                            d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z"
                            fill="#000000"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-grow box-border w-full px-2 flex-col text-sm justify-end">
                {/* chat kanan */}
                <div className="flex justify-end items-center">
                    <p className="p-5 w-5/6 bg-gray-50 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio aperiam saepe dolores quisquam necessitatibus
                        sunt vero quos deserunt obcaecati tenetur! Corrupti,
                        distinctio. Eveniet voluptates, quod a nostrum
                        repellendus soluta porro.
                    </p>
                </div>
                <div className="flex justify-end">
                    <p className="pr-5 text-sm w-2/3 justify-end text-end text-zinc-500">
                        12.50 PM
                    </p>
                </div>
                {/* chat kiri */}
                <div className="flex justify-start">
                    <p className="p-5 w-5/6 bg-gray-100 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio aperiam saepe dolores quisquam necessitatibus
                        sunt vero quos deserunt obcaecati tenetur! Corrupti,
                        distinctio. Eveniet voluptates, quod a nostrum
                        repellendus soluta porro.
                    </p>
                </div>
                <div className="flex justify-start">
                    <p className="pl-5 text-sm w-2/3 justify-end text-start text-zinc-500">
                        12.50 PM
                    </p>
                </div>
                {/* papan ketik & tombol kirim */}
                <div className="w-auto flex pb-5">
                    <div className="w-full flex justify-start p-3 rounded-sm bg-gray-50 gap-2">
                        <div className="items-center align-middle flex gap-2">
                            <button className="rounded-full p-1 hover:bg-slate-300">
                                <svg
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                                        stroke="#00acee"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M18.9976 14.2904L18.6544 13.9471L18.6385 13.9313C18.238 13.5307 17.9149 13.2077 17.6314 12.9687C17.3394 12.7226 17.055 12.5353 16.7221 12.4349C16.2512 12.2928 15.7488 12.2928 15.2779 12.4349C14.945 12.5353 14.6606 12.7226 14.3686 12.9687C14.0851 13.2077 13.762 13.5307 13.3615 13.9313L13.3456 13.9471C13.0459 14.2469 12.8458 14.4462 12.6832 14.5807C12.5218 14.7142 12.452 14.7359 12.4237 14.7408C12.3029 14.762 12.1785 14.7381 12.0742 14.6735C12.0498 14.6584 11.993 14.6123 11.8928 14.4285C11.7917 14.2432 11.68 13.9838 11.513 13.5942L11.4596 13.4696L11.4475 13.4414L11.4475 13.4414C11.0829 12.5907 10.7931 11.9144 10.5107 11.4126C10.2237 10.9026 9.90522 10.4984 9.44575 10.268C9.03426 10.0618 8.57382 9.97308 8.11515 10.0118C7.603 10.055 7.15716 10.3121 6.70134 10.6789C6.25273 11.04 5.73245 11.5603 5.07799 12.2148L5.07798 12.2148L5.05634 12.2364L5 12.2928V12.9999C5 13.2462 5.00007 13.4816 5.00044 13.7065L5.76344 12.9435C6.44443 12.2626 6.92686 11.7811 7.32835 11.458C7.72756 11.1366 7.98255 11.0265 8.19924 11.0082C8.47444 10.985 8.75071 11.0382 8.9976 11.162C9.192 11.2594 9.38786 11.4564 9.63918 11.903C9.89194 12.3521 10.1611 12.9783 10.5404 13.8635L10.5938 13.9881L10.6034 14.0105L10.6034 14.0105C10.7583 14.3719 10.8884 14.6754 11.0149 14.9073C11.1448 15.1455 11.3038 15.3727 11.5479 15.5238C11.8608 15.7175 12.2341 15.7894 12.5966 15.7258C12.8794 15.6761 13.1114 15.5242 13.3204 15.3513C13.524 15.183 13.7575 14.9495 14.0355 14.6714L14.0527 14.6542C14.4728 14.2341 14.766 13.9416 15.013 13.7334C15.2553 13.5292 15.4185 13.437 15.5667 13.3922C15.8493 13.307 16.1507 13.307 16.4333 13.3922C16.5815 13.437 16.7447 13.5292 16.987 13.7334C17.234 13.9416 17.5272 14.2341 17.9473 14.6542L18.9755 15.6825C18.9887 15.2721 18.9948 14.812 18.9976 14.2904Z"
                                        fill="#00acee"
                                    />
                                    <circle
                                        cx="16.5"
                                        cy="7.5"
                                        r="1.5"
                                        fill="#00acee"
                                    />
                                </svg>
                            </button>
                            <button className="rounded-full p-1 hover:bg-slate-300">
                                <svg
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="9.5"
                                        stroke="#00acee"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M8.20857 15.378C8.63044 15.7433 9.20751 16.0237 9.86133 16.2124C10.5191 16.4023 11.256 16.5 12 16.5C12.744 16.5 13.4809 16.4023 14.1387 16.2124C14.7925 16.0237 15.3696 15.7433 15.7914 15.378"
                                        stroke="#00acee"
                                        stroke-linecap="round"
                                    />
                                    <circle
                                        cx="9"
                                        cy="10"
                                        r="1"
                                        fill="#222222"
                                        stroke="#00acee"
                                        stroke-linecap="round"
                                    />
                                    <circle
                                        cx="15"
                                        cy="10"
                                        r="1"
                                        fill="#222222"
                                        stroke="#00acee"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <input
                            className="bg-gray-50 w-full outline-none flex"
                            type="text"
                            placeholder="Mulai Pesan Baru ..."
                        />
                        <button className="rounded-full p-1 hover:bg-slate-300">
                            <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                                    stroke="#00acee"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageContent;
