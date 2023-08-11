import React from "react";


const Form = (props) => {
    const {update, submit, values} = props;

    const onChange = evt => {
        const name = evt.target.name;
        const {value} = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <form onSubmit={onSubmit}>
            <label>
                Name:&nbsp;
                <input 
                    placeholder='Enter name...'
                    name='name' 
                    type='text'
                    value={values.name}
                    onChange={onChange} 
                    maxLength='30'
                />
            </label><br />

            <label>
                Email:&nbsp;
                <input 
                    placeholder='Enter email...'
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={onChange}
                    maxLength='50'
                />
            </label><br />

            <label>
                Role:&nbsp;
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>--SELECT ROLE--</option>
                    <option value='Software Engineer'>Software Engineer</option>
                    <option value='Data Engineer'>Data Engineer</option>
                    <option value='Data Analytics'>Data Analytics</option>
                    <option value='Security Engineer'>Security Engineer</option>
                    <option value='Team Leader'>Team Leader</option>
                    <option value='Product Manager'>Product Manager</option>
                    <option value='Sales'>Sales</option>
                    <option value='Quality Assurance'>Quality Assurance</option>
                </select>
            </label><br />
            <input type='submit' value='Submit' className='submit-btn' />
        </form>
    )
}

export default Form;