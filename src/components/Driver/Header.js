import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">RideSharing <span className="type-of-user">Driver</span></h1>
            
            <Link to="/" className="link">
                <h4 className="use-as">Use as a User</h4> 
            </Link>
        </div>
    )
}

export default Header
