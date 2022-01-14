import DriversList from './DriversList'

const UserSideBar = ({ drivers, sendRequest }) => {
    return (
        <div className="side-bar">
            <div className="update-box">
                <p>Ethereum Address</p>
                <div style={{"width" : "1vw"}} />
                <input type="number" className="input"/>
            </div>
            <DriversList drivers={drivers} sendRequest={sendRequest} />
        </div>
    )
}

export default UserSideBar
