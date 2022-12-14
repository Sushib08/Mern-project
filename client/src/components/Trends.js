import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrends } from "../actions/post.actions";
import { isEmpty } from "./Utils";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

export const Trends = () => {
    const posts = useSelector((state) => state.allPostsReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const trendList = useSelector((state) => state.trendingReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (!isEmpty(posts[0])) {
        const postsArr = Object.keys(posts).map((i) => posts[i]);
        let sortedArray = postsArr.sort((a, b) => {
          return b.likers.length - a.likers.length;
        });
        sortedArray.length = 3;
        dispatch(getTrends(sortedArray));
      }
    }, [posts, dispatch]);
  
    return (
      <div className="trending-container">
        <h4>Trending</h4>
        <NavLink exact to="/trending">
          <ul>
            {trendList.length &&
              trendList.map((post) => {
                return (
                  <li key={post._id}>
                    <div>
                      {post.picture && <img src={post.picture} alt="post-pic" />}
                      {post.video && (
                      <ReactPlayer
                      url={post.video}
                      width="500"
                      height="300"
                      title={post.video}
                    />
                      )}
                      {isEmpty(post.picture) && isEmpty(post.video) && (
                        <img src={usersData[0] && usersData.map((user) => {
                          if (user._id === post.posterId) {
                            return user.picture;
                          } else return null;
                        })
                        .join("")
                      } alt="profil-pic"/>
                      )}
                    </div>
                    <div className="trend-content">
                      <p>{post.message}</p>
                      <span>Lire</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </NavLink>
      </div>
    );
  };