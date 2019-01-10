import React from "react";
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return( {
                contacts: state.contacts.filter(contact =>
                contact.id !== action.payload)
            });
        case 'ADD_CONTACT':
            return( {
                contacts: [action.payload, ...state.contacts]
            });
        default:
            return state;
    }
};

export class Provider extends React.Component {

   // dispatch(action) {this.setState(state => reducer(state, action))};

    constructor() {
        super();
        this.state = {
            contacts: [],

            dispatch: action => this.setState(state => reducer(state, action))
        };
    };

    componentDidMount() {
        axios
            .get('/home')
            .then(res => {
                console.log(res.data);
                this.setState({contacts: res.data})
            });
    }

    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

Provider.contextType = Context;

export const Consumer = Context.Consumer;