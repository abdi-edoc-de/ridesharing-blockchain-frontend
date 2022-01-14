
const DriverInfo = ({seat, plate, lat, long, id, sendRequest}) => {
    return (
        <div className="driver-info">
            <div style={{"display" : 'flex', "flexDirection" : "column", "justifyContent" : 'center'}}>
                <p>Public Key : {id} </p>
                <p>Car Seat Number : {seat} </p> 
                <p>Car Plate : {plate} </p> 
                <p>Car Location : {lat}, {long} </p>
            </div>
            <div style={{"padding" :"0 40% 0 20%"}}>

            </div>

            <button className='btn' style={{"width":"100%"}} onClick={()=>{
                sendRequest(id)
            }}>Send Request</button>
        </div>
    )
}

export default DriverInfo
