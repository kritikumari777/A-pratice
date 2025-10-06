import { useEffect, useState } from "react";
import axios from "axios";

function Sqp1() {
  const [items, setItems] = useState([]);
  const [dispatch, setDispatch] = useState("posts");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${dispatch}`)
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => setDispatch("posts")}>Posts</button>
      <button onClick={() => setDispatch("users")}>Users</button>
      <button onClick={() => setDispatch("comments")}>Comments</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.id} - {item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sqp1;
