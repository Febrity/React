import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context';
import axios from 'axios'


class Contact extends React.Component {

    constructor() {
        super();
        this.state = {
            showContactInfo: false
        };
    }

    onDeleteClick(id, dispatch) {(
        axios.delete(`/home/${id}`)
            .then(res =>  dispatch({type: 'DELETE_CONTACT', payload: id}))

        );
    };

    onShowClick(id, e) {
        this.setState({showContactInfo: !this.state.showContactInfo})
    };

    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}
                                <i className="fa fa-arrow-down" onClick={this.onShowClick.bind(this, name)} style={{cursor: 'pointer'}}></i>
                                <i className="fa fa-trash"  onClick={this.onDeleteClick.bind(this, id, value.dispatch)} style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
                                </h4>
                            {showContactInfo ? (<ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>)
                                : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;