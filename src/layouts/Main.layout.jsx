// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import MobileView from "../components/MobileView";
import ModalPost from "../components/ModalPost";
import ModalLogout from "../components/ModalLogout";
import MessageContent from "../components/messageComponent/MessageContent";

function MainLayout({ children }) {
    const [openPostModal, setOpenPostModal] = useState(false);
    const [active, setActive] = useState();
    const path = window.location.pathname;
    const [openLogoutModal, setOpenLogoutModal] = useState(false);

    const openPost = () => {
        setOpenPostModal(true);
        setOpenLogoutModal(false);
    };

    const openLogout = () => {
        setOpenLogoutModal(true);
        setOpenPostModal(false);
    };

    const cancelLogout = () => {
        setOpenLogoutModal(false);
    };

    const cancelPost = () => {
        setOpenPostModal(false);
    };

    useEffect(() => {
        if (path === "/") {
            setActive("Beranda");
        } else if (path === "/trend") {
            setActive("Trend");
        } else if (path === "/notifikasi") {
            setActive("Notifikasi");
        } else if (path === "/chat") {
            setActive("Chat");
        } else if (path === "/profile") {
            setActive("Profile");
        }
    }, [path]);

    const data = JSON.parse(
        localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token") ||
            JSON.parse(
                localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token")
            )
    );
    return (
        <div className="grid grid-cols-12 w-auto box-border">
            <aside className="invisible absolute md:static md:visible md:col-span-2 xl:col-span-3 box-border">
                <div className="flex justify-end">
                    <div className="box-border flex flex-col h-screen w-24 xl:w-72 py-6 items-end pr-3">
                        <div className="flex-grow">
                            <div>
                                <ul>
                                    <li>
                                        <a
                                            className="xl:px-4 relative h-16 w-16 items-center justify-center xl:justify-start rounded-full gap-4 bg-white hover:bg-gray-200 flex flex-wrap"
                                            href="#"
                                        >
                                            <svg
                                                width="30px"
                                                height="30px"
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
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-col">
                                <ul className="text-xl">
                                    <li className="mb-1">
                                        <NavLink
                                            className={`relative h-16 w-16 xl:w-64 items-center justify-center xl:justify-start rounded-full ${
                                                active === "Beranda"
                                                    ? "bg-gray-200"
                                                    : "bg-white"
                                            } hover:bg-gray-200 flex flex-wrap`}
                                            to={"/"}
                                            onClick={() => setActive("Beranda")}
                                        >
                                            <div className="px-5">
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g id="Group">
                                                        <path
                                                            id="Vector"
                                                            d="M27.075 7.4625L14.4462 0.64375C14.1675 0.49375 13.8337 0.49375 13.555 0.64375L0.928742 7.4625C0.473742 7.70875 0.303742 8.2775 0.549992 8.73375C0.718742 9.04625 1.04249 9.225 1.37499 9.225C1.52499 9.225 1.67874 9.1875 1.81999 9.1125L2.83874 8.5625L4.87499 22.9538C5.14249 24.4725 6.50999 25.5312 8.19749 25.5312H19.8C21.49 25.5312 22.8562 24.4713 23.1287 22.9225L25.1612 8.56L26.1837 9.1125C26.6387 9.35375 27.2087 9.1875 27.455 8.7325C27.7 8.27875 27.53 7.71 27.075 7.4625ZM21.2775 22.6287C21.1437 23.3862 20.3987 23.6562 19.8025 23.6562H8.19999C7.59999 23.6562 6.85624 23.3862 6.72749 22.6587L4.59999 7.6125L14 2.535L23.4025 7.61L21.2775 22.6287Z"
                                                            fill="#0F1419"
                                                        />
                                                        <path
                                                            id="Vector_2"
                                                            d="M9.27502 13.23C9.27502 15.835 11.3938 17.955 14 17.955C16.6063 17.955 18.725 15.835 18.725 13.23C18.725 10.625 16.6063 8.505 14 8.505C11.3938 8.505 9.27502 10.625 9.27502 13.23ZM16.85 13.23C16.85 14.8025 15.5725 16.08 14 16.08C12.4275 16.08 11.15 14.8025 11.15 13.23C11.15 11.6575 12.4275 10.38 14 10.38C15.5725 10.38 16.85 11.6575 16.85 13.23Z"
                                                            fill="#0F1419"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="invisible xl:visible absolute xl:static">
                                                Beranda
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink
                                            className={`relative h-16 w-16 xl:w-64 items-center justify-center xl:justify-start rounded-full ${
                                                active === "Trend"
                                                    ? "bg-gray-200"
                                                    : "bg-white"
                                            } hover:bg-gray-200 flex flex-wrap`}
                                            to={"/trend"}
                                            onClick={() => setActive("Trend")}
                                        >
                                            <div className="px-5">
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g id="Group">
                                                        <path
                                                            id="Vector"
                                                            d="M24.25 7.17124H19.3375L19.8025 1.83124C19.8475 1.31624 19.465 0.862493 18.95 0.816243C18.4288 0.778743 17.98 1.15374 17.935 1.66999L17.4562 7.16999H9.55625L10.0187 1.83249C10.065 1.31624 9.68125 0.862493 9.16875 0.816243C8.64375 0.778743 8.1975 1.15374 8.1525 1.66999L7.675 7.16999H2.7275C2.21 7.16999 1.79 7.59124 1.79 8.10749C1.79 8.62374 2.21 9.04499 2.7275 9.04499H7.5125L6.825 16.9537H1.75C1.2325 16.9537 0.8125 17.3737 0.8125 17.8912C0.8125 18.4087 1.2325 18.8287 1.75 18.8287H6.6625L6.1975 24.1687C6.1525 24.6837 6.535 25.1375 7.05 25.1837L7.1325 25.1875C7.61375 25.1875 8.0225 24.8187 8.065 24.33L8.54375 18.83H16.4438L15.9813 24.1675C15.9363 24.6837 16.3188 25.1375 16.8337 25.1837L16.9163 25.1875C17.3975 25.1875 17.8062 24.8187 17.8487 24.33L18.3263 18.83H23.2725C23.7887 18.83 24.21 18.4087 24.21 17.8925C24.21 17.3762 23.7887 16.955 23.2725 16.955H18.4875L19.175 9.04624H24.25C24.7675 9.04624 25.1875 8.62624 25.1875 8.10874C25.1875 7.59124 24.7675 7.17124 24.25 7.17124ZM16.6063 16.9537H8.70625L9.39375 9.04624H17.2938L16.6063 16.9537Z"
                                                            fill="#0F1419"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="invisible xl:visible absolute xl:static">
                                                Jelajahi
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink
                                            className={`relative h-16 w-16 xl:w-64 items-center justify-center xl:justify-start rounded-full ${
                                                active === "Notifikasi"
                                                    ? "bg-gray-200"
                                                    : "bg-white"
                                            } hover:bg-gray-200 flex flex-wrap`}
                                            to={"/notifikasi"}
                                            onClick={() =>
                                                setActive("Notifikasi")
                                            }
                                        >
                                            <div className="px-5">
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g id="Group">
                                                        <path
                                                            id="Vector"
                                                            d="M25.1213 18.585C25.0963 18.565 22.4462 16.535 22.4925 11.0475C22.5175 7.88251 21.4775 5.07001 19.5588 3.12876C17.84 1.38751 15.5125 0.425006 13.0062 0.412506H12.99C10.485 0.425006 8.1575 1.38751 6.4375 3.13001C4.52 5.07126 3.4775 7.88251 3.505 11.0475C3.55125 16.46 0.979999 18.5063 0.877499 18.585C0.552499 18.8263 0.419999 19.2475 0.546249 19.6325C0.673749 20.0175 1.03375 20.2763 1.43625 20.2763H7.58625C7.71375 23.1638 10.0825 25.4763 12.9987 25.4763C15.915 25.4763 18.2812 23.1638 18.4075 20.2763H24.56C24.9625 20.2763 25.3225 20.0188 25.4475 19.6338C25.5763 19.25 25.4437 18.8275 25.1187 18.5863L25.1213 18.585ZM13 23.5975C11.1187 23.5975 9.5875 22.1263 9.465 20.275H16.535C16.41 22.125 14.8812 23.6 13 23.6V23.5975ZM3.475 18.4C4.4 16.985 5.41 14.615 5.38 11.03C5.3575 8.33001 6.185 6.05251 7.77125 4.44626C9.1375 3.06251 10.9962 2.29626 13 2.28751C15.0037 2.29751 16.8587 3.06251 18.225 4.44751C19.8125 6.05376 20.6412 8.33001 20.6187 11.0313C20.5887 14.6163 21.6 16.9875 22.525 18.4013H3.475V18.4Z"
                                                            fill="#0F1419"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="invisible xl:visible absolute xl:static">
                                                Notifikasi
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink
                                            className={`relative h-16 w-16 xl:w-64 items-center justify-center xl:justify-start rounded-full ${
                                                active === "Chat"
                                                    ? "bg-gray-200"
                                                    : "bg-white"
                                            } hover:bg-gray-200 flex flex-wrap`}
                                            to={"/chat"}
                                            onClick={() => setActive("Chat")}
                                        >
                                            <div className="px-5">
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g id="Group">
                                                        <path
                                                            id="Vector"
                                                            d="M22.0625 0.772491H3.9375C2.04125 0.772491 0.5 2.31499 0.5 4.21249V19.8312C0.5 21.7287 2.04125 23.2725 3.9375 23.2725H22.0625C23.9587 23.2725 25.5 21.7287 25.5 19.8312V4.21249C25.5 2.31499 23.9587 0.772491 22.0625 0.772491ZM3.9375 2.64749H22.0625C22.925 2.64749 23.625 3.34749 23.625 4.20999V5.10249L13.5625 11.8112C13.2212 12.0362 12.78 12.0387 12.4375 11.8087L2.375 5.10249V4.20999C2.375 3.34749 3.075 2.64749 3.9375 2.64749ZM22.0625 21.395H3.9375C3.075 21.395 2.375 20.695 2.375 19.8325V7.29999L11.425 13.3375C11.9037 13.6575 12.4525 13.8175 13 13.8175C13.55 13.8175 14.0963 13.6575 14.575 13.3387L23.625 7.30124V19.8287C23.625 20.6912 22.925 21.3912 22.0625 21.3912V21.395Z"
                                                            fill="#0F1419"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="invisible xl:visible absolute xl:static">
                                                Pesan
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink
                                            className={`relative h-16 w-16 xl:w-64 items-center justify-center xl:justify-start rounded-full ${
                                                active === "Profile"
                                                    ? "bg-gray-200"
                                                    : "bg-white"
                                            } hover:bg-gray-200 flex flex-wrap`}
                                            to={"/profile"}
                                            onClick={() => setActive("Profile")}
                                        >
                                            <div className="px-5">
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g id="Group">
                                                        <path
                                                            id="Vector"
                                                            d="M11 12.77C12.6938 12.77 14.59 12.5825 15.8 11.2C16.8175 10.0375 17.1475 8.24001 16.8075 5.71001C16.3325 2.17876 14.1613 0.0700073 11 0.0700073C7.83875 0.0700073 5.6675 2.17876 5.1925 5.71251C4.8525 8.24001 5.1825 10.0375 6.2 11.2C7.41 12.5838 9.30625 12.77 11 12.77ZM7.05 5.96001C7.2525 4.46001 8.03375 1.94501 11 1.94501C13.9663 1.94501 14.7475 4.46126 14.95 5.96001C15.2088 7.89751 15.0213 9.24376 14.3875 9.96626C13.8188 10.6163 12.805 10.895 11 10.895C9.195 10.895 8.18125 10.6163 7.6125 9.96626C6.97875 9.24376 6.79125 7.89626 7.05 5.96001ZM21.35 22.045C20.2538 17.6375 15.9975 14.5575 11 14.5575C6.0025 14.5575 1.74625 17.6375 0.650004 22.045C0.435004 22.91 0.615003 23.795 1.14375 24.47C1.65375 25.12 2.44375 25.495 3.31 25.495H18.69C19.5563 25.495 20.3463 25.12 20.8563 24.47C21.3863 23.795 21.565 22.9113 21.3488 22.045H21.35ZM19.38 23.315C19.2225 23.515 18.985 23.6225 18.69 23.6225H3.31C3.01625 23.6225 2.7775 23.5163 2.62 23.315C2.44875 23.0975 2.395 22.8 2.47 22.4975C3.3575 18.9288 6.86625 16.435 11 16.435C15.1338 16.435 18.6425 18.9275 19.53 22.4975C19.605 22.8 19.5513 23.0975 19.38 23.315Z"
                                                            fill="#0F1419"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="invisible xl:visible absolute xl:static">
                                                Profil
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            <div className="py-6">
                                <ul>
                                    <li>
                                        <button
                                            className="relative h-16 w-16 xl:w-64 items-center rounded-full bg-sky-500 hover:bg-sky-600 flex text-white font-bold xl:justify-center"
                                            onClick={openPost}
                                        >
                                            <div>
                                                <svg
                                                    className="invisible md:visible xl:hidden p-3 rounded-full"
                                                    width="64px"
                                                    height="64px"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-labelledby="featherIconTitle"
                                                    stroke="#FFFFFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                    strokeLinejoin="miter"
                                                    color="#000000"
                                                >
                                                    <title id="featherIconTitle">
                                                        Tweet
                                                    </title>
                                                    <path d="M5.12634 17C5.04271 17.6571 5 18.325 5 19V21M5.12634 17C6.03384 9.86861 11.7594 4 20 4L19 8H16L17 10L15 12H11L13 14L12 16H8L5.12634 17Z" />
                                                </svg>
                                            </div>
                                            <span className="invisible xl:visible text-xl absolute xl:static">
                                                Posting
                                            </span>
                                        </button>
                                        {openPostModal && (
                                            <ModalPost
                                                cancelPost={cancelPost}
                                            />
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <ul>
                                <li>
                                    <button
                                        className="relative justify-center h-16 w-16 xl:w-64 xl:px-3 items-center rounded-full hover:bg-gray-200 flex xl:justify-between"
                                        onClick={openLogout}
                                    >
                                        <div className="mr-4">
                                            <img
                                                src={
                                                    data?.user.user_metadata
                                                        .avatar_url ||
                                                    "https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
                                                }
                                                className="rounded-full h-14 w-14"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm absolute xl:static invisible xl:visible">
                                                {data?.user.user_metadata
                                                    .name || "-"}
                                            </p>
                                            <p className="text-sm absolute xl:static invisible xl:visible opacity-60">
                                                @
                                                {data?.user.user_metadata
                                                    .user_name ||
                                                    data?.user.user_metadata.name
                                                        .toLowerCase()
                                                        .split(" ")
                                                        .join("")}
                                            </p>
                                        </div>
                                        <div className="absolute xl:static invisible xl:visible">
                                            <svg
                                                width="19"
                                                height="5"
                                                viewBox="0 0 19 5"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Group">
                                                    <path
                                                        id="Vector"
                                                        d="M15.6875 0.09375C14.3606 0.09375 13.2812 1.17587 13.2812 2.5C13.2812 3.82413 14.3593 4.90625 15.6875 4.90625C17.013 4.90625 18.0938 3.8255 18.0938 2.5C18.0938 1.1745 17.013 0.09375 15.6875 0.09375ZM15.6875 3.53125C15.1182 3.53125 14.6562 3.06925 14.6562 2.5C14.6562 1.93212 15.1196 1.46875 15.6875 1.46875C16.2554 1.46875 16.7188 1.93075 16.7188 2.5C16.7188 3.06787 16.2568 3.53125 15.6875 3.53125ZM9.5 0.09375C8.17175 0.09375 7.09375 1.17587 7.09375 2.5C7.09375 3.82413 8.17313 4.90625 9.5 4.90625C10.8269 4.90625 11.9062 3.8255 11.9062 2.5C11.9062 1.1745 10.8282 0.09375 9.5 0.09375ZM9.5 3.53125C8.93075 3.53125 8.46875 3.06925 8.46875 2.5C8.46875 1.93212 8.93213 1.46875 9.5 1.46875C10.0679 1.46875 10.5312 1.93075 10.5312 2.5C10.5312 3.06787 10.0693 3.53125 9.5 3.53125ZM3.3125 0.09375C1.98563 0.09375 0.90625 1.17587 0.90625 2.5C0.90625 3.82413 1.98563 4.90625 3.3125 4.90625C4.638 4.90625 5.71875 3.8255 5.71875 2.5C5.71875 1.1745 4.63663 0.09375 3.3125 0.09375ZM3.3125 3.53125C2.74325 3.53125 2.28125 3.06925 2.28125 2.5C2.28125 1.93212 2.74462 1.46875 3.3125 1.46875C3.88037 1.46875 4.34375 1.93075 4.34375 2.5C4.34375 3.06787 3.88175 3.53125 3.3125 3.53125Z"
                                                        fill="#0F1419"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                    {openLogoutModal && (
                                        <ModalLogout
                                            cancelLogout={cancelLogout}
                                        />
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="col-span-12 md:col-span-10 xl:col-span-9">
                {active === "Chat" && (
                    <div className="grid-cols-12 grid">
                        <main className="col-span-12 md:col-span-12 lg:col-span-5">
                            <div className="flex flex-col w-full h-screen box-border justify-between">
                                <div className="md:border-x-2">
                                    {children}
                                    <Outlet />
                                    <MobileView />
                                </div>
                            </div>
                        </main>
                        <section className="invisible lg:visible lg:col-span-7">
                            <MessageContent />
                        </section>
                    </div>
                )}
                {active !== "Chat" && (
                    <div className="grid-cols-12 grid overflow-auto h-screen">
                        <main className="col-span-12 md:col-span-12 lg:col-span-7">
                            <div className="flex flex-col w-full h-screen box-border justify-between">
                                <div className="md:border-x-2">
                                    {children}
                                    <Outlet />
                                    <MobileView />
                                </div>
                            </div>
                        </main>

                    {active !== "Chat" && (
                        <section className="invisible lg:visible absolute lg:static lg:col-span-5">
                            <div className="flex flex-col m-auto box-border items-center justify-center">
                                <button className="flex flex-row g-sky-500 mt-4 group bg-slate-200 rounded-[50px] w-[350px] mx-6 sticky top-0 border-y focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
                                    <svg
                                        className="ml-3 mt-3 group-focus:stroke-sky-600 group-hover:stroke-sky-500"
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.0446 15.2054L13.1471 12.3079C14.1961 11.065 14.8334 9.46108 14.8334 7.70833C14.8334 3.77375 11.643 0.583328 7.70837 0.583328C3.77379 0.583328 0.583374 3.77375 0.583374 7.70833C0.583374 11.6429 3.77379 14.8333 7.70837 14.8333C9.46192 14.8333 11.065 14.1968 12.3064 13.1471L15.2039 16.0446C15.3202 16.1602 15.473 16.2187 15.6235 16.2187C15.7739 16.2187 15.9282 16.161 16.043 16.0446C16.2766 15.8126 16.2766 15.4374 16.0446 15.2054ZM1.77087 7.70833C1.77087 4.43479 4.43483 1.77083 7.70837 1.77083C10.9819 1.77083 13.6459 4.43479 13.6459 7.70833C13.6459 10.9819 10.9819 13.6458 7.70837 13.6458C4.43483 13.6458 1.77087 10.9819 1.77087 7.70833Z"
                                            fill="#5B7083"
                                        />
                                    </svg>
                                    <input
                                        id="searchinput"
                                        className="bg-slate-200 pl-4 w-full h-[39px] focus:outline-none rounded-[50px] outline-none border-none focus:ring-0"
                                        type="search"
                                        placeholder="Search"
                                    />
                                </button>

                                <div className="flex flex-col w-[350px] rounded-[16px] bg-[#F7F9FA] mt-2 pt-3">
                                    <h1 className="font-bold text-[20px] p-5">
                                        Trends for you
                                    </h1>
                                    <div className="hover:bg-slate-200 h-[100px] p-5">
                                        <a
                                            className="flex flex-wrap justify-between items-center"
                                            href=""
                                        >
                                            <div>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    Trending in Indonesia
                                                </p>
                                                <h2 className="text-[15px] font-bold">
                                                    Luffy
                                                </h2>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    40K posts
                                                </p>
                                            </div>
                                            <svg
                                                className="left-[300px] hover:bg-sky-50 hover:rounded-full hover:stroke-blue-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="hover:bg-slate-200 h-[100px] p-5">
                                        <a
                                            className="flex flex-wrap justify-between items-center"
                                            href=""
                                        >
                                            <div>
                                                <h2 className="text-[15px] font-bold">
                                                    #ONEPIECENETFLIX👒
                                                </h2>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    Kru Topi Jerami Siap
                                                    Berangkat
                                                </p>
                                                <p className="text-[12px] text-[#5B7083]">
                                                    Promoted by Netflix
                                                    Indonesia
                                                </p>
                                            </div>
                                            <svg
                                                className="left-[300px] hover:bg-sky-50 hover:rounded-full hover:stroke-blue-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="hover:bg-slate-200 h-[100px] p-5">
                                        <a
                                            className="flex flex-wrap justify-between items-center"
                                            href=""
                                        >
                                            <div>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    Televesion Trending
                                                </p>
                                                <h2 className="text-[15px] font-bold">
                                                    #OnePieceLiveAction👒
                                                </h2>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    47.9K posts
                                                </p>
                                            </div>
                                            <svg
                                                className="left-[300px] hover:bg-sky-50 hover:rounded-full hover:stroke-blue-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="hover:bg-slate-200 h-[100px] p-5">
                                        <a
                                            className="flex flex-wrap justify-between items-center"
                                            href=""
                                        >
                                            <div>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    Trending in Indonesia
                                                </p>
                                                <h2 className="text-[15px] font-bold">
                                                    SuperBlueMoon
                                                </h2>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    44K posts
                                                </p>
                                            </div>
                                            <svg
                                                className="left-[300px] hover:bg-sky-50 hover:rounded-full hover:stroke-blue-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="hover:bg-slate-200 h-[100px] p-5">
                                        <a
                                            className="flex flex-wrap justify-between items-center"
                                            href=""
                                        >
                                            <div>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    Trending
                                                </p>
                                                <h2 className="text-[15px] font-bold">
                                                    Waduh
                                                </h2>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    8,414K posts
                                                </p>
                                            </div>
                                            <svg
                                                className="left-[300px] hover:bg-sky-50 hover:rounded-full hover:stroke-blue-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="hover:bg-slate-200 h-[100px] p-5">
                                        <a
                                            className="flex flex-wrap justify-between items-center"
                                            href=""
                                        >
                                            <div>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    Sports Trending
                                                </p>
                                                <h2 className="text-[15px] font-bold">
                                                    Barca
                                                </h2>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    86K posts
                                                </p>
                                            </div>
                                            <svg
                                                className="left-[300px] hover:bg-sky-50 hover:rounded-full hover:stroke-blue-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="hover:bg-slate-200 h-[100px] p-5">
                                        <a
                                            className="flex flex-wrap justify-between items-center"
                                            href=""
                                        >
                                            <div>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    Only on Twitter Trending
                                                </p>
                                                <h2 className="text-[15px] font-bold">
                                                    #제로베이스원
                                                </h2>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    107K posts
                                                </p>
                                            </div>
                                            <svg
                                                className="left-[300px] hover:bg-sky-50 hover:rounded-full hover:stroke-blue-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="hover:bg-slate-200 h-[100px] p-5">
                                        <a
                                            className="flex flex-wrap justify-between items-center"
                                            href=""
                                        >
                                            <div>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    Music Trending
                                                </p>
                                                <h2 className="text-[15px] font-bold">
                                                    #Hindia
                                                </h2>
                                                <p className="text-[14px] text-[#5B7083]">
                                                    10K posts
                                                </p>
                                            </div>
                                            <svg
                                                className="left-[300px] hover:bg-sky-50 hover:rounded-full hover:stroke-blue-500 transition"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                ></circle>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="hover:bg-slate-200 p-5 cursor-pointer">
                                        <a className="text-sky-500" href="">
                                            Show More
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col w-[350px] bg-[#F7F9FA] mt-4 rounded-[15px]">
                                    <h1 className="text-[20px] font-bold mb-3 ml-7 mt-3">
                                        Who To Follow
                                    </h1>
                                    <div className="flex flex-row cursor-pointer hover:bg-slate-200 h-[80px]">
                                        <div className="mx-auto flex my-auto">
                                            <img
                                                className="h-[45px] w-[45px] rounded-full"
                                                src="./harisenin.jpg"
                                                alt=""
                                            />
                                            <div className="ml-3 my-auto">
                                                <a
                                                    className="font-bold hover:underline"
                                                    href=""
                                                >
                                                    harisenin.com
                                                </a>
                                                <p className="text-slate-500">
                                                    @harisenin
                                                </p>
                                            </div>
                                            <button className="bg-black text-white h-[30px] w-[70px] rounded-[20px] ml-[50px] font-semibold my-auto">
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row cursor-pointer hover:bg-slate-200 h-[80px]">
                                        <div className="mx-auto flex my-auto">
                                            <img
                                                className="h-[45px] w-[45px] rounded-full"
                                                src="./harisenin.jpg"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <a
                                                    className="font-bold hover:underline"
                                                    href=""
                                                >
                                                    harisenin.com
                                                </a>
                                                <p className="text-slate-500">
                                                    @harisenin
                                                </p>
                                            </div>
                                            <button className="bg-black text-white h-[30px] w-[70px] rounded-[20px] ml-[50px] font-semibold my-auto">
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row cursor-pointer hover:bg-slate-200 h-[80px] my-auto">
                                        <div className="mx-auto flex my-auto">
                                            <img
                                                className="h-[45px] w-[45px] rounded-full"
                                                src="./harisenin.jpg"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <a
                                                    className="font-bold hover:underline"
                                                    href=""
                                                >
                                                    harisenin.com
                                                </a>
                                                <p className="text-slate-500">
                                                    @harisenin
                                                </p>
                                            </div>
                                            <button className="bg-black text-white h-[30px] w-[70px] rounded-[20px] ml-[50px] font-semibold my-auto">
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer hover:bg-slate-200 p-5">
                                        <a className="text-sky-500" href="">
                                            Show More
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col text-slate-500 text-[14px] w-[350px] mx-auto mt-2">
                                    <div className="flex gap-2 mb-1">
                                        <a href="">Terms of Services</a>
                                        <a href="">privacy policy</a>
                                        <a href=""> Cookie Policy</a>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="">Accessibility</a>
                                        <a href="">Ads Info</a>
                                        <a href="">More</a>
                                        <a href="">&copy;2023 X Crop.</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                </div>
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.element,
};

export default MainLayout;
