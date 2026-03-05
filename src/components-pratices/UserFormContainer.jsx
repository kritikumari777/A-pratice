import React from 'react'
import data from "../data/data.json"
import UserForm from './UserForm'
const UserFormContainer = () => {

    return (
        <div>
            {data?.map((item, index) => {
                return (
                    <div key={index}>
                        <h3>{item?.header}</h3>
                        <UserForm fildes={item?.fildes} />
                    </div>
                )
            })}
        </div>
    )
}

export default UserFormContainer