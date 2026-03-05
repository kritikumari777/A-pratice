import { useEffect, useState } from "react";

export default function Apigetuser() {
    const [id, setid] = useState('1')
    const [state, setState] = useState([]);

    const handleClick = async () => {
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
            setState(data)
        } catch (error) {
            console.error(error.response?.data)
        }
    }
    function checkResponse(data) {
        if (data) {
            console.log(data)
            return <div>{data.title}</div>;
        } else {
            return null;
        }
    }

    return (
        <div>
            <input placeholder="enter the id" value={id} onChange={(e) => setid(e.target.value)} />
            <button type='submit' onClick={handleClick}>Search</button>
            {checkResponse(state)}
        </div>
    );
}