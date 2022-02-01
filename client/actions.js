import * as types from './actionsTypes.js';





// create our action objects 
export const addUserActionCreator = e => ({
    type: types.ADD_USER,
    payload: e.target[0].value
});


export const renderSongActionCreator = () => ({
    type: types.RENDER_SONGLIST
});



export const renderPodcastActionCreator = () => ({
    type: types.RENDER_PODCAST
})


export const addSongActionCreator = e => ({
    // add whatever property that our information returns
    type: types.ADD_PODCAST,
    payload : e
})


export const addPodcastActionCreator = e => ({
    // add whatever the property that our information returns
    type: types.ADD_PODCAST,
    payload : e
})


export const deleteSongActionCreator = e => ({
    type : types.DELETE_SONG,
    payload : e
})


export const deletePodcastActionCreator = e => ({
    type : types.DELETE_PODCAST,
    payload: e
})