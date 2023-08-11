import React from "react";


const TeamMembers = (props) => {
    const {name, email, role, id} = props;


    return(
        <div>
            <h3>Details of team member with id: {id}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}


export default TeamMembers;