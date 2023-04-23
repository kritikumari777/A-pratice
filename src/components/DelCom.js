import { useEffect, useState } from "react";
import axios from "axios";
export default function DelCom() {
    const [item, setitem] = useState(1)
    const [state, setstate] = useState([]);
    useEffect(
        () =>
            axios
                .get(`https://jsonplaceholder.typicode.com/${item}`)
                .then((response) => response.data)
                .then((data) => setstate(data)),
        [item]
    );

    return (
        <div>
            <button onChange={setitem(item + 1)}>click me - {item}</button>
            {/*             
            {state.map((item, index) => {
                return <li key={index}>{JSON.stringify(item)}</li>
            })} */}
        </div>
    );
}