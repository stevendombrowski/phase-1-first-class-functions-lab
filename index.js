// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    return [arrayOfDrivers[0], arrayOfDrivers[1]];
}
const returnLastTwoDrivers = function(arrayOfDrivers){
    return [arrayOfDrivers[2], arrayOfDrivers[3]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(number){
    return function(fare){
        return fare * number
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, driversfunction) {
 return driversfunction(arrayOfDrivers)   
}