import { useEffect } from "react";

function Title(count) {
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);
}

export default Title;
