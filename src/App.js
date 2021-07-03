import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AlbumList from "./album/AlbumList";
import "./App.css";
import { fetchAlbums } from "./services/albumService";

const App = () => {
    const albums = useSelector(state => state.albums); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [])
    
    return (
        <div className="albums-app">
            <h1>React Interview Challenge</h1>
            <AlbumList albums={albums || []}/>
        </div>
    )
};

export default hot(module)(App);
