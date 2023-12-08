import Header from "../components/Header";
import Following from "../components/followComponent/Following";

const FollowingPage = () => {
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
            <Following />
        </>
    );
};

export default FollowingPage;
