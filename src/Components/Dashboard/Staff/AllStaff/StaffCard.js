import React from 'react'

const Staff = (props) => {

    const {staff} = props

    return(
        <div>
            <div>
                <p>{staff.firstName} {staff.lastName}</p>
                <p>{staff.email}</p>
            </div>
        </div>   
    )
}


export default Staff