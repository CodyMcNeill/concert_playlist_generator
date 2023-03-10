import React, { useEffect } from "react";
import "./Generator.css"

const CLIENT_ID = "7ac298e52db445c2aa5c24749a0af3ca";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/generator";
const SPACE_DELIMITER = "%20";
const SCOPES = ["playlist-modify-public", "playlist-read-private", "user-read-playback-state"]
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

// http://localhost:3000/generator#access_token=BQBssWNQ6FR4RDa4rd8PKbhjtS-LDRivia8cuX1kCR31PwwWEMHLwuOgI7K_7PCTFFiiFTi0y8LlGSI-bW_LpDaEbif3vU9eY8Q3cofCX7rWdp9lTJKi1e-xZF24vcCAqnATKAdX_CxOXl8jB5FvK8RUzdLRUDzcZqSrcqqxH-FiWSHBcACPAi05FqiHx9JG2Gy-DIpHpXAeOPWu5Mc&token_type=Bearer&expires_in=3600

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

const Generator = () => {

    useEffect(() => {
        if (window.location.hash) {
          const { access_token, expires_in, token_type } =
            getReturnedParamsFromSpotifyAuth(window.location.hash);
    
          localStorage.clear();
    
          localStorage.setItem("accessToken", access_token);
          localStorage.setItem("tokenType", token_type);
          localStorage.setItem("expiresIn", expires_in);
        }
      });
    
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialogue=true`
    };

    return (
        <div className="container">
            <h1>Generator Placeholder Text</h1>
            <button onClick={handleLogin}>Log in Via Spotify</button>
        </div>
    )
};

export default Generator;