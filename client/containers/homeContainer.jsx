import React from 'react';
import { addUserActionCreator } from '../actions';
import { connect } from 'react-redux'

const onClick = (e) => {
    e.preventDefault
    console.log(e.target[0].value)
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (e) => {
            e.preventDefault
            dispatch(addUserActionCreator(e))}
    }
}


const HomeContainer = (props) => {
    return (
        <body>
            <div className ="text-center flex-center">
                <div className = "logo">
                    <p>Salus</p>
                </div>
                <form id = "user-form" onSubmit = {(e) => props.addUser(e)}>
                    <label htmlFor = "user"></label><br/>
                    <input className = "input-box" type = "text" id = "user" name = "user" placeholder = "enter username"></input>
                    <button id = "button-login" type = "submit">Confirm</button>
                </form>
            </div>
        </body>
    )
}

export default connect(null, mapDispatchToProps)(HomeContainer)
