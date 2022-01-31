import React from 'react';

const HomeContainer = () => {
    return (
        <body>
            <div className ="text-center flex-center">
                <div className = "logo">
                    <p>Salus</p>
                </div>
                <form id = "user-form">
                    <label htmlFor = "user"></label><br/>
                    <input className = "input-box" type = "text" id = "user" name = "user" value = "enter username"></input>
                </form>
            </div>
        </body>
    )
}

export default HomeContainer