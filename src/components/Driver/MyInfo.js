import Button from '../Common/Button'
import AddBox from './AddBox'
const MyInfo = () => {
    return (
        <div className='driver-info'>
            <AddBox title='Car Plate: ' />
            <AddBox title='seats: ' />
            <div style={{"display" : 'flex', "justifyContent" : 'center'}}>
                <Button title="Set" />
            </div>
        </div>
    )
}

export default MyInfo
