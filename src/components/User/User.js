import DriversList from './DriversList'
import UserSideBar from './UserSideBar'
import Header from './Header'


const User = ({ drivers }) => {
    return (
        <>
            <Header />
            <div className='container'>
            <DriversList drivers={drivers} />
                <UserSideBar />
            </div>
        </>
    )
}

export default User
