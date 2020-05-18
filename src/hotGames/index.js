import React from "react";

export const HotGames = ({ hotGames, showAllGames }) => {
    return (
        <section style={{ marginTop: 10 }}>
            <div className="section-bar">
                <div className="section-heading"> Hot Games </div>
                <button className="btn btn-primary flex-1" onClick={showAllGames}>See All</button>
            </div>
            <div className=" grid-container">
                {hotGames.slice(0, 9).map((game, index) => (
                    <div key={game.id} className={`${index === 0 ? 'grid-item-1' : 'vendor-item'}`}>
                        <img className="vendor-image" src={game.image} />
                        <div className="vendor-name">{game.name}</div>
                    </div>
                )
                )}
            </div>
        </section>
    );
}