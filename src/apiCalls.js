// all api calls goes here

export const fetchDrivers = async () => {
    return [{seat : 10, plate: 'A2453', lat: 23.435, long : 44.55, id:'xEF376FAB'}, {seat : 10, plate: 'A2454', lat: 23.435, long : 44.55, id:'xEF376FAB'}, {seat : 10, plate: 'A2455', lat: 23.435, long : 44.55, id:'xEF376FAB'}, {seat : 10, plate: 'A2456', lat: 23.435, long : 44.55, id:'xEF376FAB'}, {seat : 10, plate: 'A2457', lat: 23.435, long : 44.55, id:'xEF376FAB' }]
    // return []
}

export const fetchRequests = async () => {
    return [
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2, address : "0xda78D94dA753e3ae5778AF18621EEA9476B12a20"},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2, address : "0xeF927667f6cd4A6E0803c3F57A534a424c11b311"},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2, address : "0xdfc3cAaC45d1925Bdf66b68a294bC066A3CBf1e9"},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2, address : "0x34D3ea12be996D498612bb96914a40550de73D3D"},
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

  export const requestAccepted = (userAddress, isAccepted) => {
      // request accepted for a specific user
      console.log(userAddress + " -> " + isAccepted);
  }

  export const pay = (id) => {
      // paid
      console.log("paid or what for this driver : " + id);
  }