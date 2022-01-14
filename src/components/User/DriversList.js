import DriverInfo from './DriverInfo'

const DriversList = ({ drivers, sendRequest }) => {
    return (
        <div className='requests'>
            <h1>Available Drivers</h1>
            { drivers.length === 0 ? <p className='no-data'>No Drivers Found</p> : drivers.map((driver, idx) => <DriverInfo key = {idx} id={driver.id}  seat = {driver.seat} plate= {driver.plate} lat={driver.lat} long={driver.long} sendRequest={sendRequest} />)}
        </div>
    )
}

export default DriversList
