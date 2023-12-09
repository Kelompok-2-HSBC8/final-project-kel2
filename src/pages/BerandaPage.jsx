import { useEffect, useState } from "react";
import { fetchTweets } from "../redux/slices/tweet";
import { useSelector, useDispatch } from "react-redux";
import TweetCard from "../components/berandaComponent/TweetCard";
import TweetPost from "../components/berandaComponent/TweetPost";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import SkeletonLoading from "../components/SkeletonLoading";

function BerandaPage() {
    const [isRefresh, setIsRefresh] = useState(false);
    const { data, loading } = useSelector((state) => state.tweet);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isRefresh) {
            dispatch(fetchTweets());
            setIsRefresh(false);
        }
        dispatch(fetchTweets());
    }, [dispatch, isRefresh]);

    if (loading) {
        return (
            <>
                <Header value="Home" />
                <TweetPost />

                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
            </>
        );
    }

    return (
        <>
            <Header value="Home" />
            <TweetPost isRefresh={setIsRefresh} />

            <ul>
                {data.map((tweet) => {
                    return (
                        <li key={tweet.id}>
                            {/* <Link to={`/tweet/${tweet?.id}`}> */}
                            <TweetCard
                                tweet={tweet?.content}
                                tweetUserId={tweet?.postedBy?.id}
                                id={tweet?.id}
                                userName={
                                    tweet?.postedBy?.raw_user_meta_data
                                        .user_name ??
                                    tweet?.postedBy?.raw_user_meta_data.name
                                }
                                displayName={
                                    tweet?.postedBy?.raw_user_meta_data.name
                                }
                                avatar={
                                    tweet?.postedBy?.raw_user_meta_data
                                        .avatar_url ||
                                    "https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
                                }
                                totalLikes={tweet.likesBy}
                                totalComments={tweet.commentBy}
                                totalRetweets={tweet.retweetBy}
                                totalShare={tweet.shareBy}
                                date={tweet.createdAt}
                            />
                            {/* </Link> */}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default BerandaPage;
