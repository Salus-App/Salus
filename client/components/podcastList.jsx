import React from 'react';
import Podcast from './podcast.jsx';

//need to update onClickFunc to play the podcast, and then secondOnClickFunc to dispatch action to add podcast or delete if it's already added

const PodcastList = () => {
    // //mapStateToProps
    //     //maps the songList and the user
    // function mapStateToProps(state){
    //     return ({
    //         favPodCastList: state.favPodCastList,
    //         podcastList : state.podcastList
    //     })
    // }
    
    // //These are for adding a podcast to a user's favorite list
    // //mapDispatchToProps
    //     //map actions favSong 
    // function mapDispatchToProps (dispatch) {
    //     return ({
    //         addPodcast : () =>{dispatch(addPodcastActionCreator)},
    //         deletePodcast : ()=> {dispatch(deletePodcastActionCreator)}
    //     })
    // }
    //forEach podcast in podcastList, generate a component
    const podcasts = [{title: "joeRogan", host: "JOe Rogan"}, {title: "somePodcast", host: "someguy"}, {title: "someOtherPodcast", host: "somegirl"}]

    const Podcasts = podcasts.map((podcastObj) => {
        return (
            <Podcast
                title = {podcastObj.title}
                host = {podcastObj.host}
                onClickFunc = {() => console.log('hit')}
                secondOnClickFunc = {() => console.log('hit fav')}
            />
            
        )
    })

    return (
        <div>
            <h1>Podcasts</h1>
            {Podcasts}
        </div>    
    )
}

export default PodcastList; // make sure to connect mapDispatchToProps, mapStateToProps 