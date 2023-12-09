import Header from "../components/Header";
import Followers from "../components/followComponent/Followers";

const FollowersPage = () => {
    const data = JSON.parse(
        localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token") ||
            JSON.parse(
                localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token")
            )
    );

    console.log(data);
    return (
        <>
            <Header
                value={
                    data?.user.user_metadata.user_name ||
                    data?.user.user_metadata.name
                        .toLowerCase()
                        .split(" ")
                        .join("")
                }
            />
            <Followers />
        </>
    );
};

export default FollowersPage;
