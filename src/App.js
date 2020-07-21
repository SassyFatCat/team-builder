import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './TeamMember'
import Form from './Form'

function App() {
const sampleData = {name: 'Ryan', 
email: 'ryan@ryan.com',
role: 'Student'};

const initialForm = {name: '', 
email: '',
role: ''};

const [teamMembers, setTeamMembers] = useState([sampleData]);
const [formValues, setFormValues] = useState(initialForm);

const updateForm = (inputName, inputValue) => {
setFormValues({
  ...formValues,
  [inputName]: inputValue
})
}

const updateTeamMembers = () => {
const newMember = {
  name: formValues.name.trim(),
  email: formValues.email.trim(),
  role: formValues.role
}
setTeamMembers([
  newMember,
  ...teamMembers
]);
setFormValues(initialForm)
}

return (
  <div className="App">
    <div className="tmembercontainer">
    <h1>Team Members</h1>
      {teamMembers.map(x => {
        return (
        <TeamMember details={x} />
        )
      })}
    </div>
      <div className="formContainer">
        <h1>Form</h1>
        <Form updateForm={updateForm} updateTeamMembers={updateTeamMembers} formValues={formValues}/>
      </div>
  </div>
  );
}

export default App;
