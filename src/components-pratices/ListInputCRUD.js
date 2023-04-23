import { useState } from "react";

export default function ListInputCRUD() {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);

    const handleChange = (e) => {
        setItem(e.target.value);
    };

    const handleDelet = (item) => {
        setItemList(
            itemList.filter((e) => {
                return e !== item;
            })
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let tempList = itemList;
        tempList.push(item);
        setItemList(tempList);
        setItem("");
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>Hello CRUD</h1>
                <input value={item} onChange={handleChange} type="text" />
                <button type="Submit">insert</button>
            </form>

            {itemList.map((item, index) => (
                <h3 key={index}>
                    {index} {item} <button>edit</button>{" "}
                    <button onClick={() => handleDelet(item)}>delet</button>
                </h3>
            ))}
        </div>
    );
}
