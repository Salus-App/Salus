import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Layout from './components/layout.jsx';
import HomeContainer from './containers/homeContainer.jsx';
import PodcastContainer from './containers/podcastContainer.jsx';
import SongContainer from './containers/songContainer.jsx';

export const App = () => {
    return (
        <Routes >
            {/* <h1>SALUS! Rocks</h1> */}
            <Route path = "/" element = {<Layout />}>
                {/* Default Loaded Page  */}
                <Route index element = {<HomeContainer />} />
                <Route path = "/podcasts" element = {<PodcastContainer />} />
                <Route path = "/songs" element = {<SongContainer />} />
            </Route>
        </Routes>
    )
}

export default App
