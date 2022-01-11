import { Link } from "react-router-dom"

const Header = ({driver}) => {
    return (
        <div className="header">
            <h1 className="logo">RideSharing</h1>
            
            <Link to="/driver" className="link">
                <h4 className="use-as">Use as a {driver ? 'User' : 'Driver' }</h4> 
            </Link>
        </div>
    )
}

export default Header
