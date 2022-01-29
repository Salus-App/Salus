import React from 'react';
import Podcast from './podcast.jsx';

const PodcastList = () => {
    // Going to call an action that returns a songList, how exactly is this state going to be populated?

    //const podcasts = state.podcastList

    //forEach podcast in podcastList, generate a component
    const podcasts = [{title: "joeRogan", host: "JOe Rogan"}, {title: "somePodcast", host: "someguy"}, {title: "someOtherPodcast", host: "somegirl"}]

    const Podcasts = podcasts.map((podcastObj) => {
        return (
            <Podcast
                title = {podcastObj.title}
                host = {podcastObj.host}
                onClickFunc = {() => console.log('hit')}
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

export default PodcastList