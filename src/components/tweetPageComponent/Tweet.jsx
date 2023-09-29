import moment from "moment/moment";

export default function Tweet({ data }) {
    // console.log(data);
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
        <>
            <section className="p-4">
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
        </>
    );
}
