//initialState
    //user
    //favSongList
    //favPodcastList
//

import * as types from './actionsTypes';

const initialState = {
    user: '',
    favSongList = [],
    favPodcastList = [],
    songList = [],
    podcastList = [],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_USER: {
            // create a new user object from the provided user input 
                // send a post request to the backend to update the new user info into the DB
            // return updated state
        }
        
        case types.ADD_SONG: {
            // change the state of the favortie song list 
               // create a copy of the array of the favSongList state 
               favSongList = state.favSongList.slice();
               favSongList.push(action.payload);

               console.log('favSongList' , favSongList);
               // send a post request to the server to update the favorite list for the specified user 
                // but how would I do this?
               return {
                   ...state,
                   favSongList: favSongList,
               }
        }

        case types.ADD_PODCAST : {
            // make a shallow copy of the states FavPodcastList in order to update the state
            favPodcastList = state.favPodcastList.slice();
            favPodcastList.push(action.payload);

            console.log('favPodcastList', favPodcastList);
            // send a post request to the server to update the user info inside the DB
                // but how would I do this?

            // return the updated state 
            return {
                ...state,
                favPodcastList : favPodcastList,
            }

        }

        case types.DELETE_SONG : {
            // make a shallow copy of the states song list 
            favSongList = state.favSongList.slice();

            for(let i=0;i<favSongList.length;i++){
                // if the song we have selected to delete is the current element
                 // delete the song
            }

            return {
                ...state,
                favSongList,
            }
        }

        case types.RENDER_SONGLIST : {
            // make a shallow copy of the states SongList 
        }
            
            
    
        default: {
            // initial render, we want to return the initial state so no bug/erros 
            return state;
        }
           
    }




}

//reducer
    //addSong
    //addPodcast
    //addUser
//