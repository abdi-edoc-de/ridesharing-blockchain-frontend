import Request from './Request'

const Requests = ({ requests, requestAccepted }) => {
    return (
        <div className='requests'>
            { requests.length === 0 ? <p className='no-data'>You have NO Request</p> : requests.map((request, idx) => <Request requestAccepted={requestAccepted} key = {request.address} address={request.address}  start = {request.start} destination= {request.destination} amount={request.amount} />)}
        </div>
    )
}

export default Requests
