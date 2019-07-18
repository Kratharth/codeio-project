import React, { Component } from 'react';
import UserContext from './userContext';

export default class UserContextProvider extends Component {

    handleUserDetails = user => {
        this.setState({
            user
        })
    }
    state = {
        user: {
            email: '',
            password: '',
            type: ''
        },
        userDetails: this.handleUserDetails
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
} 