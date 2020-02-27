import React, { useState }  from 'react';



function NewMember (props) {
    const [memberInfo, setMemberInfo] = useState({ name: "", email: "", role: ""});

    const submitHandler = (event) => {
        event.preventDefault();
        props.addPerson(memberInfo);
    };

    const handleChange = (event) => {
        setMemberInfo({
            ...memberInfo,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name </label>
            <input 
                 id='name'
                 type='text'
                 name='name'
                 onChange={handleChange}
                 placeholder='name'
             />
             <label htmlFor='email'>Email </label>
             <input 
                id='email'
                type='text'
                name='email'
                onChange={handleChange}
                placeholder='email'
                />
             <label htmlFor='role'>Role </label>
             <input
                 id='role'
                 type='text'
                 name='role'
                 onChange={handleChange}
                 placeholder='role'
                 />
            <button type='submit'>Add Member</button>
        </form>
    );
    
}

export default NewMember;