import PropTypes from "prop-types";

function ModalPost({ cancelPost }) {
    const data = JSON.parse(
        localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token")
    );
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 backdrop-blur-[1.5px] backdrop-brightness-50"></div>

            <div className="bg-white w-[600px] rounded-xl shadow-lg z-10 relative top-[-22%]">
                <div className="w-full p-4">
                    <button
                        className="absolute top-4 left-4 text-black font-bold cursor-pointer ml-2"
                        onClick={cancelPost}
                    >
                        &#x2715;
                    </button>

                    <div className="flex mb-[20px] mt-[50px]">
                        <img
                            src={data?.user?.user_metadata?.avatar_url || "-"}
                            alt=""
                            className="rounded-full h-10 mr-2"
                        />
                        <textarea
                            style={{ overflow: "hidden" }}
                            maxLength="280"
                            rows="4"
                            placeholder="What is happening ?!"
                            className="w-[500px] rounded-xl resize-none border-none focus:outline-none focus:ring-0"
                        ></textarea>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                                        <a href="#" className="">
                                            <img
                                                src="./img.svg"
                                                alt=""
                                                className=""
                                            />
                                        </a>
                                    </div>
                                    <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                                        <a href="#" className="">
                                            <img
                                                src="./gif.svg"
                                                alt=""
                                                className=""
                                            />
                                        </a>
                                    </div>
                                    <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                                        <a href="#" className="">
                                            <img
                                                src="./pooling.svg"
                                                alt=""
                                                className=""
                                            />
                                        </a>
                                    </div>
                                    <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                                        <a href="#" className="">
                                            <img
                                                src="./emoji.svg"
                                                alt=""
                                                className=""
                                            />
                                        </a>
                                    </div>
                                    <div className="p-2 rounded-full hover:bg-[#00acee]/20 mr-2 cursor-pointer">
                                        <a href="#" className="">
                                            <img
                                                src="./schedule.svg"
                                                alt=""
                                                className=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="bg-sky-500 hover:bg-sky-600 rounded-full w-20 h-8 font-bold text-white">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalPost.propTypes = {
    cancelPost: PropTypes.func.isRequired,
};

export default ModalPost;
