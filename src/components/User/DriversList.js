import DriverInfo from './DriverInfo'

const DriversList = ({ drivers }) => {
    return (
        <div className='requests'>
            <h1>Available Drivers</h1>
            { drivers.map((driver, idx) => <DriverInfo key = {idx}  seat = {driver.seat} plate= {driver.plate} location={driver.location} />)}
        </div>
    )
}

export default DriversList
