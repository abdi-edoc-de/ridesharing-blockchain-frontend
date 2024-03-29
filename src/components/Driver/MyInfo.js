import { useState, useEffect } from "react"

const MyInfo = ({ carPlate, seatNumber, setCarPlate, setSeatNumber, driverAddress, setDriverAddress, saveDriversInfo }) => {
    const [plate, setPlate] = useState(0)
    const [seat, setSeat] = useState(0)
    const [address, setAddress] = useState(0);
    const [location, setLocation] = useState([]);


    useEffect(()=>{
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          
          function success(pos) {
            setLocation(pos.coords)
          }
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error, options);
    }, [])

    const submit = () => {
        setCarPlate(plate)
        setSeatNumber(seat)
        setDriverAddress(address)

        saveDriversInfo(location, address, seat, plate)
    }

    return (
        <div className='driver-info'>
            
            <p>
                Car Plate : { carPlate }
            </p>
            
            <p>
                Seat Number : { seatNumber }
            </p>
            <p>
                Driver Address : {driverAddress}
            </p>
            <div className="update-box">
                <p> Plate </p>
                <div style={{"width" : "1vw"}} />
                <input type="number" className="input" value={plate} onChange={(e) => {setPlate(e.target.value)} }/>
            </div>
            <div className="update-box">
                <p> Seats </p>
                <div style={{"width" : "1vw"}} />
                <input type="number" className="input" value={seat} onChange={(e) => {setSeat(e.target.value)} }/>
            </div>
            <div className="update-box">
                <p> Ethereum Address </p>
                <div style={{"width" : "1vw"}} />
                <input type="text" className="input" value={address} onChange={(e) => {setAddress(e.target.value)} }/>
            </div>
            <div style={{"display" : 'flex', "justifyContent" : 'center'}}>
                <input type="submit" className='btn' onClick={() => {submit()}}/>
            </div>
            
        </div>
    )
}

export default MyInfo
