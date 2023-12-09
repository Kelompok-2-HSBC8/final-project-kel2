import { Link } from "react-router-dom";
import Header from "../Header";

export default function FollowersUserDetail() {
    const data = JSON.parse(
        localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token") ||
            JSON.parse(
                localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token")
            )
    );

    const userData = JSON.parse(localStorage.getItem("userDetail"));
    const followers = userData?.followers;
    return (
        <div className="min-h-screen">
            <div className="border-b border-slate-300">
                <div className="flex justify-center w-full">
                    <Link
                        className="p-4 grow text-center hover:bg-gray-100 border-b-[5px] border-b-[#00acee]"
                        to={`/profile/${userData?.id}/followers`}
                    >
                        Followers
                    </Link>

                    <Link
                        className="p-4 grow text-center hover:bg-gray-100"
                        to={`/profile/${userData?.id}/following`}
                    >
                        Following
                    </Link>
                </div>
            </div>

            {/* list followers */}
            {followers &&
                followers.map((item, index) => {
                    return (
                        <div
                            className="flex items-center justify-between"
                            key={index}
                        >
                            <div className="flex items-center p-4">
                                <div className="mr-4">
                                    <img
                                        src={
                                            item?.followedBy?.raw_user_meta_data
                                                ?.avatar_url || "-"
                                        }
                                        alt="avatar"
                                        className="w-12 h-12 rounded-full"
                                    />
                                </div>
                                <div>
                                    <h1 className="font-bold">
                                        {
                                            item?.followedBy?.raw_user_meta_data
                                                ?.name
                                        }
                                    </h1>
                                    <p className="text-slate-500">
                                        @
                                        {
                                            item?.followedBy?.raw_user_meta_data
                                                ?.user_name || item?.followedBy?.raw_user_meta_data
                                                ?.username || item?.followedBy?.raw_user_meta_data
                                                ?.name.toLowerCase().split(" ").join("")
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <button className="bg-black text-white h-[30px] w-[70px] rounded-[20px] ml-[50px] font-semibold my-auto">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
