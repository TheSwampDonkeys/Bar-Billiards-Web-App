import React, { useState } from 'react'

function NameForm(props){

    const [name, setName] = useState('');

    const handleSubmit = e => {

        e.preventDefault();

        if(!name) return;

        props.handleNameChange(name);
        console.log(name);
        setName('');

    }

    return(

        // <form id="name-change-input" style={{display: "none"}}>
        <form id="name-change-input" onSubmit={handleSubmit} >
            <input id="edit-name" type="text" onChange={e => setName(e.target.value) } />
            {/* <button type="submit" className="button">
                <i className="fas fa-check"></i>
            </button> */}
        </form>

    )

}

export default NameForm;