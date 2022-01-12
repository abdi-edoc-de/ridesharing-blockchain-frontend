import Button from '../Common/Button'

const Request = ({start, destination, amount}) => {
    return (
        <div className='request'>
            <div>
                <p>Start : {start[0]}, {start[1]} </p> 
                <p> End : {destination[0]}, {destination[1]}</p>
                <p>Fee : {amount} Eth</p>
            </div>

            <p>
                <Button title='Accept' />
                <span style={{"padding" : "4px"}}/>
                <Button title='Decline' />
            </p>
        </div>
    )
}

export default Request
