import { useEffect, useState } from "react";

export default function Apigetuser() {
    const [id, setid] = useState('1')
    const [state, setState] = useState([]);

    const handleClick = async () =>{

        try{
            
            const data = await ( await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)).json()
            setState(data)
        }
        catch (err){
           console.log(err.message)
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
            <input placeholder="enter the id" value={id} onChange={(e) => setid(e.target.value)}/>
            <button type='submit' onClick={handleClick}>Search</button>   
           {checkResponse(state)}
        </div>
    );
}