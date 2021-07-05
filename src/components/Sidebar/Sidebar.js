import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="cover pics"
        />
        <Avatar />
        <h2> {user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="stat__number">2,432</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="stat__number">1,232</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("JavaScript")}
        {recentItems("Ruby")}
        {recentItems("Ruby on Rails")}
      </div>
    </div>
  );
}

export default Sidebar;
