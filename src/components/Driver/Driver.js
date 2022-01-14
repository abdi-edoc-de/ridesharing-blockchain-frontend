import Map from '../Common/Map'
import DriverSideBar from './DriverSideBar'
import Header from './Header'

const Driver = ({ requests, carPlate, seatNumber, setCarPlate, setSeatNumber, driverAddress, setDriverAddress }) => {
    return (
        <>
            <Header />
            <div className='container'>
                <Map />
                <DriverSideBar carPlate={carPlate} seatNumber={seatNumber} setCarPlate={setCarPlate} setSeatNumber={setSeatNumber} driverAddress={driverAddress} setDriverAddress={setDriverAddress} />
            </div>
        </>
        
    )
}

export default Driver
