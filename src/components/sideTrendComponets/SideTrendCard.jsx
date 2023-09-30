export default function SideTrend(props) {
    const { sideTrends, trendingAt, tweetCount } = props;
    return (
        <>
            <div className="hover:bg-slate-200 h-[100px] p-5">
                <a
                    className="flex flex-wrap justify-between items-center "
                    href=""
                >
                    <div className="z-0">
                        <p className="text-[14px] text-[#5B7083]">
                            Trending in {trendingAt}
                        </p>
                        <h2 className="text-[15px] font-bold">{sideTrends}</h2>
                        <p className="text-[14px] text-[#5B7083]">
                            {tweetCount}
                        </p>
                    </div>
                    <button className="z-10">
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
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                    </button>
                </a>
            </div>
        </>
    );
}
