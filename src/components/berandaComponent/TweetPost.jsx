export default function TweetPost() {
    return (
        <section className="post p-4 flex border-b border-slate-300 mb-3">
            <div className="profile-picture mr-4">
                <img src="./pp.svg" alt="" className="rounded-full w-14" />
            </div>
            <div className="w-full">
                <textarea
                    style={{ overflow: "hidden" }}
                    maxLength="280"
                    rows="4"
                    placeholder="What is happening ?!"
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
                        <button className="bg-sky-500 hover:bg-sky-600 rounded-full w-20 h-8 font-bold text-white">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
