function ChatPage() {
    return (
        <>
            <div className="w-auto h-screen box-border border-x-2 py-6">
                <div className="flex justify-between px-3">
                    <p className="text-xl font-bold">Pesan</p>
                    <div className="flex gap-2">
                        <button className="hover:bg-gray-200 p-1 rounded-full">
                            <img
                                src="./settings-svgrepo-com.svg"
                                alt="Settings"
                            />
                        </button>
                        <button className="hover:bg-gray-200 p-1 rounded-full">
                            <img
                                src="./mail-plus-svgrepo-com.svg"
                                alt="Massage"
                            />
                        </button>
                    </div>
                </div>

                <div className="flex px-2 py-5 justify-center">
                    <input
                        className="rounded-full w-full px-6 py-3 border-2 focus:outline-cyan-500 text-center"
                        type="text"
                        placeholder="Cari Direct Message"
                    />
                </div>

                <div>
                    <ul>
                        <li>
                            <a
                                className="relative justify-center h-16 px-4 w-full items-center hover:bg-gray-200 flex xl:justify-between"
                                href="#"
                            >
                                <div className="flex justify-start gap-3">
                                    <img
                                        className="w-10 rounded-full bg-sky-500 align-baseline"
                                        src="./tw-cus.svg"
                                        alt="foto profile"
                                    />
                                    <div>
                                        <p className="font-bold text-sm pr-9">
                                            HSBC8 Kelompok 1
                                        </p>
                                        <p className="text-sm pr-8 truncate w-48">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Itaque, harum!
                                        </p>
                                    </div>
                                </div>
                                <button className="rounded-full px-1 py-3 hover:bg-slate-300">
                                    <img src="./Group.svg" alt="profile-opsi" />
                                </button>
                            </a>
                        </li>
                        <li>
                            <a
                                className="relative justify-center h-16 px-4 w-full items-center hover:bg-gray-200 flex xl:justify-between"
                                href="#"
                            >
                                <div className="flex justify-start gap-3">
                                    <img
                                        className="w-10 rounded-full bg-sky-500 align-baseline"
                                        src="./tw-cus.svg"
                                        alt="foto profile"
                                    />
                                    <div>
                                        <p className="font-bold text-sm pr-9">
                                            HSBC8 Kelompok 3
                                        </p>
                                        <p className="text-sm pr-8 truncate w-48">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Itaque, harum!
                                        </p>
                                    </div>
                                </div>
                                <button className="rounded-full px-1 py-3 hover:bg-slate-300">
                                    <img src="./Group.svg" alt="profile-opsi" />
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ChatPage;
