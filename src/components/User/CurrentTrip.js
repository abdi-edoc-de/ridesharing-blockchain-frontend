import loading from './../../assets/loading.gif'

const CurrentTrip = ({selectedDriver, pay, setShowDrivers }) => {
    return (
        <>
        <div className='current-trip'>
                <p>Public Key : {selectedDriver.id} </p>
                <p>Car Seat Number : {selectedDriver.seat} </p> 
                <p>Car Plate : {selectedDriver.plate} </p>
                <p>Car Location : {selectedDriver.lat}, {selectedDriver.long} </p>
            </div>
            <img src={loading} alt='a' style={{"width" : "100px"}} />
            <span>Trip in Progress</span> 
            <button className='btn' onClick={()=>{
                pay(selectedDriver.id)
                alert("paid")
                setShowDrivers(true)
            }}>
                Pay
            </button>
        </>
    )
}

export default CurrentTrip
