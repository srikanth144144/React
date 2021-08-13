import { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setpost] = useState({});
  const [id, setid] = useState(1);
  const [idFromButtonclick, setidFromButtonclick] = useState(1);

  const clickhandler = () => {
    setidFromButtonclick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idFromButtonclick}`)
      .then((res) => {
        console.log(res);
        setpost(res.data);
      })
      .catch(Error);
  }, [idFromButtonclick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setid(e.target.value)} />
      <button onClick={clickhandler}>Fetch Data</button>
      <div>{post.name}</div>
      <div>{post.username}</div>
      <div>{post.email}</div>
      <div>{post.website}</div>
      {/* <ul>
        {post.map((post) => (
          <li key={post.id}>
            {post.name}+{post.email}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
