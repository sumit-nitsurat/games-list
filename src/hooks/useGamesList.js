import React, { useEffect, useState } from "react";

export const useGamesList = ({activeVendorId}) => {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [hotGames, setHotGames] = useState([]);
    const [popularGames, setPopularGames] = useState([]);
    const [latestGames, setLatestGames] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const filterNodes = ({data}) => {
        const vendorDetails = data.games.edges.map(edge => edge.node);
        return vendorDetails || [];
    }

    const fetchGames = async () => {
        try {
            setLoading(true);
            const response = await fetch("/db/games.json");
            const games = await response.json();
            setGames(filterNodes({data: games.data}));
        } catch(e) {
            setLoading(false);
            setError(e.message);
        }

    }
    useEffect(() => {
        fetchGames();
    }, []);

    useEffect(() => {
        if(activeVendorId && games.length > 0) {
            const filteredGames = games.filter(game => game.vendor.id === activeVendorId);
            setFilteredGames(filteredGames);
            const length = Math.floor(filteredGames.length /3);
            const newGames = filteredGames.slice(0, length);
            const hotGames = filteredGames.slice(length, length * 2);
            const popularGames = filteredGames.slice(length * 2, filteredGames.length);
            setLatestGames(newGames);
            setHotGames(hotGames)
            setPopularGames(popularGames);
            setLoading(false);
            console.log("here", filteredGames)
        }
    }, [activeVendorId, games]);

    return {games, filteredGames, latestGames, hotGames, popularGames, isLoading, error};
}