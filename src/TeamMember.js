import React from 'react';

export default function TeamMember(props) {
const {details, setEditState} = props;
if (!details) {
    return <h3>Fetching details...</h3>
}

const onEdit = event => {
event.preventDefault();
setEditState({
    name: details.name,
    email: details.email,
    role: details.role
})
}

return (
    <div className='tmember'>
        <h3>{details.name}</h3>
        <h4>{details.role}</h4>
        <p>{details.email}</p>
        <button onClick={onEdit}>Edit</button>
    </div>
)
}