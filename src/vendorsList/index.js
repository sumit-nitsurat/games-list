import React from "react"; 

export const VendorsList = ({vendors, selectedVendor, onVendorSelect}) => {
    return (<div className="vendor-list vendor-list-view" style={{borderBottom: "1px solid rgb(192, 192, 192, 0.3)"}}>
    {vendors.map(vendor => (
    <div key={vendor.id} className={`vendor-item vendor-item-card ${selectedVendor == vendor.id ? '' :'vendor-op'}`} onClick={() => onVendorSelect(vendor.id)}>
        <img className="vendor-image" style={{height: 60, width: 60}} src={vendor.defaultImage}/>
        <div className="vendor-name">{vendor.name}</div>
    </div>)
    )}
    </div>
    );
}