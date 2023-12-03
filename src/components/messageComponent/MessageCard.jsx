import React from "react";
import PropTypes from "prop-types";

function MessageCard({ avatar, name, lastChat }) {
    return (
        <a
            className="relative justify-center h-16 px-4 w-full items-center hover:bg-gray-200 flex xl:justify-between"
            href="#"
        >
            <div className="flex justify-start gap-3">
                <img
                    className="w-10 rounded-full bg-sky-500 align-baseline"
                    src={avatar}
                    alt="foto profile"
                />
                <div>
                    <p className="font-bold text-sm pr-9">{name}</p>
                    <p className="text-sm pr-8 truncate w-48">{lastChat}</p>
                </div>
            </div>
        </a>
    );
}

export default MessageCard;

MessageCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastChat: PropTypes.string.isRequired,
};
