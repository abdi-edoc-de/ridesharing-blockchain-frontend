// all api calls goes here

export const fetchDrivers = async () => {
    return [{seat : 10, plate: 'A2453', lat: 23.435, long : 44.55}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55 }]
}

export const fetchRequests = async () => {
    return [
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2},
        {start : [32.33, 45.66], destination : [45.33, 92.44], amount : 2},
    ]
}