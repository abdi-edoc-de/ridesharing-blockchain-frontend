import Button from "../Common/Button"

const UpdateBox = ({ title }) => {
    return (
        <div className="update-box">
            <input type="number" className="input"/>
            <div style={{"width" : "1vw"}} />
            <Button title = {title} />
        </div>
    )
}

export default UpdateBox
