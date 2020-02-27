import React from 'react';

const Member = props => {
    return (
        <div>
            <p>name = {props.member.name}</p>
            <p>email = {props.member.email}</p>
            <p>role = {props.member.role}</p>
        </div>
    )
}

export default Member;