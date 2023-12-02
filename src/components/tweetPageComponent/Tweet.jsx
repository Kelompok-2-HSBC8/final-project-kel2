import moment from "moment/moment";
import PropTypes from "prop-types";
export default function Tweet({ data }) {
    const { postedBy, content, createdAt } = data;
    return (
        <>
            <section className="p-4">
                <div className="flex items-center mb-2">
                    <div className="mr-4">
                        <img
                            src={
                                postedBy?.raw_user_meta_data?.avatar_url || "-"
                            }
                            className="rounded-full h-14 w-14"
                            alt=""
                        />
                    </div>
                    <div>
                        <div>
                            <span className="font-bold text-sm hover:underline">
                                {postedBy?.raw_user_meta_data?.name || "-"}
                            </span>
                        </div>
                        <div className="">
                            <span className="font-medium text-xs text-[#8899A6]">
                                @
                                {postedBy?.raw_user_meta_data?.user_name ||
                                    postedBy?.raw_user_meta_data?.name
                                        .toLowerCase()
                                        .split(" ")
                                        .join("")}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <span>{content}</span>
                </div>
                <div>
                    <span className="font-medium text-xs text-[#8899A6]">
                        {new Date(createdAt).toLocaleString("id-ID")}
                    </span>
                </div>
            </section>
        </>
    );
}

Tweet.propTypes = {
    data: PropTypes.shape({
        postedBy: PropTypes.shape({
            raw_user_meta_data: PropTypes.shape({
                avatar_url: PropTypes.string,
                name: PropTypes.string,
                user_name: PropTypes.string,
            }),
        }),
        content: PropTypes.string,
        createdAt: PropTypes.string,
    }),
};
