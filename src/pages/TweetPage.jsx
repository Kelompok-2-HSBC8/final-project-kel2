import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams

import Header from "../components/Header";
import Tweet from "../components/tweetPageComponent/Tweet";
import Loading from "../components/Loading";
import { getTweetById } from "../services/tweet";
import SkeletonLoading from "../components/SkeletonLoading";
import CommentTweet from "../components/berandaComponent/CommentTweet";
import CommentCard from "../components/berandaComponent/CommentCard";

function TweetPage() {
    const { id } = useParams();
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
            <>
                <Header value="Postingan" />
                <SkeletonLoading />
                <CommentTweet />
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
            <div className="min-h-screen">
                <Header value="Postingan" />
                <Tweet data={tweet.data} />
                <CommentTweet />
                {tweet.data &&
                    tweet.data.commentBy.map((item, index) => {
                        return (
                            <CommentCard
                                key={index}
                                avatar={
                                    item?.user?.raw_user_meta_data?.avatar_url || '-'
                                }
                                name={
                                    item?.user?.raw_user_meta_data?.name || '-'
                                }
                                username={
                                    item?.user?.raw_user_meta_data?.username ||
                                    item?.user?.raw_user_meta_data?.user_name ||
                                    item?.user?.raw_user_meta_data?.name.toLowerCase().split(" ").join("")
                                }
                                content={item?.content || '-'}
                                createdAt={item?.createdAt || '-'}
                            />
                        );
                    })}
            </div>
        </>
    );
}

export default TweetPage;
