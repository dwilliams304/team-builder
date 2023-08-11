import React, {useState} from "react";


const Form = (props) => {
    const {update, submit, values} = props;
    return(
        <form>
            <label>
                Name:&nbsp;
                <input 
                    name='name' 
                    type='text'
                />
            </label><br />

            <label>
                Email:&nbsp;
                <input 
                    name='email'
                    type='email'
                />
            </label><br />

            <label>
                Role:&nbsp;
                <select>
                    <option>Software Engineer</option>
                    <option>Data Engineer</option>
                    <option>Data Analytics</option>
                    <option>Security Engineer</option>
                    <option>Team Leader</option>
                    <option>Product Manager</option>
                    <option>Sales</option>
                    <option>Quality Assurance</option>
                </select>
            </label>
        </form>
    )
}

export default Form;