import { Link } from "react-router-dom";
import Header from "../Header";

export default function Followers() {
    const data = JSON.parse(
        localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token") ||
            JSON.parse(
                localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token")
            )
    );
    return (
        <div>
            <div className="border-b border-slate-300">
                <div className="flex justify-center w-full">
                    <Link
                        className="p-4 grow text-center hover:bg-gray-100 border-b-[5px] border-b-[#00acee]"
                        to="/profile/followers"
                    >
                        Followers
                    </Link>

                    <Link
                        className="p-4 grow text-center hover:bg-gray-100"
                        to="/profile/following"
                    >
                        Following
                    </Link>
                </div>
            </div>

            {/* list followers */}
            <div className="flex items-center justify-between">
                <div className="flex items-center p-4 ">
                    <div className="mr-4">
                        <img
                            src={
                                data?.user.user_metadata.avatar_url ||
                                data?.user.user_metadata.avatar_url
                            }
                            alt="avatar"
                            className="w-12 h-12 rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold">Awikwok</h1>
                        <p className="text-slate-500">@Awikwokwokwok</p>
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
        </div>
    );
}
