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
