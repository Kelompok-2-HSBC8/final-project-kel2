import moment from "moment/moment";
import PropTypes from "prop-types";
export default function CommentCard(props) {
    const { avatar, name, username, content, createdAt } = props;
    return (
        <div className="">
            <section className="tweet p-4 border-b border-slate-300">
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
                                {name}
                            </span>
                        </div>
                        <div className="">
                            <span className="font-medium text-xs text-[#8899A6]">
                                @{username}
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
        </div>
    );
}

CommentCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
};
