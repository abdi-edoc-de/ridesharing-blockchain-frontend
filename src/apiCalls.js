// all api calls goes here

export const fetchDrivers = async () => {
    return [{seat : 10, plate: 'A2453', lat: 23.435, long : 44.55, id:'xEF376FAB'}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55, id:'xEF376FAB'}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55, id:'xEF376FAB'}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55, id:'xEF376FAB'}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55, id:'xEF376FAB' }]
    // return []
}

export const fetchRequests = async () => {
    return [
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2},
    ]
    // return []
}


export const saveDriversInfo = async (driverLocation, driverAddress, seatNumber, carPlate) => {
    /// call the api and send the data, carPlate, seatNumber, driverAddress, driverLocation
    console.log(driverLocation, driverAddress, seatNumber, carPlate)
  }


  export const depositAmount = (amount) => {
      console.log("Deposited amount" + amount);
  }