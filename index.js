// Code your solution here
function findMatching (drivers,driverName){
    return drivers.filter(function (drivers){
    return drivers.toLowerCase()=== driverName.toLowerCase();
    
});}matchingName
matchingName
function fuzzyMatch(drivers,driversFirstTwoLetter){
    return drivers.filter(function (drivers){
        return drivers.startsWith(driversFirstTwoLetter);        
        
    })};


function matchName(drivers,nameProvided){
    return drivers.filter(function(drivers){
            return drivers.name === nameProvided;
        })
    };