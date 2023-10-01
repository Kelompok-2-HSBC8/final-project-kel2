import moment from "moment/moment";

export default function Tweet({ data }) {
    const {
        avatar,
        displayName,
        userName,
        bodyTweet,
        totalComment,
        totalLike,
        totalRetweet,
        totalShare,
        createdAt,
    } = data;

    const date = moment(createdAt).format("hh:mm a . D MMM YYYY");
    console.log(date);

    console.log(data);
    return (
        <div>
            <section className="tweet p-4 border-b border-slate-300">
                <div className="flex items-center mb-2">
                    <div className="mr-4">
                        <img
                            src={avatar}
                            className="rounded-full h-14 w-14"
                            alt=""
                        />
                    </div>
                    <div>
                        <div>
                            <span className="font-bold text-sm hover:underline">
                                {displayName}
                            </span>
                        </div>
                        <div className="">
                            <span className="font-medium text-xs text-[#8899A6]">
                                @{userName}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <span>{bodyTweet}</span>
                </div>
                <div>
                    <span className="font-medium text-xs text-[#8899A6]">
                        {date}
                    </span>
                </div>
            </section>

            <section className="flex justify-around border-b border-slate-300">
                <div className="comments flex items-center">
                    <svg
                        fill="#000000"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="2.3em"
                        height="2.3rem"
                        className="px-2 rounded-full hover:bg-[#00ceee29] hover:fill-[#00acee]"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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

                    <span className="text-sm font-medium text-[#8899A6]">
                        {totalComment}
                    </span>
                </div>

                <div className="retweets flex items-center">
                    <svg
                        fill="#000000"
                        width="2.5rem"
                        height="2.5rem"
                        viewBox="0 -0.08 20 20"
                        data-name="Capa 1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="p-2 rounded-full hover:bg-[#00ee7b29] hover:fill-[#00ee83]"
                    >
                        <path d="M11.59,11.46a.39.39,0,0,0-.41-.08.38.38,0,0,0-.23.35v1.72H8.88a4.83,4.83,0,0,1-2.81-.55A3.61,3.61,0,0,1,4.52,10a3.88,3.88,0,0,1,1-2.5A.38.38,0,0,0,4.94,7a4.56,4.56,0,0,0-1.17,3,4.34,4.34,0,0,0,1.84,3.5,4.82,4.82,0,0,0,3,.71H11v1.72a.41.41,0,0,0,.22.34.45.45,0,0,0,.16,0,.36.36,0,0,0,.24-.09c1.33-1.14,2.19-2,2.2-2a.38.38,0,0,0,.11-.26.39.39,0,0,0-.11-.27Zm.13,3.63,0-2.45L13,13.93C12.73,14.18,12.29,14.59,11.72,15.09Z" />
                        <path d="M14.39,6.41a5.27,5.27,0,0,0-3.28-.71H9.3V3.93a.38.38,0,0,0-.64-.27L6.46,5.87a.36.36,0,0,0-.11.26.39.39,0,0,0,.11.27s.88.86,2.2,2a.38.38,0,0,0,.25.09.28.28,0,0,0,.15,0,.38.38,0,0,0,.22-.34V6.45h1.83A4.67,4.67,0,0,1,13.93,7a3.66,3.66,0,0,1,1.55,2.93,3.85,3.85,0,0,1-1,2.5.38.38,0,0,0,0,.53.35.35,0,0,0,.26.1.4.4,0,0,0,.27-.11,4.63,4.63,0,0,0,1.17-3A4.39,4.39,0,0,0,14.39,6.41Zm-5.86.88c-.57-.5-1-.91-1.27-1.16L8.55,4.84Z" />
                    </svg>

                    <span className="text-sm font-medium text-[#8899A6] hover:">
                        {totalRetweet}
                    </span>
                </div>

                <div className="likes flex items-center">
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
                        xmlLang="http://www.serif.com/"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        stroke="#000000"
                        strokeWidth="0.00032"
                        className="p-2 rounded-full hover:bg-[#ee000029] hover:last-of-type:fill-[#ee0000]"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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

                    <span className="text-sm font-medium text-[#8899A6] hover:">
                        {totalLike}
                    </span>
                </div>

                <div className="shares flex items-center">
                    <svg
                        fill="#000000"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="2.3rem"
                        height="2.5rem"
                        className="p-2 rounded-full hover:bg-[#00ceee29] hover:first:fill-[#00acee]"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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

                    <span className="text-sm font-medium text-[#8899A6] hover:">
                        {totalShare}
                    </span>
                </div>
            </section>
        </div>
    );
}
