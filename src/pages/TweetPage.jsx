import { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { useSelector, useDispatch } from "react-redux";
import { fetchTweets } from "../redux/slices/tweet";
import Header from "../components/Header";
import Tweet from "../components/tweetPageComponent/Tweet";
import Loading from "../components/Loading";

function TweetPage() {
    const { id } = useParams(); // Ambil nilai ID tweet dari URL
    const tweet = useSelector((state) => {
        return state.tweet.data.find((tweet) => tweet.id === id);
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch]);

    if (!tweet) {
        return (
            <div className="flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    return (
        <>
            <Header value="Postingan" />
            <Tweet data={tweet} />
        </>
    );
}

export default TweetPage;
