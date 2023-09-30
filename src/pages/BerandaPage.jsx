import { useEffect } from "react";
import { fetchTweets } from "../redux/slices/tweet";
import { useSelector, useDispatch } from "react-redux";
import TweetCard from "../components/berandaComponent/TweetCard";
import TweetPost from "../components/berandaComponent/TweetPost";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

function BerandaPage() {
    const { data, loading } = useSelector((state) => state.tweet);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch]);

    if (loading) {
        return (
            <>
                <Header value="Home" />
                <TweetPost />
                <div className="flex justify-center items-center">
                    <Loading />
                </div>
            </>
        );
    }

    return (
        <>
            <Header value="Home" />
            <TweetPost />

            <ul>
                {data.map((tweet) => {
                    return (
                        <li key={tweet.id}>
                            <Link to={`/tweet/${tweet.id}`}>
                                <TweetCard
                                    tweet={tweet.bodyTweet}
                                    userName={tweet.userName}
                                    displayName={tweet.displayName}
                                    avatar={tweet.avatar}
                                    totalLikes={tweet.totalLike}
                                    totalComments={tweet.totalComment}
                                    totalRetweets={tweet.totalRetweet}
                                    totalShare={tweet.totalShare}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default BerandaPage;
