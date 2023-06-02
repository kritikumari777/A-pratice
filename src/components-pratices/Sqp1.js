import { useEffect, useState } from "react";

import axiox from 'axios'
function Sqp1() {

  const [Items, setItems] = useState([])
  const [dispach, setDispach] = useState('posts')

  useEffect(() => {
    axiox.get(`https://jsonplaceholder.typicode.com/${dispach}`)
      .then((res) => {
        setItems(res.data)
        console.log(JSON.stringify(res.data))
      }).catch(err => {
        console.log("somthing wrong")
      });
  }, [dispach]);
  
  return <div>
    <button onClick={() => setDispach('posts')}>Click me </button>
    <div>
    {Items.map((item, index) => (  <li key={index}>{item.id} </li>))}
    </div>
  </div>;
}

export default Sqp1