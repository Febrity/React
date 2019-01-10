import React, {Component} from 'react';

class AddContact1 extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log((this.state))
    }

    render() {

        const {name, email, phone} = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header"> Add Contact </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                defaultValue={name}
                                onChange = {this.onChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email..."
                                defaultValue={email}
                                onChange = {this.onChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone..."
                                defaultValue={phone}
                                onChange = {this.onChange.bind(this)}/>
                        </div>
                        <input
                            type="submit"
                        value="Add Contact"
                        className="btn btn-light btn-block"></input>
                    </form>

                </div>
            </div>
        );
    }
}

export default AddContact;