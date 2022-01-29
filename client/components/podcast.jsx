import React from 'react'

export const Podcast = (props) => {
    return (
        <div className = "podcast">
            <button onClick = {props.onClickFunc} />
            {props.title}
            {props.host}
        </div>
    )
}

export default Podcast