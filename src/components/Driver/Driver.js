import Requests from './Requests'
import DriverSideBar from './DriverSideBar'
import Header from './Header'

const Driver = ({ requests }) => {
    return (
        <>
            <Header />
            <div className='container'>
            <Requests requests={requests} /> 
                <DriverSideBar />
            </div>
        </>
        
    )
}

export default Driver
