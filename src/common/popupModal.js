import React, { useState } from "react";


export const PopupModal = ({games, title, closeModal}) => {

    return (<div className="modal" style={{display: "block"}} id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document" style={{maxWidth: "80%"}}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                    <button type="button" className="close" style={{width:20, paddingRight: 40}} onClick={() => closeModal(false)} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body modal-games">
                    {games.map(game => (
                        <div key={game.id} className="vendor-item">
                        <img className="vendor-image" src={game.image} />
                        <div className="vendor-name">{game.name}</div>
                    </div>
                    ))}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => closeModal(false)}>Close</button>
                </div>
            </div>
        </div>
    </div>);
}