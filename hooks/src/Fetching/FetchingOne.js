import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchingOne() {
  const [loading, setloading] = useState(true);
  const [error, seterrror] = useState("");
  const [post, setpost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((responce) => {
        setloading(false);
        setpost(responce.data);
        seterrror("");
      })
      .catch((error) => {
        setloading(false);
        setpost({});
        seterrror(" Something went Wrong!");
      });
  }, []);
  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default FetchingOne;
