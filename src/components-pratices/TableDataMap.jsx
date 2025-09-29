const Table = () => {
    
    const data = [
        {Id : 1, Name: "kritika", Profile: "React Devloper"},
        {Id : 2, Name: "Priti", Profile: "Next Devloper"},
        {Id : 3, Name: "kritki", Profile: "Java Devloper"},
        {Id : 4, Name: "Abhikrit", Profile: "JavaScript Devloper"},
        {Id : 5, Name: "Abhiprit", Profile: "PHP Devloper"},
        {Id : 6, Name: "Nidhi", Profile: "Python Devloper"},
        {Id : 7, Name: "kriti", Profile: "Ios Devloper"},
    ]
    
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
        <table border={1} cellPadding={5} cellSpacing={0} >
            <caption>User Detail</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>profile</th>
                </tr>
            </thead>
            <tbody>
                {data.map((des) => {
                    return (
                 <tr key={des?.Id}>
                    <td>{des?.Id}</td>
                    <td>{des?.Name}</td>
                    <td>{des?.Profile}</td>
                </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Totle user:</td> 
                </tr>
            </tfoot>
        </table>
        </div>
    )
}

export default Table