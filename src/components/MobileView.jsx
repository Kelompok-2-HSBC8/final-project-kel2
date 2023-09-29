import { NavLink } from "react-router-dom";
function MobileView() {
    return (
        <div className="md:invisible w-auto flex box-border border-t border-b-sky-400 pb-3 sticky bg-white bottom-0">
            <div className="w-full flex justify-center rounded-sm py-1">
                <div>
                    <ul className="items-center align-middle flex gap-4 flex-wrap w-full justify-between">
                        <li>
                            <NavLink
                                className="h-12 w-12 rounded-full hover:bg-gray-200 flex flex-wrap"
                                to={"/"}
                            >
                                <img
                                    className="px-3"
                                    src="./Group (2).svg"
                                    alt="home"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="h-12 w-12 rounded-full hover:bg-gray-200 flex flex-wrap"
                                to={"/trend"}
                            >
                                <img
                                    className="px-3"
                                    src="./Explore.svg"
                                    alt="Search"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="h-12 w-12 rounded-full hover:bg-gray-200 flex flex-wrap"
                                to={"/notifikasi"}
                            >
                                <img
                                    className="px-3"
                                    src="./Notif.svg"
                                    alt="Search"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="h-12 w-12 rounded-full hover:bg-gray-200 flex flex-wrap"
                                to={"/chat"}
                            >
                                <img
                                    className="px-3"
                                    src="./Message.svg"
                                    alt="Search"
                                />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileView;
