const UpdateBox = ({ title }) => {
    return (
        <div className="update-box">
            <p>{ title }</p>
            <div style={{"width" : "1vw"}} />
            <input type="number" className="input"/>
        </div>
    )
}

export default UpdateBox
