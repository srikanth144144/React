import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
// import Doucement from "./Doucement";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="srikanth"
          time="Today at 4:20PM"
          text="i like the React"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="g1"
          time="Today at 6:20PM"
          text="Nice class"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="ashfaaq"
          date="Today at 3PM"
          text="I like the author"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="suresh"
          date="Today at 5AM"
          text="I like the course"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="ganesh"
          date="Today at 8:26PM"
          text="I like this way "
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
//==================pra1=============

// import React from "react";
// import ReactDOM from "react-dom";
// import Message from "./Message";

// const App = () => {
//   return <Message text="Hai this is srikanth Hai madhu" name="Ashfaaq" />;
// };
// ReactDOM.render(<App />, document.querySelector("#root"));
//===========================pra2======================
// const App = () => {
//   return <Doucement />;
// };
// ReactDOM.render(<App />, document.querySelector("#root"));
