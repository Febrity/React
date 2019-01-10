import React from "react";
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
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdow@mail.com',
                    phone: '555-55-558'
                },
                {
                    id: 2,
                    name: 'Karen Williams',
                    email: 'karen@mail.com',
                    pho4ne: '333-333-333'
                },
                {
                    id: 3,
                    name: 'Garry Johnson',
                    email: 'garry@mail.com',
                    phone: '444-44-444'
                }
            ],

            dispatch: action => this.setState(state => reducer(state, action))
        };
    };

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