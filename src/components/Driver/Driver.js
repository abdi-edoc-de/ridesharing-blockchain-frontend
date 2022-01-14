import Map from '../Common/Map'
import DriverSideBar from './DriverSideBar'
import Header from './Header'

const Driver = ({ requests, carPlate, seatNumber, setCarPlate, setSeatNumber, address, setDriverAddress, saveDriversInfo }) => {
    return (
        <>
            <Header />
            <div className='container'>
                <Map />
                <DriverSideBar carPlate={carPlate} seatNumber={seatNumber} setCarPlate={setCarPlate} setSeatNumber={setSeatNumber} driverAddress={address} setDriverAddress={setDriverAddress} requests={requests} saveDriversInfo={saveDriversInfo} />
            </div>
        </>
        
    )
}

export default Driver
