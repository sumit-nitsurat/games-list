import React from "react";

export const NoGamesView = ({haveGames, children}) => {
    if(!haveGames) return (<div style={{textAlign:"center", marginTop: 50}}> No games found</div>);
    return (children);
}