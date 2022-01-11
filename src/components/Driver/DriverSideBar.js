import Requests from './Requests'
import MyInfo from './MyInfo'

const DriverSideBar = () => {
    return (
        <div className="side-bar">
            <MyInfo />
            <Requests requests={[{start : "a", destination : "b", amount : 5}, {start : "a", destination : "b", amount : 5}, {start : "a", destination : "b", amount : 5}, {start : "a", destination : "b", amount : 5}]} />
        </div>
    )
}

export default DriverSideBar
