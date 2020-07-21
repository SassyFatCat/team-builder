import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './TeamMember'

function App() {
const sampleData = {name: 'Ryan', 
email: 'ryan@ryan.com',
role: 'Student'};

const [teamMembers, setTeamMembers] = useState([sampleData])

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
      </div>
  </div>
  );
}

export default App;
