import React, { useEffect, useState }  from 'react'
import SpotifyWebApi from "spotify-web-api-js"
import './App.css';
import Login from './Login';
import Player from './Player'
import { getTokenFromUrl} from './spotify'
import {useDataLayerValue} from './DataLayer'


function App() {
  
  const spotify = new SpotifyWebApi()
  
  // const [token, setToken] = useState('')
  const [{user, token}, dispatch] = useDataLayerValue()

  useEffect(()=>{
      const hash = getTokenFromUrl()

      const _token = hash.access_token
      window.location.hash = ""
      
      if(_token){
          dispatch({
            type : "SET_TOKEN",
            token : _token,
          })

          spotify.setAccessToken(_token)

          spotify.getMe().then(user =>{
            dispatch({
              type : "SET_USER",
              user : user,
            })
          })

          spotify.getUserPlaylists().then((playlists)=>
            dispatch({
              type: "SET_PLAYLISTS",
              playlists: playlists,
            }))

          spotify.getPlaylist('39C7oTvT7MATDBpr5WtVPh').then(response =>(
            dispatch({
              type: 'SET_DISCOVER_WEEKLY',
              discover_weekly: response,
            })
          )) 
      }  
  }, [])

  return (
    <div className="app">
      {
        token? (<Player spotify={spotify} />) : (<Login />)
      }

    </div>
  );
}

export default App;
