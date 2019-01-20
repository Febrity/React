import React, {Component} from 'react';
import {Consumer} from '../../context'
import uuid from 'uuid'
import TextInputGroup from "../header/TextInputGroup";
import axios from 'axios'


class AddContact extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(dispatch, e) {
        e.preventDefault();
        const {name, email, phone} = this.state;

        const newContact = {
            name,
            email,
            phone
        };

        if(name === '') {
            this.setState({  errors: {name: "Name is required"}});
            return;
        }

        if(email === '') {
            this.setState({  errors: {email: "Email is required"}});
            return;
        }

        if(phone === '') {
            this.setState({  errors: {phone: "Phone is required"}});
            return;
        }


        axios.post('/home', newContact).then(res => dispatch({type: 'ADD_CONTACT', payload: res.data}));


        //clear state
        this.setState({
            name: ' ',
            email: ' ',
            phone: ' ',
            errors: {}
        });

        this.props.history.push('/')
    }

    render() {

        const { name, email, phone, errors } = this.state;

        return (

            <Consumer>
                {value => {
                    return (
                        <div className="card mb-3">
                            <div className="card-header"> Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        defaultValue={name}
                                        onChange={this.onChange.bind(this)}
                                        errors={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        defaultValue={email}
                                        onChange={this.onChange.bind(this)}
                                        errors={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone"
                                        defaultValue={phone}
                                        onChange={this.onChange.bind(this)}
                                        errors={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block"></input>
                                </form>

                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default AddContact;