import Button from '../Common/Button'

const DriverInfo = () => {
    return (
        <div className="driver-info">
            <p>Car Seat Number : </p> 
            <p>Car Plate : </p> 
            <p>Car Location : </p>
            <div style={{"display" : 'flex', "justifyContent" : 'center'}}>
                <Button title="Send request" />
            </div>
        </div>
    )
}

export default DriverInfo
