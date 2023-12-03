import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams

import Header from "../components/Header";
import Tweet from "../components/tweetPageComponent/Tweet";
import Loading from "../components/Loading";
import { getTweetById } from "../services/tweet";

function TweetPage() {
    const { id } = useParams(); // Ambil nilai ID tweet dari URL
    // const tweet = useSelector((state) => {
    //     return state.tweet.data.find((tweet) => tweet.id === id);
    // });
    const [tweet, setTweet] = useState(null);
    const getTweet = async () => {
        const { data } = await getTweetById(id);
        setTweet(data);
    };
    useEffect(() => {
        getTweet();
    });

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
            <Tweet data={tweet.data} />
        </>
    );
}

export default TweetPage;
