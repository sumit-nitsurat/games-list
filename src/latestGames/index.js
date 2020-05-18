import React from "react";

export const LatestGames = ({ latestGames, showAllGames }) => {
    return (
        <section style={{ marginTop: 10 }}>
            <div className="section-bar">
                <div className="section-heading"> Latest Games </div>
                <button className="btn btn-primary flex-1" onClick={showAllGames}>See All</button>
            </div>
            <div className="grid-container">
                {latestGames.slice(0, 6).map(game => (
                    <div key={game.id} className="vendor-item">
                        <img className="vendor-image" src={game.image} />
                        <div className="vendor-name">{game.name}</div>
                    </div>)
                )}
            </div>
        </section>
    );
}