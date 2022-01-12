import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">RideSharing <span className="type-of-user">User</span></h1>
            
            <Link to="/driver" className="link">
                <h4 className="use-as">Use as a Driver </h4> 
            </Link>
        </div>
    )
}

export default Header