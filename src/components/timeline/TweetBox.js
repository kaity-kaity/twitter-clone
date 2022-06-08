import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "勇者",
      username: "Hero",
      text: tweetMessage,
      verified: true,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/media/EurnC8KVoAARUzR.jpg",
      postedAt : serverTimestamp()
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="今何してる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox_imageInput"
          placeholder="画像URLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox_tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
