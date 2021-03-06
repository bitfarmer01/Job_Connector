import React from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

import FeedOption from "../Feed/FeedOption";
import "./Post.css";
function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <FeedOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <FeedOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <FeedOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <FeedOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

Post.defaultProps = {
  name: "Rajath",
  description: "Full stack dev",
  message: "Taking over the world one js framework at a time ",
};
export default Post;
