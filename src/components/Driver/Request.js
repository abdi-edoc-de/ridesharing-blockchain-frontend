import Button from '../Common/Button'

const Request = ({start, destination, amount, address, requestAccepted}) => {
    console.log(address);
    return (
        <div className='request'>
            <div>
                <p style={{"overflow" : "hidden"}}>Address: {address}</p>
                <p>Start : {start[0]}, {start[1]} </p> 
                <p> End : {destination[0]}, {destination[1]}</p>
                <p>Fee : {amount} Eth</p>
            </div>

            <p>
                <button type="submit"  className='btn' onClick={()=>{
                    requestAccepted(address, true)
                }}>  Accept </button>
                <span style={{"padding" : "2px"}}/>
                <button type="submit" className='btn' onClick={()=>{
                    requestAccepted(address, false)
                }}> Decline </button>
            </p>
        </div>
    )
}

export default Request
