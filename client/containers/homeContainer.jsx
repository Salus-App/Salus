import React, {useState} from 'react';
import { addUserActionCreator } from '../actions';
import { connect } from 'react-redux'

const onClick = (e) => {
    e.preventDefault()
    console.log(e.target)
}


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (e) => {
            e.preventDefault()
            dispatch(addUserActionCreator(e))}
    }
}

const mapStateToProps = (state) => {
    console.log('STATE', state)
    return {
        user: state.user
    }
}

const HomeContainer = (props) => {
    // const [input, useInput] = useState('');

    if (props.user === '') {
        console.log('USER', props.user)
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
    } else {
        console.log('UPDATED USER', props.user)
        return (
            <body>
                <div className ="text-center flex-center">
                    <div className = "logo">
                        <p>Salus</p>
                    </div>
                    <div id = "greeting-el"> hello, {props.user.toLowerCase()} </div>
                </div>
            </body>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)


{/* <div>
<form>
  <label htmlFor="songTitle"> Song Title:
    <input 
      type="text"
      onChange={ (e) => props.recordSearch(e.target.value)}/>
  </label>
</form>
<button
  className='search'
  onClick={props.handleSearchClick}> Search
</button>
</div> */}

// recordSearch(e) {
//     console.log(e)
//     this.setState({search: e});
//   }