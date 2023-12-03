import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../redux/slices/message";
import Loading from "../components/Loading";
import MessageCard from "../components/messageComponent/MessageCard";

function ChatPage() {
    const [search, setSearch] = useState("");
    const { data, loading } = useSelector((state) => state.message);
    const filteredMessage = data.filter((message) =>
        message?.sender?.raw_user_meta_data?.name.toLowerCase().includes(search.toLowerCase())
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMessage());
    }, [dispatch]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    if (loading) {
        return (
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
                        onChange={handleSearch}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Loading />
                </div>
            </div>
        );
    }
    return (
        <div className="w-auto h-screen box-border border-x-2 py-6">
            <div className="flex justify-between px-3">
                <p className="text-xl font-bold">Pesan</p>
                <div className="flex gap-2">
                    <button className="hover:bg-gray-200 p-1 rounded-full">
                        <img src="./settings-svgrepo-com.svg" alt="Settings" />
                    </button>
                    <button className="hover:bg-gray-200 p-1 rounded-full">
                        <img src="./mail-plus-svgrepo-com.svg" alt="Massage" />
                    </button>
                </div>
            </div>

            <div className="flex px-2 py-5 justify-center">
                <input
                    className="rounded-full w-full px-6 py-3 border-2 focus:outline-cyan-500 text-center"
                    type="text"
                    placeholder="Cari Direct Message"
                    onChange={handleSearch}
                />
            </div>

            <div>
                <ul>
                    {filteredMessage.map((message) => {
                        const chatLastIndex = message?.chat?.length - 1;

                        return (
                            <li key={message.id}>
                                <MessageCard
                                    avatar={
                                        message?.sender?.raw_user_meta_data
                                            ?.avatar_url
                                    }
                                    name={
                                        message?.sender?.raw_user_meta_data
                                            ?.name
                                    }
                                    lastChat={
                                        message?.chat[chatLastIndex]?.content
                                    }
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ChatPage;
