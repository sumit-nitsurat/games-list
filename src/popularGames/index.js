import React from "react";

export const PopularGames = ({ popularGames, showAllGames }) => {
    return (
        <section style={{ marginTop: 10 }}>
            <div className="section-bar">
                <div className="section-heading"> Popular Games </div>
                <button className="btn btn-primary flex-1" onClick={showAllGames}>See All</button>
            </div>
            <div className="grid-container-popular">
                {popularGames.slice(0, 9).map(game => (
                    <div key={game.id} className="vendor-item">
                        <img className="vendor-image" src={game.image} />
                        <div className="vendor-name">{game.name}</div>
                    </div>)
                )}
            </div>
        </section>
    );
}