// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name);
}
function exactMatch(drivers,obj){
  let exact = Object.keys(obj);
  return drivers.filter(driver => driver[exact[0]] === obj[exact[0]]);
}
function exactMatchToList(drivers, obj){
  let match = Object.keys(obj);
  return drivers.filter(driver => driver[match[0]] === obj[match[0]]).map(driver => driver.name);
}