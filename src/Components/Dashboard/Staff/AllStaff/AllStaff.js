import React from 'react'
import {Body} from './AllStaff.styles'
import StaffCard from './StaffCard'



const AllStaff = (props) => {
    const {staffArray} = props

    return(
        <Body>
            <div>
            { Array.isArray(staffArray) && staffArray.map(staff => <StaffCard staff={staff}/>)}
            </div>
        </Body>  
    )
}


export default AllStaff
