import { useState } from "react";
import { createTweet } from "../../services/tweet";
import PropTypes from "prop-types";
export default function TweetPost({ isRefresh }) {
    const [content, setContent] = useState("");
    const [valid, setValid] = useState(false);
    const data = JSON.parse(
        localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token") ||
        JSON.parse(localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token"))
    );

    const handleSubmit = async () => {
        try {
            const res = await createTweet({ content, id: data.user.id });
            if (res) {
                isRefresh(true);
                setContent("");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleContent = (e) => {
        setContent(e.target.value);
        if (e.target.value.length !== 0) {
            setValid(true);
        } else {
            setValid(false);
        }
    };
    return (
        <section className="post p-4 flex border-b border-slate-300 mb-3">
            <div className="profile-picture mr-4">
                <img
                    src={data?.user?.user_metadata?.avatar_url || "-"}
                    alt=""
                    className="rounded-full w-14"
                />
            </div>
            <div className="w-full">
                <textarea
                    style={{ overflow: "hidden" }}
                    maxLength="280"
                    rows="4"
                    placeholder="What is happening ?!"
                    onChange={handleContent}
                    className="w-full resize-none border-none focus:outline-none focus:ring-0"
                ></textarea>

                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                            <a href="#" className="">
                                <img src="./img.svg" alt="" className="" />
                            </a>
                        </div>
                        <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                            <a href="#" className="">
                                <img src="./gif.svg" alt="" className="" />
                            </a>
                        </div>
                        <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                            <a href="#" className="">
                                <img src="./pooling.svg" alt="" className="" />
                            </a>
                        </div>
                        <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                            <a href="#" className="">
                                <img src="./emoji.svg" alt="" className="" />
                            </a>
                        </div>
                        <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                            <a href="#" className="">
                                <img src="./schedule.svg" alt="" className="" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            className={`${
                                valid
                                    ? "bg-sky-500 hover:bg-sky-600"
                                    : "bg-sky-300"
                            }  rounded-full w-20 h-8 font-bold text-white`}
                            onClick={handleSubmit}
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

TweetPost.propTypes = {
    isRefresh: PropTypes.func,
};
