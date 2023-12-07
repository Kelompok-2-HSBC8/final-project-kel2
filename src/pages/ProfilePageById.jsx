// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

function ProfilePageById() {
    const navigate = useNavigate();
    const data = JSON.parse(
        localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token") ||
            JSON.parse(
                localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token")
            )
    );

    return (
        <div className="w-full flex flex-col border overflow-x-hidden min-h-screen">
            <div className="p-[4px] flex flex-row border-y  w-full 2xl:max-w-[41.3rem] xl:max-w-[34.7rem] bg-white/90 border-slate-300 fixed top-0 z-10 ">
                <button
                    className="flex justify-center items-center mx-4 hover:bg-gray-100 cursor-pointer rounded-full p-1"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <svg
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12H18M6 12L11 7M6 12L11 17"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <div className="flex flex-col justify-center items-start mx-3">
                    <h1 className="font-bold">
                        {data?.user.user_metadata.name || "-"}
                    </h1>
                    <h3 className="text-sm font-[200] opacity-50">
                        0 Postingan
                    </h3>
                </div>
            </div>

            <img
                className="max-h-[15rem] mt-[52px] bg-cover cursor-pointer filter hover:blur-[2px] -z-[999999] min-w-full"
                src={data?.user?.user_metadata?.avatar_url || "-"}
                alt="bg"
            />
            <div className="flex flex-row justify-between">
                <img
                    className="relative bottom-20 mx-5 min-w-[5rem] min-h-[8rem] bg-cover rounded-full border-4 border-white cursor-pointer hover:blur-[2px] filter max-h-[5rem]"
                    src={data?.user?.user_metadata?.avatar_url || "-"}
                    alt="profile"
                />
                <div className="my-3 mx-2">
                    <button className="p-2 border rounded-full text-sm pl-6 pr-6 font-bold border-gray-300 hover:bg-gray-100">
                        Edit Profile
                    </button>
                </div>
            </div>

            <div className="flex flex-col p-3 relative bottom-20">
                <h2 className="font-bold text-2xl">
                    {data?.user.user_metadata.name || "-"}
                </h2>
                <h5 className="text-gray-500 font-[100]">
                    @
                    {data?.user.user_metadata.user_name ||
                        data?.user.user_metadata.name
                            .toLowerCase()
                            .split(" ")
                            .join("")}
                </h5>
            </div>
            <div className="flex flex-row p-3 relative bottom-[5.8rem]">
                <div className="flex justify-center items-center">
                    <svg
                        width="1.5rem"
                        height="1.5rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                            stroke="rgb(107, 114, 128)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="font-[300] flex items-center justify-center text-gray-500 mx-3">
                    Bergabung {moment(data?.created_at).format("MMMM YYYY")}
                </div>
            </div>
            <div className="flex flex-row p-3 relative bottom-[6.4rem]">
                <div className="flex flex-row justify-center items-center mr-4">
                    <span className="ml-1 font-bold">{0}</span>
                    <span className="font-[300] mx-2 text-gray-500">
                        Mengikuti
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center mr-4">
                    <span className="ml-1 font-bold">{0}</span>
                    <span className="font-[300] mx-2 text-gray-500">
                        Pengikut
                    </span>
                </div>
            </div>
            <div className="flex flex-row relative bottom-24 border border-t-0 boder-r-0 border-l-0">
                <div className="p-4 border-[5px] border-l-0 border-t-0 border-r-0 border-[#00acee] cursor-pointer hover:bg-gray-100">
                    Postingan
                </div>
                <div className="p-4 cursor-pointer hover:bg-gray-100 text-gray-400">
                    Balasan
                </div>
                <div className="p-4 cursor-pointer hover:bg-gray-100 text-gray-400">
                    Sorotan
                </div>
                <div className="p-4 cursor-pointer hover:bg-gray-100 text-gray-400">
                    Media
                </div>
            </div>
            {/* <div className="flex flex-col relative w-full bottom-24 p-0 m-0">
                <div className="flex flex-row p-4 w-full border border-l-0 border-r-0 hover:bg-gray-100 cursor-pointer">
                    <div className="flex justify-center items-start">
                        <img
                            className="relative min-w-[3rem] bg-cover rounded-full cursor-pointer hover:blur-[2px] filter max-h-[3rem]"
                            src={item.avatar}
                            alt="profile"
                        />
                    </div>
                    <div className="flex flex-col mx-3">
                        <div className="flex flex-row justify-center items-center">
                            <h2 className="font-bold">{item.displayName}</h2>
                            <span className="text-sm ml-1 text-gray-500">
                                {item.userName}
                            </span>
                            <span className="text-sm ml-1 text-gray-500">
                                · 30 August
                            </span>
                        </div>
                        <div className="mb-2">P Mabar</div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-row">
                                <svg
                                    fill="#000000"
                                    viewBox="0 0 32 32"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="2.3em"
                                    height="2.3rem"
                                    className="p-2 rounded-full hover:bg-[#00ceee29] hover:first:fill-[#00acee] transition ease-in-out duration-300"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title>comment</title>
                                        <path d="M16.5 2.353c-7.857 0-14.25 5.438-14.25 12.124 0.044 2.834 1.15 5.402 2.938 7.33l-0.006-0.007c-0.597 2.605-1.907 4.844-3.712 6.569l-0.005 0.005c-0.132 0.135-0.214 0.32-0.214 0.525 0 0.414 0.336 0.75 0.75 0.751h0c0.054-0 0.107-0.006 0.158-0.017l-0.005 0.001c3.47-0.559 6.546-1.94 9.119-3.936l-0.045 0.034c1.569 0.552 3.378 0.871 5.262 0.871 0.004 0 0.009 0 0.013 0h-0.001c7.857 0 14.25-5.439 14.25-12.125s-6.393-12.124-14.25-12.124zM16.5 25.102c-0.016 0-0.035 0-0.054 0-1.832 0-3.586-0.332-5.205-0.94l0.102 0.034c-0.058-0.018-0.126-0.029-0.195-0.030h-0.001c-0.020-0.002-0.036-0.009-0.056-0.009 0 0-0 0-0 0-0.185 0-0.354 0.068-0.485 0.18l0.001-0.001c-0.010 0.008-0.024 0.004-0.034 0.013-1.797 1.519-3.97 2.653-6.357 3.243l-0.108 0.023c1.29-1.633 2.215-3.613 2.619-5.777l0.013-0.083c0-0.006 0-0.014 0-0.021 0-0.021-0.001-0.043-0.003-0.064l0 0.003c0-0.005 0-0.010 0-0.015 0-0.019-0.001-0.037-0.002-0.055l0 0.002c-0.004-0.181-0.073-0.345-0.184-0.47l0.001 0.001-0.011-0.027c-1.704-1.697-2.767-4.038-2.791-6.626l-0-0.005c0-5.858 5.72-10.624 12.75-10.624s12.75 4.766 12.75 10.624c0 5.859-5.719 10.625-12.75 10.625z"></path>
                                    </g>
                                </svg>
                                <div className="text-sm flex justify-center items-center text-gray-500 mx-1">
                                    3
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <svg
                                    fill="#000000"
                                    width="2.5rem"
                                    height="2.5rem"
                                    viewBox="0 -0.08 20 20"
                                    data-name="Capa 1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="p-2 rounded-full hover:bg-[#00ee7b29] hover:fill-[#00ee83] transition ease-in-out duration-300"
                                >
                                    <path d="M11.59,11.46a.39.39,0,0,0-.41-.08.38.38,0,0,0-.23.35v1.72H8.88a4.83,4.83,0,0,1-2.81-.55A3.61,3.61,0,0,1,4.52,10a3.88,3.88,0,0,1,1-2.5A.38.38,0,0,0,4.94,7a4.56,4.56,0,0,0-1.17,3,4.34,4.34,0,0,0,1.84,3.5,4.82,4.82,0,0,0,3,.71H11v1.72a.41.41,0,0,0,.22.34.45.45,0,0,0,.16,0,.36.36,0,0,0,.24-.09c1.33-1.14,2.19-2,2.2-2a.38.38,0,0,0,.11-.26.39.39,0,0,0-.11-.27Zm.13,3.63,0-2.45L13,13.93C12.73,14.18,12.29,14.59,11.72,15.09Z" />
                                    <path d="M14.39,6.41a5.27,5.27,0,0,0-3.28-.71H9.3V3.93a.38.38,0,0,0-.64-.27L6.46,5.87a.36.36,0,0,0-.11.26.39.39,0,0,0,.11.27s.88.86,2.2,2a.38.38,0,0,0,.25.09.28.28,0,0,0,.15,0,.38.38,0,0,0,.22-.34V6.45h1.83A4.67,4.67,0,0,1,13.93,7a3.66,3.66,0,0,1,1.55,2.93,3.85,3.85,0,0,1-1,2.5.38.38,0,0,0,0,.53.35.35,0,0,0,.26.1.4.4,0,0,0,.27-.11,4.63,4.63,0,0,0,1.17-3A4.39,4.39,0,0,0,14.39,6.41Zm-5.86.88c-.57-.5-1-.91-1.27-1.16L8.55,4.84Z" />
                                </svg>
                                <div className="text-sm justify-center items-center flex text-gray-500 mx-1">
                                    4
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <svg
                                    fill="#000000"
                                    width="2.5rem"
                                    height="2.5rem"
                                    viewBox="0 0 32.00 32.00"
                                    style={{
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        strokeLinejoin: "round",
                                        strokeMiterlimit: 2,
                                    }}
                                    version="1.1"
                                    xmlSpace="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlBase="http://www.serif.com/"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    stroke="#000000"
                                    strokeWidth="0.00032"
                                    className="p-2 rounded-full hover:bg-[#ee000029] hover:last-of-type:fill-[#ee0000] transition ease-in-out duration-300"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Icon">
                                            <path d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"></path>
                                        </g>
                                    </g>
                                </svg>
                                <div className="text-sm justify-center items-center flex text-gray-500">
                                    5
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <svg
                                    fill="#000000"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="2.3rem"
                                    height="2.5rem"
                                    className="p-2 rounded-full hover:bg-[#00ceee29] hover:first:fill-[#00acee] transition ease-in-out duration-300"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title></title>
                                        <g data-name="Layer 2" id="Layer_2">
                                            <path d="M29.28,12.47,18.6,3.62a2,2,0,0,0-2.17-.27,2,2,0,0,0-1.15,1.81v2A19.82,19.82,0,0,0,2,25.94a19.18,19.18,0,0,0,.25,3.11,1,1,0,0,0,.82.83h.17a1,1,0,0,0,.88-.53,17.29,17.29,0,0,1,11.16-8.68v2.16a2,2,0,0,0,1.15,1.81,2.09,2.09,0,0,0,.88.2,2,2,0,0,0,1.29-.48l4.86-4,.09-.07,5.73-4.75a2,2,0,0,0,0-3.06Zm-6.93,6.2-.09.07-5,4.1V19.42a.19.19,0,0,0,0-.08s0-.06,0-.09,0-.07-.05-.11a1.34,1.34,0,0,0-.07-.18A.57.57,0,0,0,17,18.8a.49.49,0,0,0-.12-.13,1,1,0,0,0-.17-.12l-.15-.07-.22,0-.1,0-.08,0h-.09A19.19,19.19,0,0,0,4,25.85a17.81,17.81,0,0,1,12.56-17l.05,0a1.11,1.11,0,0,0,.19-.09A1.43,1.43,0,0,0,17,8.63l.12-.14a.54.54,0,0,0,.1-.16.85.85,0,0,0,.06-.17,1.3,1.3,0,0,0,0-.21.43.43,0,0,0,0,0l0-2.74L28,14Z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col p-4 relative bottom-20">
                <h4 className="font-bold text-xl mb-5">Who to Follow</h4>
                <div className="w-full hover:bg-gray-100 cursor-pointer p-1 h-auto min-h-[8rem]">
                    <div className="flex flex-row p-1 ml-8">
                        <div className="">
                            <svg
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="style=fill">
                                    <g id="profile">
                                        <path
                                            id="vector (Stroke)"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z"
                                            fill="rgb(107, 114, 128)"
                                        />
                                        <path
                                            id="rec (Stroke)"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z"
                                            fill="rgb(107, 114, 128)"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="font-bold flex justify-center items-center mx-2">
                            <span className="text-gray-500 text-sm">
                                Elon Musk mengikuti
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="max-w-[4rem] flex justify-start items-start">
                            <img
                                src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/25f6ffcefbac1f1d53d01f97f7a264da.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col relative top-3">
                            <div className="flex flex-row">
                                <span className="font-bold">Harisenin.com</span>
                                <div className="">
                                    <svg
                                        width="1.5rem"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.55879 3.6972C10.7552 2.02216 13.2447 2.02216 14.4412 3.6972L14.6317 3.96387C14.8422 4.25867 15.1958 4.41652 15.5558 4.37652L16.4048 4.28218C18.3156 4.06988 19.9301 5.68439 19.7178 7.59513L19.6235 8.44415C19.5835 8.8042 19.7413 9.15774 20.0361 9.36831L20.3028 9.55879C21.9778 10.7552 21.9778 13.2447 20.3028 14.4412L20.0361 14.6317C19.7413 14.8422 19.5835 15.1958 19.6235 15.5558L19.7178 16.4048C19.9301 18.3156 18.3156 19.9301 16.4048 19.7178L15.5558 19.6235C15.1958 19.5835 14.8422 19.7413 14.6317 20.0361L14.4412 20.3028C13.2447 21.9778 10.7553 21.9778 9.55879 20.3028L9.36831 20.0361C9.15774 19.7413 8.8042 19.5835 8.44414 19.6235L7.59513 19.7178C5.68439 19.9301 4.06988 18.3156 4.28218 16.4048L4.37652 15.5558C4.41652 15.1958 4.25867 14.8422 3.96387 14.6317L3.6972 14.4412C2.02216 13.2447 2.02216 10.7553 3.6972 9.55879L3.96387 9.36831C4.25867 9.15774 4.41652 8.8042 4.37652 8.44414L4.28218 7.59513C4.06988 5.68439 5.68439 4.06988 7.59513 4.28218L8.44415 4.37652C8.8042 4.41652 9.15774 4.25867 9.36831 3.96387L9.55879 3.6972ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.8882 14.526C11.3977 15.0166 10.6023 15.0166 10.1118 14.526L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z"
                                            fill="#00acee"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">
                                    @harisenin
                                </span>
                                <span className="text-sm">
                                    Raih Karir Impiamu Bersama Kami
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-4 relative bottom-24 w-full hover:bg-gray-100 cursor-pointer">
                <span className="text-[#00acee]">Show More</span>
            </div>
        </div>
    );
}

export default ProfilePageById;
