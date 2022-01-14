import MyInfo from './MyInfo'

const DriverSideBar = ({ carPlate, seatNumber, setCarPlate, setSeatNumber, driverAddress, setDriverAddress }) => {
    return (
        <div className="side-bar">
            <MyInfo carPlate={carPlate} seatNumber={seatNumber} setCarPlate={setCarPlate} setSeatNumber={setSeatNumber} driverAddress={driverAddress} setDriverAddress={setDriverAddress} />
        </div>
    )
}

export default DriverSideBar
