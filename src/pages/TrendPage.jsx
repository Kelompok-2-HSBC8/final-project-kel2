function TrendPage() {
    return (
        <>
            <div className="flex justify-between py-3 px-6 space-x-6">
                <form className="w-full max-w-md" action="">
                    <div className="relative flex items-center text-blue-400 focus-within:text-blue-600">
                        <svg
                            className="w-5 h-5 absolute ml-3 pointer-events-none "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <input
                            className="w-full pr-3 pl-10 py-2 rounded-2xl placeholder-gray-500 ring-blue-600"
                            type="search"
                            placeholder="Search"
                        />
                    </div>
                </form>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </div>

            <div className="relative bg-black border">
                <img
                    className="w-full object-cover"
                    src="https://th.bing.com/th/id/OIP.GSnO2Eie9NtsS83kIh-67QHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="VALORANT Champions 2023"
                />
                <div className="absolute top-32 md:top-64 lg:top-[220px] left-0 w-full flex flex-col items-start justify-end space-x-6">
                    <h1 className="px-6 text-2xl font-bold text-white">
                        VALORANT Champions 2023
                    </h1>
                    <h2 className="text-3xl text-white">
                        Los Angeles
                        <span className="text-lg text-white">
                            August 27, 2023
                        </span>
                    </h2>
                    <p className="text-lg text-white">Esports</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-xl font-bold text-black mb-4">
                    Trends for you
                </h2>
                <ul>
                    <li className="mb-4">
                        <a
                            href="#"
                            className="text-lg font-bold text-black hover:underline"
                        >
                            #mantap gus
                        </a>
                        <p className="text-sm text-gray-400">7,600 Tweets</p>
                    </li>
                    <li className="mb-4">
                        <p className="text-sm text-gray-400">Korean music</p>
                        <a
                            href="#"
                            className="text-lg font-bold text-black hover:underline"
                        >
                            The 2nd Mini Album
                        </a>
                        <p className="text-sm text-gray-400">11k Tweets</p>
                    </li>
                    <li className="mb-4">
                        <a
                            href="#"
                            className="text-lg font-bold text-black hover:underline"
                        >
                            #GMMTVProtectNanon
                        </a>
                        <p className="text-sm text-gray-400">48.3k Tweets</p>
                    </li>
                    <li className="mb-4">
                        <p className="text-sm text-gray-400">Music</p>
                        <a
                            href="#"
                            className="text-lg font-bold text-black hover:underline"
                        >
                            HAPPY BIRTHDAY MY LOVE
                        </a>
                        <p className="text-sm text-gray-400">27.2k Tweets</p>
                    </li>
                    <li className="mb-4">
                        <a
                            href="#"
                            className="text-lg font-bold text-black hover:underline"
                        >
                            #SuperBlueMoon
                        </a>
                        <p className="text-sm text-gray-400">56.2k Tweets</p>
                    </li>
                </ul>
                <button className="w-full py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 focus:outline-none">
                    Show more
                </button>
            </div>

            <div className="bg-white text-black h-screen p-4">
                <h2 className="text-xl font-bold mb-4">Whats Happening</h2>
                <ul>
                    <a href="">
                        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <img
                                    src="https://th.bing.com/th?id=OIP.xtzU85EYYQXBoaEAapzaUwHaJZ&w=222&h=281&c=8&rs=1&qlt=90&o=6&dpr=1
                            .3&pid=3.1&rm=2"
                                    alt="Premier League Logo"
                                    className="h-8"
                                />
                                <div className="text-right">
                                    <p className="text-sm">Final</p>
                                    <p className="text-sm">WHU won</p>
                                </div>
                            </div>
                            <div className="flex justify-between text-2xl font-bold">
                                <p>Luton Town FC</p>
                                <p>1</p>
                            </div>
                            <div className="flex justify-between text-2xl font-bold">
                                <p>West Ham United</p>
                                <p>2</p>
                            </div>
                        </div>
                    </a>
                    <li className="flex items-center justify-between space-x-4 mb-4">
                        <div className="flex flex-col items-start">
                            <p className="text-sm text-gray-400">
                                Starts September 13, 2023
                            </p>
                            <a
                                href="#"
                                className="text-lg font-bold text-black hover:underline"
                            >
                                New York Fashion Week 2023
                            </a>
                        </div>
                        <img
                            className="w-16 h-16 rounded-xl"
                            src="https://th.bing.com/th/id/OIP.XrZZ0TVxoihwT7-tSVh3pAHaLH?pid=ImgDet&rs=1"
                            alt="New York Fashion Week 2023"
                        />
                    </li>
                    <li className="flex items-center justify-between space-x-4 mb-4">
                        <div className="flex flex-col items-start">
                            <p className="text-sm text-gray-400">
                                Starts September 13, 2023
                            </p>
                            <a
                                href="#"
                                className="text-lg font-bold text-black hover:underline"
                            >
                                Dreamforce 2023
                            </a>
                        </div>
                        <img
                            className="w-16 h-16 rounded-xl"
                            src="https://media.licdn.com/dms/image/D4D12AQHWbBgd0qDGkA/article-cover_image-shrink_720_1280/0/1688118869547?e=2147483647&v=beta&t=skYGe8vCki2WNeeUFW5nXlik_G4hKSlhOpq5BZ7n754"
                        />
                    </li>
                    <li className="flex items-center justify-between space-x-4 mb-4">
                        <div className="flex flex-col items-start">
                            <p className="text-sm text-gray-400">
                                Starts September 19, 2023
                            </p>
                            <a
                                href="#"
                                className="text-lg font-bold text-black hover:underline"
                            >
                                Intel Innovation 2023
                            </a>
                        </div>
                        <img
                            className="w-16 h-16 rounded-xl"
                            src="https://th.bing.com/th/id/OIP.s8VZTPvzO5mQnGvNiV9eigHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt="New York Fashion Week 2023"
                        />
                    </li>
                    <li className="flex items-center justify-between space-x-4 mb-4">
                        <div className="flex flex-col items-start">
                            <p className="text-sm text-gray-400">
                                Starts September 9, 2023
                            </p>
                            <a
                                href="#"
                                className="text-lg font-bold text-black hover:underline"
                            >
                                NFL season opener
                            </a>
                        </div>
                        <img
                            className="w-16 h-16 rounded-xl"
                            src="https://th.bing.com/th?id=OIF.1KzzdaJHC%2bL%2fYl9LJ3Q3ww&w=332&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt="New York Fashion Week 2023"
                        />
                    </li>
                    <li className="flex items-center justify-between space-x-4 mb-4">
                        <div className="flex flex-col items-start">
                            <p className="text-sm text-gray-400">
                                Premieres September 9, 2023
                            </p>
                            <a
                                href="#"
                                className="text-lg font-bold text-black hover:underline"
                            >
                                Convicting a Murderer
                            </a>
                        </div>
                        <img
                            className="w-16 h-16 rounded-xl"
                            src="https://th.bing.com/th/id/OIP.74wsD7SaPo995ABtpQ4PsQHaEZ?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt="New York Fashion Week 2023"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default TrendPage;
