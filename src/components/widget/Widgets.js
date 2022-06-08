import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="キーワードを入力" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId={"1508838714180612100"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ohime2022"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/ohime2022"}
          options={{ text: "#reactjs is awesome", via: "ohime2022" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
