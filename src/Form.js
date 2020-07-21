import React, { useEffect } from 'react';

export default function Form(props) {
const {updateForm, updateTeamMembers, formValues, editState, setFormValues} = props;

const onChange = event => {
const name = event.target.name;
const value = event.target.value;
updateForm(name, value)
}

const onSubmit = event => {
event.preventDefault();
updateTeamMembers()
}

useEffect(() => {
setFormValues(editState)
}, [editState])

return (
<form className="form" onSubmit={onSubmit}>
    <label htmlFor="teamMemberName">Name:  
        <input 
            onChange={onChange}
            type="text"
            id="teamMemberName"
            name="name"
            placeholder="Enter name"
            value={formValues.name}
            ></input>
    </label>
    <label htmlFor="teamMemberEmail">Email:  
        <input
            onChange={onChange}
            type="email"
            id="teamMemberEmail"
            name="email"
            placeholder="Enter email"
            value={formValues.email}
            ></input>
     </label>
     <label htmlFor="teamMemberRole">Role:
        <select name="role" value={formValues.role} onChange={onChange}>
            <option value="select">Select value</option>
            <option value="Student">Student</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Build Week Project Manager">Build Week Project Manager</option>
            <option value="Instructor">Instructor</option>
        </select>
     </label>
     <button disabled={!formValues.name || !formValues.email || !formValues.role}>Submit</button>
</form>
)
}