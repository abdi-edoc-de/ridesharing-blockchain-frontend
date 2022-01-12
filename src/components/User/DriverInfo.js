import Button from '../Common/Button'

const DriverInfo = ({seat, plate, location}) => {
    return (
        <div className="driver-info">
            <div style={{"display" : 'flex', "flexDirection" : "column", "justifyContent" : 'center'}}>
            <p>Car Seat Number : {seat} </p> 
            <p>Car Plate : {plate} </p> 
            <p>Car Location : {location} </p>
            </div>
            <div style={{"padding" :"0 40% 0 20%"}}>

            </div>
            <div style={{"display" : 'flex', "flexDirection" : "row", "justifyContent" : 'flex-end', "alignItems" : "center"}}>
                <Button title="Send request" />
            </div>
        </div>
    )
}

export default DriverInfo
