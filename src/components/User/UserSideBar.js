import UpdateBox  from "./UpdateBox"

const UserSideBar = () => {
    return (
        <div className="side-bar">
            <h3>Balance : 2 eth</h3>
            <UpdateBox title='Withdraw'/>
            <UpdateBox title='Deposit'/>
        </div>
    )
}

export default UserSideBar
