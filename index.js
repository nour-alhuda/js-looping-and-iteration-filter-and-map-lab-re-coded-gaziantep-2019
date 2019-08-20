// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name);
}
function exactMatch(drivers,obj){
  let match = Object.keys(obj);
  return drivers.filter(driver => driver[match[0]] === obj[match[0]]);
}