import Request from './Request'

const Requests = ({ requests }) => {
    return (
        <div className='requests'>
            <h1>Requests</h1>
            { requests.map((request, idx) => <Request key = {idx}  start = {request.start} destination= {request.destination} amount={request.amount} />)}
        </div>
    )
}

export default Requests
