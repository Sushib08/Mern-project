import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FollowHandler } from "../Profil/FollowHandler";
import { dateParser, isEmpty } from "../Utils";
import ReactPlayer from "react-player";
import { LikeButton } from "./LikeButton";
import { getPosts, updatePost } from "../../actions/post.actions";
import { DeleteCard } from "./DeleteCard";

export const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdtate, setTextUpdate] = useState(null);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdtate) {
      dispatch(updatePost(post._id, textUpdtate));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.pseudo;
                        else return null;
                      })
                      .join("")}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )}
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider les modifications
                  </button>
                </div>
              </div>
            )}
            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
            {post.video && (
              // <iframe
              //   width="500"
              //   height="300"
              //   src={post.video}
              //   frameBorder="0"
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //   allowFullScreen
              //   title={post._id}
              // ></iframe>
              <ReactPlayer
                url={post.video}
                width="500"
                height="300"
                title={post._id}
              />
            )}
            {userData._id === post.posterId && (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src="./img/icons/edit.svg" alt="edit" />
                </div>
                <DeleteCard id={post._id} />
              </div>
            )}
            <div className="card-footer">
              <div className="content-icon">
                <img src="./img/icons/message1.svg" alt="comment" />
                <span>{post.comments.length}</span>
              </div>
              <LikeButton post={post} />
              <img src="./img/icons/share.svg" alt="share" />
            </div>
          </div>
        </>
      )}
    </li>
  );
};
