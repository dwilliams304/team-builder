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
  const [formError, setFormError] = useState('');

  const submit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newMember.name || !newMember.email || !newMember.role){
      setFormError('All fields must have a valid input.');
      return;
    }

    setTeamMembers([newMember, ...teamMembers]);
    setFormvalues(initialFormValues);
    setFormError('');
    console.log(teamMembers);
  }

  const update = (inputName, inputValue) => {
      setFormvalues({...formValues, [inputName]: inputValue});
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      {
        formError && <h2 className='error'>{formError.toUpperCase()}</h2>
      }
      <div className='member-form'>
        <Form 
          values={formValues}
          submit={submit}
          update={update}
        />
      </div>

      <div className='team-members'>
        {
          teamMembers.map((tm, idx) => {
            return(
              <TeamMembers 
                details={tm}
                key={idx}
                id={idx}
              
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
