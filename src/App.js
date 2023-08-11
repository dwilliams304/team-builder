import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/form';
import TeamMembers from './components/teammembers';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
};

function App() {

  const [formValues, setFormvalues] = useState(initialFormValues);
  const [teamMembers, setTeamMembers] = useState([]);

  const submit = (inputName, inputValue) => {


  }

  const update = () => {

  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form 
        values={formValues}
        submit={submit}
        update={update}
      />

      <div className='team-members'>
        {
          teamMembers.map((tm, idx) => {
            <TeamMembers 
              key={idx}
              id={idx}
              name={tm.name}
              email={tm.email}
              role={tm.role}
            
            />
          })
        }
      </div>
    </div>
  );
}

export default App;
