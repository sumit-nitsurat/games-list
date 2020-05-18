import React, { useEffect, useState } from "react";

export const useVendorList = () => {
    const [vendors, setVendors] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const filterNodes = ({data}) => {
        const vendorDetails = data.vendors.edges.map(edge => edge.node);
        return vendorDetails || [];
    }

    const fetchVendors = async () => {
        try {
            setLoading(true);
            const response = await fetch("/db/vendors.json");
            const vendors = await response.json();
            setVendors(filterNodes({data: vendors.data}));
            setLoading(false);
        } catch(e) {
            setLoading(false);
            setError(e.message);
        }

    }
    useEffect(() => {
        fetchVendors();
    }, []);

    return {vendors, isLoading, error};
}