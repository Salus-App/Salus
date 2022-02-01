import React from 'react'




export const Podcast = (props) => {
    return (
        <div className = "podcast">
            <button className = "play-btn" onClick = {props.onClickFunc} />
            {props.title}
            {props.host}
            <button className = "fav-btn" onClick = {props.secondOnClickFunc} />
        </div>
    )
}

export default Podcast