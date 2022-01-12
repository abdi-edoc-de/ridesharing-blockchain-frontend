import DriversList from './DriversList'
import UserSideBar from './UserSideBar'
import Header from './Header'

const User = () => {
    return (
        <>
            <Header />
            <div className='container'>
            <DriversList drivers={[{seat : 10, plate: 'A2453', lat: 23.435, long : 44.55}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55}, {seat : 10, plate: 'A2453', lat: 23.435, long : 44.55 }]} />
                <UserSideBar />
            </div>
        </>
    )
}

export default User
