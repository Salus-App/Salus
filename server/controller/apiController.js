<<<<<<< HEAD
=======
<<<<<<< HEAD

//makes call to spotify api


=======
>>>>>>> dev
const axios = require('axios');
const { useContext } = require('react');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi();

// apiController makes calls to the Spotify API
const apiController = {};

// method to obtain access token from Spotify
apiController.getToken = async (req, res, next) => {
    const client_id = '';
    const client_secret = '';
    try {
        const authOptions = {
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (Buffer.from(`${client_id}:${client_secret}`).toString('base64')),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                grant_type: 'client_credentials'
            }
        };
        const result = await axios(authOptions);
        spotifyApi.setAccessToken(result.data.access_token);
        return next();
    } catch (err) {
        return next({
            log: 'An error happened in the apiController.getToken middleware',
            message: { err: 'An error happened in the apiController.getToken middleware' }
        });
    }
};

apiController.getSearchShow = (req, res, next) => {
    spotifyApi.search('relaxation, meditation', ['show'], { market: 'US' })
        .then(data => {
            res.locals.search = data.body;
            next();
        }, err => {
            next({
                log: 'An error happened in the apiController.getSearchShow middleware',
                message: { err: 'An error happened in the apiController.getSearchShow middleware' }
            });
        });
}

// getting several shows - showIds is an array that includes string elements of the Spotify IDs
// example: ['1yr9UUExTaxZJqktomu7Gd', '7nnP4iUm1xKsvjkG3xtWXv']
apiController.getShows = (req, res, next) => {
    const showIds = req.query.id;
    spotifyApi.getShows(showIds, { market: 'US' })
        .then(data => {
            res.locals.shows = data.body;
            next();
        }, err => {
            next({
                log: 'An error happened in the apiController.getShows middleware',
                message: { err: 'An error happened in the apiController.getShows middleware' }
            });
        });
}

// showId is a string that includes one Spotify ID of a show
// example: '1yr9UUExTaxZJqktomu7Gd'
apiController.getShowEpisodes = (req, res, next) => {
    const showId = req.query.id;
    spotifyApi.getShowEpisodes(showId, { market: 'US' })
        .then(data => {
            res.locals.showEpisodes = data.body;
            next();
        }, err => {
            next({
                log: 'An error happened in the apiController.getShowEpisodes middleware',
                message: { err: 'An error happened in the apiController.getShowEpisodes middleware' }
            });
        });
}

// getting several episodes - episodeId is an array that includes string elements of the Spotify IDs
// example: ['1YfLrnJtzQxi6joyfzKNMt', '2fiuCTly5woWznEIXjkNfg']
apiController.getEpisodes = (req, res, next) => {
    const episodeId = req.query.id;
    spotifyApi.getEpisodes(episodeId, { market: 'US' })
        .then(data => {
            res.locals.episodes = data.body;
            next();
        }, err => {
            next({
                log: 'An error happened in the apiController.getEpisodes middleware',
                message: { err: 'An error happened in the apiController.getEpisodes middleware' }
            });
        });
}



apiController.getSearchPlaylist = (req, res, next) => {
    spotifyApi.search('relaxation, meditation', ['playlist'])
        .then(data => {
            res.locals.search = data.body;
            next();
        }, err => {
            next({
                log: 'An error happened in the apiController.getSearchPlaylist middleware',
                message: { err: 'An error happened in the apiController.getSearchPlaylist middleware' }
            });
        });
}

// playlistId is a string that includes one Spotify ID of a playlist
// example: '6VgfJqJYHiW8ytVEzhZpPz'
apiController.getPlaylist = (req, res, next) => {
    const playlistId = req.query.id;
    spotifyApi.getPlaylist(playlistId)
        .then(data => {
            res.locals.playlist = data.body;
            next();
        }, err => {
            next({
                log: 'An error happened in the apiController.getPlaylist middleware',
                message: { err: 'An error happened in the apiController.getPlaylist middleware' }
            });
        });
}

// getting several tracks - trackIds is an array that includes string elements of the Spotify IDs
// example: ['2RKpqG2VJJcJhRJxgHxmfc', '2AIxTnhDbrCpQyB4a3KjS3', '3BDnaGed5CmvWYIO3nIgVZ']
apiController.getTracks = (req, res, next) => {
    const trackIds = req.query.id;
    spotifyApi.getTracks(trackIds)
        .then(data => {
            res.locals.tracks = data.body;
            next();
        }, err => {
            next({
                log: 'An error happened in the apiController.getTracks middleware',
                message: { err: 'An error happened in the apiController.getTracks middleware' }
            });
        });
}


<<<<<<< HEAD
module.exports = apiController;
=======
module.exports = apiController;
>>>>>>> dev
>>>>>>> dev
