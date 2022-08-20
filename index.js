// Code your solution here
function findMatching(driverarr, name ){
    return driverarr.filter(drivers => drivers.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(driversarr, name){
    return driversarr.filter(drivers => drivers.toLowerCase().startsWith(name.toLowerCase()))
}

function matchName(arr, name){
    return arr.filter(drivers => drivers.name.toLowerCase() === name.toLowerCase())
}