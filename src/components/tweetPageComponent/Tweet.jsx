import moment from "moment/moment";
import PropTypes from "prop-types";
export default function Tweet({ data }) {
    // console.log(data);
    const {
        avatar,
        displayName,
        userName,
        bodyTweet,
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

Tweet.propTypes = {
    data: PropTypes.shape({
        avatar: PropTypes.string,
        displayName: PropTypes.string,
        userName: PropTypes.string,
        bodyTweet: PropTypes.string,
        totalComment: PropTypes.number,
        totalLike: PropTypes.number,
        totalRetweet: PropTypes.number,
        totalShare: PropTypes.number,
        createdAt: PropTypes.string,
    }),
};