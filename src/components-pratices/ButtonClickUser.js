import { useEffect, useState } from "react";
import axios from "axios";

const ButtonClickUser = () => {

    const [id, setid] = useState(1);
    const [item, setItem] = useState({});

    useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
          .then((res) => {
            console.log(res.data?.name);
            setItem({name: res.data?.name});
          })
          .catch((error) => console.log(error));
      }, [id]);
    
      return (
        <div className="App">
          <button onClick={() => setid(id + 1)}>{id}</button>
          <div>{item.name}</div>
        </div>
      );
}

export default ButtonClickUser