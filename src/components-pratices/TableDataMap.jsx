import data from "../data/TableDataMap.json"

const { title, header, user, footer } = data

const Table = () => {

    return (
        <table cellPadding={5} cellSpacing={0} border={5}>
            <caption>{title}</caption>
            <thead>
                <tr>
                    {header?.map((item, i) => (
                        <th key={item?.key}>{item.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {user.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <td>{footer}</td>
                <td>{user?.length}</td>
           </tfoot>
        </table>
    )
}

export default Table