import { Link } from 'react-router-dom';
import React from 'react';


const Navbar = () => {
    //mapDispatchToProps
    //podcast -> renderSongList onclick
    //song -> renderSongList onclick
    function mapDispatchToProps(dispatch){
        return ({
            renderSongs : ()=>{dispatch(renderSongActionCreator)},
            renderPodCasts : ()=> {dispatch(renderPodcastActionCreator)}
        })
    }

    return (
        <div id = "nav-body">
            <header>
                <nav className="o-main-nav">
                    <div className="o-main-nav-m">
                        <div className="o-main-nav-logo">
                            <p>Salus</p>
                        </div>
                    </div>

                    <Link to = "/" className = "o-main-nav-link" id = "home">home</Link>
                    <Link to = "/podcasts" className = "o-main-nav-link" id = "podcasts">podcasts</Link>
                    <Link to = "/songs" className = "o-main-nav-link" id = "songs">songs</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar

