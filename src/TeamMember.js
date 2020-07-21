import React from 'react';

export default function TeamMember(props) {
const {details} = props;
if (!details) {
    return <h3>Fetching details...</h3>
}

return (
    <div className='tmember'>
        <h3>{details.name}</h3>
        <h4>{details.role}</h4>
        <p>{details.email}</p>
    </div>
)
}