import React from "react";

// function show() {
//   return new Date().toLocaleTimeString();
// }

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="comments">{props.text}</div>
      </div>
    </div>
  );
};
export default CommentDetail;
