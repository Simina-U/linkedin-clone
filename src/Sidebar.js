import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

export default function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hashtag">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="background cover"
        />
        <Avatar
          className="sidebar__avatar"
          src={user?.photoUrl}
          // "https://images.pexels.com/photos/9849306/pexels-photo-9849306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,999</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">2,569</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem(".NET")}
        {recentItem("JavaScript")}
        {recentItem("GraphQL")}
        {recentItem("Node.js")}
        {recentItem("Next.js")}
      </div>
    </div>
  );
}
