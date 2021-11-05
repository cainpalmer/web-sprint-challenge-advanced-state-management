import React, { useState } from 'react';
import {addNew, errorMessage} from '../actions/index';
import {connect} from 'react-redux';
import Smurf from './Smurf';

const AddForm = (props) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            return props.errorMessage('Some items missing')
        }
        props.addNew({
            ...state,
            id: Date.now()
        });
    }

    const {name, position, nickname, description} = state;

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={description} name="description" id="description" />
            </div>
            {
                props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}</div>
            }
            <button onClick = {handleSubmit}>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

const mapActionToProps = {
    setError: errorMessage,
    addNew: addNew,
}

export default connect(mapStateToProps, mapActionToProps)(AddForm);