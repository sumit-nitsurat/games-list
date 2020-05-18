import React, { useEffect, useState } from "react";
import {VendorsList} from "../vendorsList";
import {HotGames} from "../hotGames";
import {LatestGames} from "../latestGames";
import {PopularGames} from "../popularGames";
import {PopupModal} from "../common/popupModal";
import {NoGamesView} from "../common/NoGamesView";
import {useVendorList} from "../hooks/useVendorList";
import {useGamesList} from "../hooks/useGamesList";

import "./games.css";

const GamesView = () => {
    const [activeVendorId, setActiveVendorId] = useState(undefined);
    const [gameList, setGameList] = useState(undefined);
    const [modalTitle, setModalTitle] = useState("");
    const {vendors, isLoading, error} = useVendorList();
    const {games, filteredGames, latestGames, hotGames, popularGames, isLoading: loading, error: err} = useGamesList({activeVendorId});

    useEffect(() => {
        if(vendors && vendors.length > 0) {
            setActiveVendorId(vendors[0].id);
        }
    }, [vendors]);

    const onClickSeeAll = (games, title) => {
        setGameList(games);
        setModalTitle(title);
    }

    return (
        <div className="container">
            {gameList && <PopupModal closeModal={() => setGameList(undefined)} title={modalTitle} games={gameList}/>}
            {vendors.length > 0 && <VendorsList selectedVendor={activeVendorId} onVendorSelect={setActiveVendorId} vendors={vendors}/>}
            <NoGamesView haveGames={filteredGames.length}>
                <>
                {latestGames.length > 0 && <LatestGames showAllGames={() => onClickSeeAll(latestGames, "Latest Games")} latestGames={latestGames}/>}
                {hotGames.length > 0 && <HotGames showAllGames={() => onClickSeeAll(hotGames, "Hot Games")} hotGames={hotGames}/>}
                {popularGames.length > 0 && <PopularGames showAllGames={() => onClickSeeAll(popularGames, "Popular Games")} popularGames={popularGames}/>}
                </>
            </NoGamesView>
        </div>
    )
}

export default GamesView;