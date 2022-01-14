import Map from '../Common/Map'
import UserSideBar from './UserSideBar'
import Header from './Header'


const User = ({ drivers, sendRequest }) => {
    return (
        <>
            <Header />
            <div className='container'>
                <Map/>
            <UserSideBar drivers={drivers} sendRequest={sendRequest} />
            </div>
        </>
    )
}

export default User
