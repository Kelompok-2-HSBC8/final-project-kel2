import Header from "../components/Header";
import FollowingUserDetail from "../components/followComponent/FollowingUserDetail";

const FollowingUserDetailPage = () => {
    const data = JSON.parse(
        localStorage.getItem("userDetail")
    );

    console.log(data);
    return (
        <>
            <Header
                value={
                    data?.raw_user_meta_data.user_name ||
                    data?.raw_user_meta_data.name
                        .toLowerCase()
                        .split(" ")
                        .join("")
                }
            />
            <FollowingUserDetail />
        </>
    );
};

export default FollowingUserDetailPage;
