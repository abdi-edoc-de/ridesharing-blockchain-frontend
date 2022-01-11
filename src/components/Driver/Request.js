import Button from '../Common/Button'

const Request = ({start, destination, amount}) => {
    return (
        <div className='request'>
            <div>
                <p>Start : </p> 
                <p> End : </p>
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
