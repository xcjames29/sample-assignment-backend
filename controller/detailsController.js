function getData(){
    let Data = {
        outbid: 12,
        active: 24,
        winning: 12, 
        marketValue: 40000,
        reservePrice:5000,
        streetAddress: "14 Floor St.",
        address: "New Orleans, LA 70122"
    };
    return Data;
}

function getOthersNearby(){
    let Data = [{
        outbid: 12,
        active: 24,
        winning: 12, 
        marketValue: 40000,
        reservePrice:5200, 
        streetAddress: "24 Washington Ave.",
        address: "New Orleans, LA 70122"
    },
    {
        outbid: 12,
        active: 24,
        winning: 12, 
        marketValue: 40000,
        reservePrice:5200, 
        streetAddress: "289 Hempstead St.",
        address: "New Orleans, LA 70122"
    },
    {
        outbid: 12,
        active: 24,
        winning: 12, 
        marketValue: 40000,
        reservePrice:5200, 
        streetAddress: "57 West Ave G.",
        address: "New Orleans, LA 70122"
    }];
    return Data;
}


module.exports ={
    getData,
    getOthersNearby
}
