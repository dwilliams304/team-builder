import React from "react";


export default function TeamMembers(props){
    const {details} = props;


    return(
        <div className="container">
            <h2>Details for team member with id: {props.id}</h2>
            <p>Name: {details.name}</p>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

