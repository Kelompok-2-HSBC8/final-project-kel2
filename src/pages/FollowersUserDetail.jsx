import Header from "../components/Header";
import FollowersUserDetail from "../components/followComponent/FollowersUserDetail";


const FollowersUserDetailPage = () => {
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
            <FollowersUserDetail />
        </>
    );
};

export default FollowersUserDetailPage;
