function NotifikasiPage() {
    return (
        <div className="h-screen">
            <div className="flex justify-between h-16 p-4">
                <div className="flex justify-start">
                    <a
                        className="md:hidden justify-center items-center rounded-full p-1 hover:bg-gray-200 flex mr-5"
                        href="#"
                    >
                        <img
                            className="h-9 w-9 rounded-full"
                            src="./foto.jpg"
                            alt="foto profile"
                        />
                    </a>
                    <h1 className="text-3xl font-bold">Notifications</h1>
                </div>
                <div>
                    <svg
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="20"
                        height="20"
                    >
                        <g fill="#0F1419">
                            <path
                                d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
                                fill="#0F1419"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>

            <div className="flex justify-center border-b">
                <button className="grow p-4 text-center font-bold text-[#536471]">
                    <div>All</div>
                </button>
                <button className="grow p-4 text-center font-bold text-[#536471]">
                    Verified
                </button>
                <button className="grow p-4 text-center font-bold text-[#536471]">
                    Mentions
                </button>
            </div>

            <article>
                <div className="flex justify-start border-b p-2">
                    <svg
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="mr-4 ml-1"
                        width="32"
                        height="32"
                    >
                        <g fill="#F91880">
                            <path
                                d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                fill="#F91880"
                            ></path>
                        </g>
                    </svg>
                    <div>
                        <img src="./pp1.jpg" className="w-8 h-8 rounded-full" />
                        <p>
                            <b>Hanyur</b> liked your post
                        </p>
                        <span className="line-clamp-3 justify-around">
                            lagi trial nih
                        </span>
                    </div>
                </div>
            </article>

            <article>
                <div className="flex justify-start border-b p-2">
                    <svg
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="mr-4 ml-1"
                        width="32"
                        height="32"
                    >
                        <g fill="#1D9BF0">
                            <path
                                d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"
                                fill="#1D9BF0"
                            ></path>
                        </g>
                    </svg>
                    <div>
                        <img src="./pp2.jpg" className="w-8 h-8 rounded-full" />
                        <p>
                            <b>Danu</b> followed you
                        </p>
                    </div>
                </div>
            </article>

            <article>
                <div className="border-b p-2">
                    <div className="flex justify-between mb-2">
                        <div className="flex justify-start">
                            <img
                                src="./pp1.jpg"
                                className="w-8 h-8 rounded-full mr-4 ml-1"
                            />
                            <div>
                                <p>
                                    <b>Hanyur</b> @hanyur_optic &#8901; Aug 21
                                </p>
                                <p>Replying to @RestaAgeng</p>
                                <span>aman ga?</span>
                            </div>
                        </div>
                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <div className="flex justify-between ml-12 mr-8">
                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>
                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>
                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>

                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </article>

            <article>
                <div className="border-b p-2">
                    <div className="flex justify-between mb-2">
                        <div className="flex justify-start">
                            <img
                                src="./pp1.jpg"
                                className="w-8 h-8 rounded-full mr-4 ml-1"
                            />
                            <div>
                                <p>
                                    <b>Hanyur</b> @hanyur_optic &#8901; Aug 21
                                </p>
                                <p>Replying to @RestaAgeng</p>
                                <span>aman ga?</span>
                            </div>
                        </div>
                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <div className="flex justify-between ml-12 mr-8">
                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>
                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>
                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>

                        <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                            width="20"
                            height="20"
                        >
                            <g fill="#536471">
                                <path
                                    d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                                    fill="#536471"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default NotifikasiPage;
