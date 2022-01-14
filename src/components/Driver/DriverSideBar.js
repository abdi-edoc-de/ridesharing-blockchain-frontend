import MyInfo from './MyInfo'
import Requests from './Requests'
const DriverSideBar = ({ carPlate, seatNumber, setCarPlate, setSeatNumber, driverAddress, setDriverAddress, requests, saveDriversInfo }) => {
    return (
        <div className="side-bar">
            <MyInfo saveDriversInfo={saveDriversInfo} carPlate={carPlate} seatNumber={seatNumber} setCarPlate={setCarPlate} setSeatNumber={setSeatNumber} driverAddress={driverAddress} setDriverAddress={setDriverAddress} />
            
            <p style={{"fontSize":"40px", "margin":"-1px"}}>Requests</p>
            <Requests requests={requests} />
        </div>
    )
}

export default DriverSideBar
