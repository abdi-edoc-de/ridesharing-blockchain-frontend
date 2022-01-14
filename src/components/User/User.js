import Map from '../Common/Map'
import UserSideBar from './UserSideBar'
import Header from './Header'


const User = ({ drivers, sendRequest, depositAmount, selectedDriver, setSelectedDriver, pay }) => {
    return (
        <>
            <Header />
            <div className='container'>
                <Map/>
            <UserSideBar drivers={drivers} sendRequest={sendRequest} depositAmount={depositAmount} selectedDriver={selectedDriver} setSelectedDriver={setSelectedDriver} pay={pay}/>
            </div>
        </>
    )
}

export default User
