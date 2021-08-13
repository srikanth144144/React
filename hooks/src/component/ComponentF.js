import React from "react";
import { Surename, Usercontext } from "../App";

function ComponentF() {
  return (
    <div>
      <Usercontext.Consumer>
        {(name) => {
          return (
            <Surename>
              {(sure) => {
                return (
                  <div>
                    user name{name} ,surename {sure}
                  </div>
                );
              }}
            </Surename>
          );
        }}
      </Usercontext.Consumer>
    </div>
  );
}

export default ComponentF;
