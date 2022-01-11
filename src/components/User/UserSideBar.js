import DriverInfo from "./DriverInfo"
import UpdateBox  from "./UpdateBox"

const UserSideBar = () => {
    return (
        <div className="side-bar">
            <h3>Balance : 2 eth</h3>
            <UpdateBox title='Withdraw'/>
            <UpdateBox title='Deposit'/>

            <DriverInfo />
        </div>
    )
}

export default UserSideBar
