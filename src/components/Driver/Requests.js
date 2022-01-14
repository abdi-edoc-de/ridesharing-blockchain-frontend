import Request from './Request'

const Requests = ({ requests }) => {
    return (
        <div className='requests'>
            { requests.length === 0 ? <p className='no-data'>You have NO Request</p> : requests.map((request, idx) => <Request key = {idx}  start = {request.start} destination= {request.destination} amount={request.amount} />)}
        </div>
    )
}

export default Requests
