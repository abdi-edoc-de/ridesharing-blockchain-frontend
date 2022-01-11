import Button from "../Common/Button"

const UpdateBox = ({ title }) => {
    return (
        <div className="update-box">
            <Button title = {title} />
            
            <div style={{"width" : "1vw"}} />
            <input type="number" className="input"/>
        </div>
    )
}

export default UpdateBox
